import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListCommandsComponent } from "./debug/list-commands/list-commands.component";
import { HomeComponent } from './home/home.component';
import { InsertCommandComponent } from './debug/insert-command/insert-command.component';
import { DebugPageComponent } from './debug/debug-page/debug-page.component';
import { ScreenComponent } from './screens/screen/screen.component';
import { SharedModule } from "../shared/shared.module";
import { DynamicInsertDirective } from "../shared/dynamic/directives/dynamic-insert.directive";


@NgModule({
  declarations: [ListCommandsComponent, HomeComponent, InsertCommandComponent, DebugPageComponent, ScreenComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RoutesModule { }
