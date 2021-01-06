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
    service.resetContent({});
    let source = new Subject<Change>();
    service.receiveUpdatesFrom(source);
    source.next(createTestChange("creation", null, null, null, "TestName", "name"));
    expect(service.getContent()).toEqual({
      creation: {
        name: "TestName"
      }
    });
    source.next(createTestChange("creation", null, null, null, "TestApp", "type"));
    expect(service.getContent()).toEqual({
      creation: {
        name: "TestName",
        type: "TestApp"
      }
    });

    source.next(createTestChange("creation/entities", 'a', null, null, "TestEntity", "name"));
    expect(service.getContent()).toEqual({
      creation: {
        name: "TestName",
        type: "TestApp",
        entities: {
          "a": {
            name: "TestEntity"
          }
        }
      }
    });

    service.resetContent({
      creation: {
        name: "TestName"
      }
    });
    source.next(createTestChange("creation", null, 'entities', 'b',
      {name: "TestEntity", type: "string"}));
    expect(service.getContent()).toEqual({
      creation: {
        name: "TestName",
        entities: {
          "b": {
            name: "TestEntity",
            type: "string"
          }
        }
      }
    });

    source.next(createTestChange("creation", null, "entities", "b", "number", "type"));
    expect(service.getContent()).toEqual({
      creation: {
        name: "TestName",
        entities: {
          "b": {
            name: "TestEntity",
            type: "number"
          }
        }
      }
    });

    service.resetContent({
      creation: {
        name: "TestName"
      }
    });
    source.next(createTestChange("creation/screens", 'ab', "components", "cd", "Search", "name"));
    expect(service.getContent()).toEqual({
      creation: {
        name: "TestName",
        screens: {
          "ab": {
            components: {
              "cd": {
                name: "Search"
              }
            }
          }
        }
      }
    });
  });

    it('should delete content correctly from commands', () => {
      service.resetContent({
        creation: {
          name: "TestName",
          type: "TestApp",
          entities: {
            "a": {
              name: "TestEntityA",
              type: "boolean"
            },
            "b": {
              name: "TestEntityB",
              type: "string"
            }
          }
        }
      });
      let source = new Subject<Change>();
      service.receiveUpdatesFrom(source);
      source.next(createDeleteChange("creation", null, null, null, "type"));
      expect(service.getContent()).toEqual({
        creation: {
          name: "TestName",
          entities: {
            "a": {
              name: "TestEntityA",
              type: "boolean"
            },
            "b": {
              name: "TestEntityB",
              type: "string"
            }
          }
        }
      });
      source.next(createDeleteChange("creation", null, "entities", "a"));
      expect(service.getContent()).toEqual({
        creation: {
          name: "TestName",
          entities: {
            "b": {
              name: "TestEntityB",
              type: "string"
            }
          }
        }
      });
      source.next(createDeleteChange("creation", null, "entities", "b", "name"));
      expect(service.getContent()).toEqual({
        creation: {
          name: "TestName",
          entities: {
            "b": {
              type: "string"
            }
          }
        }
      });
      source.next(createDeleteChange("creation", null, "entities", null,null));
      expect(service.getContent()).toEqual({
        creation: {
          name: "TestName"
        }
      });

  });

  it('should move content correctly from commands', () => {
    service.resetContent({
      creation: {
        name: "TestName",
        type: "TestApp",
        entities: {
          "a": {
            name: "TestEntityA",
            type: "boolean"
          },
          "b": {
            name: "TestEntityB",
            type: "string"
          },
          "c": {
            name: "TestEntityC",
            type: "numeric"
          }
        }
      }
    });
    const start=Object.keys(service.getContent().creation.entities);
    expect(start).toEqual(["a","b","c"]);
    let source = new Subject<Change>();
    service.receiveUpdatesFrom(source);
    // from a,b,c to b,a,c
    source.next(createMoveChange("creation/entities/b","a","creation", null, "entities", "b"));
    expect(Object.keys(service.getContent().creation.entities)).toStrictEqual(["b","a","c"]);
    // from b,a,c to b,c,a
    source.next(createMoveChange("creation/entities/c","a","creation", null, "entities", "c"));
    expect(Object.keys(service.getContent().creation.entities)).toStrictEqual(["b","c","a"]);
    // from b,c,a to c,a,b
    source.next(createMoveChange("creation/entities/b",null,"creation", null, "entities", "b"));
    expect(Object.keys(service.getContent().creation.entities)).toStrictEqual(["c","a", "b"]);
  });

  function createDeleteChange (containerSchema: string, containerItemId: string, schema: string, itemId: string, property?:string) {
    return createAnyChange(ChangeType.DELETE, containerSchema, containerItemId, schema, itemId, null, property);
  }

  function createMoveChange (oldPosition:string, beforeIdOrProperty:string, containerSchema: string, containerItemId: string, schema: string, itemId: string, property?:string) {
    const ret = createAnyChange(ChangeType.MOVE, containerSchema, containerItemId, schema, itemId, null, property);
    ret.oldPosition=oldPosition;
    ret.beforeKey=beforeIdOrProperty;
    return ret;
  }

  function createTestChange(containerSchema: string, containerItemId: string, schema: string, itemId: string, value: any, property?:string) {
    return createAnyChange(ChangeType.ADD, containerSchema, containerItemId, schema, itemId, value, property);
  }
  function createAnyChange(type:ChangeType, containerSchema: string, containerItemId: string, schema: string, itemId: string, value: any, property?:string) {
    let calcContainerItemId=containerItemId?'/'+containerItemId:'';
    let calcItemId=itemId?'/'+itemId:'';
    let calcSchema=schema?'/'+schema:'';
    let calcProperty=property?'/'+property:'';

      return new Change(type,
        containerSchema + calcContainerItemId + calcSchema + calcItemId + calcProperty,
        value, new DontCodeModelPointer(
          containerSchema + calcContainerItemId + calcSchema + calcItemId + calcProperty,
          containerSchema + calcSchema + calcProperty,
          containerSchema + calcContainerItemId+ property?(calcSchema + calcItemId):'',
          containerSchema + property?(calcSchema):'',
          property?property:null,
          property?null:itemId
        ));
  };

});
