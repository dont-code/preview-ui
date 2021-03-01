import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { MainComponent } from "./main.component";
import { RouterTestingModule } from "@angular/router/testing";
import { MenuComponent } from "../menu/menu.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent, MenuComponent],
      imports: [
        RouterTestingModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
