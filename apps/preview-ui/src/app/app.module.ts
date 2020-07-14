import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "./layout/layout.module";
import { SharedModule } from "./shared/shared.module";
import { RoutesModule } from "./routes/routes.module";
import { RouterModule, Routes } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import "@kor-ui/kor";
import { HomeComponent } from "./routes/home/home.component";
import { DebugPageComponent } from "./routes/debug/debug-page/debug-page.component";
import { ScreenComponent } from "./routes/screens/screen/screen.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ScreenModule } from "@dontcode/plugin-screen";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dev', component: DebugPageComponent },
  { path: 'screens/:id', component: ScreenComponent }]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, LayoutModule, SharedModule,
    RoutesModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ), FontAwesomeModule
  ,FlexLayoutModule
  ,ScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {}
