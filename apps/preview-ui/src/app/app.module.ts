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
import { BasicModule } from "@dontcode/plugin-basic";
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dev', component: DebugPageComponent },
  { path: 'newTabDev', component: DebugPageComponent},
  { matcher: segments => {
    if (segments[0] && segments[0].path==='creation')
      return { consumed:segments };
    else
      return null;
    }, component: ScreenComponent }]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, LayoutModule, SharedModule,
    RoutesModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: false,useHash:true } // <-- debugging purposes only
    ), FontAwesomeModule
    ,FlexLayoutModule
    ,ScreenModule
    ,BasicModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {}
