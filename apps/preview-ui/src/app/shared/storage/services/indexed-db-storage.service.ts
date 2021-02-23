/**
 * Allow storing of entities in the browser local database
 */
import {DontCodeStoreCriteria, DontCodeStoreProvider} from "@dontcode/core";
import {Observable} from "rxjs";
import Dexie from "dexie";
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
    return Promise.resolve(false);
  }

  loadEntity(position: string, key: any): Promise<any> {
    return Promise.resolve(undefined);
  }

  searchEntities(position: string, ...criteria: DontCodeStoreCriteria[]): Observable<Array<any>> {
    return undefined;
  }

  storeEntity(position: string, entity: any): Promise<boolean> {
    return Promise.resolve(false);
  }

}
