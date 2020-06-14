import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenComponent } from './screen.component';
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { ActivatedRoute } from "@angular/router";

describe('ScreenComponent', () => {
  let component: ScreenComponent;
  let fixture: ComponentFixture<ScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenComponent ],
      providers: [{
        provide: ActivatedRoute, useValue: {
          paramMap: of({ id: 'a' })
        }
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
