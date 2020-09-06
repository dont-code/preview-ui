import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandModule } from './command/command.module';
import { ChangeModule } from './change/change.module';
import { DynamicInsertDirective } from './dynamic/directives/dynamic-insert.directive';
import { DynamicTestComponent } from './dynamic/components/dynamic-test.component';
import { DefaultViewerComponent } from './dynamic/components/default-viewer.component';


@NgModule({
  declarations: [DynamicInsertDirective, DynamicTestComponent, DefaultViewerComponent],
  exports: [
    DynamicInsertDirective,
    DefaultViewerComponent
  ],
  imports: [
    CommonModule,
    CommandModule,
    ChangeModule
  ]
})
export class SharedModule { }
