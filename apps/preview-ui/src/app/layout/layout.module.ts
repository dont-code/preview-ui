import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { MenuComponent } from "./menu/menu.component";
import { SidebarModule } from "primeng/sidebar";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { MenuModule } from "primeng/menu";

@NgModule({
  declarations: [MainComponent, MenuComponent],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule, RouterModule, SidebarModule, ToolbarModule, ButtonModule, MenuModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule { }
