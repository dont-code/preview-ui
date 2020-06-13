import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListCommandsComponent } from "./debug/list-commands/list-commands.component";
import { HomeComponent } from './home/home.component';
import { InsertCommandComponent } from './debug/insert-command/insert-command.component';
import { DebugPageComponent } from './debug/debug-page/debug-page.component';


@NgModule({
  declarations: [ListCommandsComponent, HomeComponent, InsertCommandComponent, DebugPageComponent],
    imports: [
        CommonModule
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RoutesModule { }
