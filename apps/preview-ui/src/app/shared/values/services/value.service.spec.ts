import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

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
});
