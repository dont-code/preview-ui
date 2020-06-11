import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { ListCommandsComponent } from './routes/debug/list-commands/list-commands.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const appRoutes: Routes = [
  { path: '', component: ListCommandsComponent }]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, LayoutModule, SharedModule,
    RoutesModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ), FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
