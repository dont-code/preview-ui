/**
 * Allow storing of entities in the browser local database
 */
import {DontCodeStoreCriteria, DontCodeStoreProvider} from "@dontcode/core";
import {Observable} from "rxjs";
import Dexie, {Table} from "dexie";
import {Injectable} from "@angular/core";
import {ValueService} from "../../values/services/value.service";

@Injectable({
  providedIn: 'root'
})
export class IndexedDbStorageService implements DontCodeStoreProvider{

  protected static globalDb: Dexie;

  protected db: Dexie;

  constructor(protected values:ValueService) {
    this.createDatabase();
  }

  deleteEntity(position: string, key: any): Promise<boolean> {
    return this.ensurePositionCanBeStored(position, false).then(table => {
      return table.delete(key).then(() => {
        return true;
      });
    });

  }

  loadEntity(position: string, key: any): Promise<any> {
    return this.ensurePositionCanBeStored(position, false).then (table => {
      return table.get(key);
    })
  }

  searchEntities(position: string, ...criteria: DontCodeStoreCriteria[]): Observable<Array<any>> {
    return new Observable<Array<any>>(subscriber => {
      this.ensurePositionCanBeStored(position, true).then(table => {
      return table.toArray();
    }).then (array => {
        subscriber.next(array);
        subscriber.complete();
      });
    });
  }


  storeEntity(position: string, entity: any): Promise<any> {
    return this.ensurePositionCanBeStored(position, true).then(table => {
      return table.put(entity);
    });
  }

  ensurePositionCanBeStored (position: string, create?:boolean):Promise<Table> {
    const description=this.values.findAtPosition(position);
    if (description)
      return this.ensureEntityCanBeStored(description, create);
    else{
      return Promise.reject("Error called with null description");
    }
  }

  ensureEntityCanBeStored (description: any, create?:boolean):Promise<Table> {
      // We have to make sure the database is open before we can get the list of tables
    return this.db.open().then (db => {
      let table;
      try {
        table = db.table(description.name);
      } catch (error) {
        // Just ignore table not found
      }
      if (table) return Promise.resolve(table);

      if( create) {
        const tableDescription = {};
        tableDescription[description.name] = '++_id';
        return this.changeSchema(this.db, tableDescription).then(newdb => {
          this.db = newdb;
          IndexedDbStorageService.globalDb=this.db;
          return newdb.table(description.name);
        });
      } else {
        return Promise.reject(description.name+' table not found');
      }
    })
  }

  protected changeSchema(db, schemaChanges): Promise<Dexie> {
    db.close();
    const newDb = new Dexie(db.name);

    newDb.on('blocked', ()=>false); // Silence console warning of blocked event.

    // Workaround: If DB is empty from tables, it needs to be recreated
    if (db.tables.length === 0) {
      return db.delete().then (value => {
        newDb.version(1).stores(schemaChanges);
        return newDb.open();
      })
    }

    // Extract current schema in dexie format:
    const currentSchema = db.tables.reduce((result,{name, schema}) => {
      result[name] = [
        schema.primKey.src,
        ...schema.indexes.map(idx => idx.src)
      ].join(',');
      return result;
    }, {});

    console.log("Version: " + db.verno);
    console.log("Current Schema: ", currentSchema);

    // Tell Dexie about current schema:
    newDb.version(db.verno).stores(currentSchema);
    // Tell Dexie about next schema:
    newDb.version(db.verno + 1).stores(schemaChanges);
    // Upgrade it:
    return newDb.open();
  }

  createDatabase () {
    if(!IndexedDbStorageService.globalDb)
      IndexedDbStorageService.globalDb = new Dexie("Preview-UI", {allowEmptyDB:true});
    this.db=IndexedDbStorageService.globalDb;
  }
}
