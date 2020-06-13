import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListCommandsComponent } from "./debug/list-commands/list-commands.component";


@NgModule({
  declarations: [ListCommandsComponent],
    imports: [
        CommonModule
    ]
})
export class RoutesModule { }
