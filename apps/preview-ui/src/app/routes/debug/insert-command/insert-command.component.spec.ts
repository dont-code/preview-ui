import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCommandComponent } from './insert-command.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe('InsertCommandComponent', () => {
  let component: InsertCommandComponent;
  let fixture: ComponentFixture<InsertCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertCommandComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
