import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandModule } from './command/command.module';
import { ModelModule } from './model/model.module';
import { ChangeModule } from './change/change.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommandModule,
    ModelModule,
    ChangeModule
  ]
})
export class SharedModule { }
