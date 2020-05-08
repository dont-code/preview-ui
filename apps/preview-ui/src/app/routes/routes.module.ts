import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCommandsComponent } from './debug/list-commands/list-commands.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [ListCommandsComponent],
    imports: [
        CommonModule,
        MatIconModule
    ]
})
export class RoutesModule { }
