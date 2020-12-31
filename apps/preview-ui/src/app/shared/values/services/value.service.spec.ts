import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';
import { Change, ChangeType, DontCodeModelPointer } from "@dontcode/core";
import { Subject } from "rxjs";

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should find the element at any position', () => {
    service.resetContent ({
      creation: {
        name:"Test1",
        type:"application",
        entities:{
          "aaaa":{
            name:"Entity1",
            fields: {
              "aaab":{
                name:"Field1",
                type:"string"
              }
            }
          },
          "aaac":{
            name:'Entity2',
            fields: {
              "aaad":{
                name:'Name',
                type:'boolean'
              }
            }
          }
        },
        screens: {
          "aaae":{
          name:"Screen1"
        },
        "aaaf":{
          name:"Screen2"
        }
      }
    }
    });
    expect (service.findAtPosition('creation/entities/aaaa')).toHaveProperty('name', 'Entity1');
    expect (service.findAtPosition('creation/entities/aaaa/')).toHaveProperty('name', 'Entity1');

    expect (service.findAtPosition('creation/entities/aaaa/fields/aaab')).toHaveProperty('name', 'Field1');
    expect (service.findAtPosition('creation/screens')).toHaveProperty('aaae', {"name":"Screen1"});
  });

  it('should update content correctly from commands', () => {
    service.resetContent ({
      });
    let source = new Subject<Change> ();
    service.receiveUpdatesFrom(source);
    source.next(createTestChange("creation",null,null, null,"TestName", "name"));
    expect (service.getContent()).toEqual({
      creation: {
        name:"TestName"
        }
      });
    source.next(createTestChange("creation",null,null, null,"TestApp", "type"));
    expect (service.getContent()).toEqual({
      creation: {
        name:"TestName",
        type:"TestApp"
        }
      });

    source.next(createTestChange("creation/entities",'a',null, null,"TestEntity", "name"));
    expect (service.getContent()).toEqual({
      creation: {
        name:"TestName",
        type:"TestApp",
        entities: {
          "a": {
            name:"TestEntity"
          }
        }
      }
    });

    service.resetContent ({
      creation: {
        name: "TestName"
      }
    });
    source.next(createTestChange("creation",null,'entities', 'b',
      { name:"TestEntity", type:"string" }));
    expect (service.getContent()).toEqual({
      creation: {
        name:"TestName",
        entities: {
          "b": {
            name:"TestEntity",
            type:"string"
          }
        }
      }
    });

    source.next(createTestChange("creation",null, "entities","b", "number", "type"));
    expect (service.getContent()).toEqual({
      creation: {
        name:"TestName",
        entities: {
          "b": {
            name:"TestEntity",
            type:"number"
          }
        }
      }
    });

    service.resetContent ({
      creation: {
        name: "TestName"
      }
    });
    source.next(createTestChange("creation/screens",'ab', "components","cd", "Search", "name"));
    expect (service.getContent()).toEqual({
      creation: {
        name:"TestName",
        screens: {
          "ab": {
            components:{
              "cd": {
                name:"Search"
              }
            }
          }
        }
      }
    });

  });

  function createTestChange(containerSchema: string, containerItemId: string, schema: string, itemId: string, value: any, property?:string) {
    let calcContainerItemId=containerItemId?'/'+containerItemId:'';
    let calcItemId=itemId?'/'+itemId:'';
    let calcSchema=schema?'/'+schema:'';

    if( property) {
      return new Change(ChangeType.ADD,
        containerSchema + calcContainerItemId + calcSchema + calcItemId + '/' + property,
        value, new DontCodeModelPointer(
          containerSchema + calcContainerItemId + calcSchema + calcItemId + '/' + property,
          containerSchema + calcSchema+'/'+property,
          containerSchema + calcContainerItemId+calcSchema + calcItemId,
          containerSchema + calcSchema,
          property,
          null
        ));
    } else {
      return new Change(ChangeType.ADD,
        containerSchema + calcContainerItemId + calcSchema + calcItemId,
        value, new DontCodeModelPointer(
          containerSchema + calcContainerItemId + calcSchema + calcItemId,
          containerSchema + calcSchema,
          containerSchema + calcContainerItemId,
          containerSchema,
          null,
          itemId
        ));

    }
  };


});
