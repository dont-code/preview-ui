/**
 * Allow storing of entities in the browser local database
 */
import {DontCodeStoreCriteria, DontCodeStoreProvider} from "@dontcode/core";
import {Observable, throwError} from "rxjs";
import Dexie, {Table} from "dexie";
import {Injectable} from "@angular/core";
import {ValueService} from "../../values/services/value.service";

@Injectable({
  providedIn: 'root'
})
export class IndexedDbStorageService implements DontCodeStoreProvider{

  protected db: Dexie;

  constructor(protected values:ValueService) {
    this.db = new Dexie("Preview-UI");
  }

  deleteEntity(position: string, key: any): Promise<boolean> {
    const table = this.ensurePositionCanBeStored(position, false);

    return table.delete(key).then(() => {
      return true;
    });
  }

  loadEntity(position: string, key: any): Promise<any> {
    const table = this.ensurePositionCanBeStored(position, false);
    return table.get(key);
  }

  searchEntities(position: string, ...criteria: DontCodeStoreCriteria[]): Observable<Array<any>> {
    const table = this.ensurePositionCanBeStored(position, true);
    if (table) {
      return new Observable<Array<any>>(subscriber => {
        table.toArray().then(value => {
          subscriber.next(value);
          subscriber.complete();
        });
      });
    }
    return throwError("Impossible to store");
  }


  storeEntity(position: string, entity: any): Promise<any> {
    const table = this.ensurePositionCanBeStored(position, true);
    return table.put(entity);
  }

  ensurePositionCanBeStored (position: string, create?:boolean):Table {
    return this.ensureEntityCanBeStored(this.values.findAtPosition(position), create);
  }

  ensureEntityCanBeStored (description: any, create?:boolean):Table {
    const table = this.db.tables.find(value => {
      if (value.name === description.name) {
        return true;
      } else return false;
    });
    if (table) return table;

    if( create) {
      const tableDescription = {};
      tableDescription[description.name] = '++id';
      this.db.close();
      this.db.version(this.db.verno + 1).stores(tableDescription);
      this.db.open();

      return this.db.table(description.name);
    } else {
      return undefined;
    }
  }

}
