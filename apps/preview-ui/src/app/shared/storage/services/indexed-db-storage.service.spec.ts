import {TestBed} from '@angular/core/testing';
import {IndexedDbStorageService} from "./indexed-db-storage.service";
import {ValueService} from "../../values/services/value.service";
import {map, takeLast} from "rxjs/operators";

describe('DevTemplateManagerService', () => {
  let service: IndexedDbStorageService;
  let valueService: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ]
    });
    service = TestBed.inject(IndexedDbStorageService);
    valueService = TestBed.inject(ValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store and load entity', done => {
    valueService.resetContent(content);
    service.storeEntity('creation/entities/a', {
      dueDate:'2020-08-01',
      code:'testA',
      count:10,
      valid:true
    }).then (value => {
      return service.loadEntity('creation/entities/a', value);
    }).then(value => {
      expect (value.code).toEqual('testA');
      done();
    }).catch(reason => {
      done(reason);
    })
  });

  it('should store and delete entity', done => {
    valueService.resetContent(content);
    service.storeEntity('creation/entities/b', {
      dueDate:'2020-08-01',
      code:'testB',
      count:10,
      valid:true
    }).then (key => {
      return service.deleteEntity('creation/entities/b', key).then(deleted => {
        return {key, deleted};
      });
    }).then(value => {
      expect (value.deleted).toEqual(true);
      return service.loadEntity('creation/entities/b', value.key)
    }).then (entity => {
      expect(entity).toBeFalsy(); // loadEntity returns undefined for a non-existant key;
      done();
    }).catch (reason => {
      done(reason.name+':'+reason.message);
    })
  });

  it('should list entities', done => {
    valueService.resetContent(content);
      // Store 10 elements in the database
    const allStores = new Array<Promise<any>> ();
    for (let i=0;i<10;i++) {
      allStores.push(service.storeEntity('creation/entities/c', {
        dueDate: '2020-08-01',
        code: 'testC'+i,
        count: i,
        valid: true
      }));
    }

    Promise.all(allStores).then (()=> {
       const cumul = new Array<any>();
       return service.searchEntities('creation/entities/c').pipe (
         map (values => {
           cumul.push(...values);
           return cumul;
          }),
         takeLast(1)
       ).toPromise();
      }
    ).then (values => {
      expect (values.length).toEqual(10);
      done();
    }).catch(reason => {
      done(reason);
    })
  });
});

const fields={
  aa: {
    name:'dueDate',
    type: 'string'
  },
  ab: {
    name:'code',
    type:'string'
  },
  ac: {
    name:'count',
    type:'number'
  },
  ad: {
    name:'valid',
    type:'boolean'
  }
}

const content={
  creation: {
    type:'application',
    entities: {
      a: {
        name:'EntityA',
        fields: fields
      },
      b: {
        name:'EntityB',
        fields: fields
      },
      c: {
        name:'EntityC',
        fields: fields
      },
      d: {
        name:'EntityD',
        fields: fields
      }
    }

  }
}