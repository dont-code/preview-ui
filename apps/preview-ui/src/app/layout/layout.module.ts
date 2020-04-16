import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [MainComponent, MenuComponent],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule,MatListModule
    ,RouterModule
  ]
})
export class LayoutModule { }
