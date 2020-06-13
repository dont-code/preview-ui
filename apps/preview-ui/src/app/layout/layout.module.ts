import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
  declarations: [MainComponent, MenuComponent],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule { }
