import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandModule } from './command/command.module';
import { ModelModule } from './model/model.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommandModule,
    ModelModule
  ]
})
export class SharedModule { }
