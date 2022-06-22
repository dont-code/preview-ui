import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {SandboxModule} from "@dontcode/sandbox";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";
import {PluginCommonModule} from "@dontcode/plugin-common";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([], {
      enableTracing: false,   // <-- debugging purposes only
      useHash: true,
      relativeLinkResolution: 'corrected',
      initialNavigation: 'enabledBlocking'
    }),
    PluginCommonModule.forRoot(),
    SandboxModule.forRoot({
      webSocketUrl: environment.webSocketUrl,
      projectUrl: environment.projectApiUrl,
      documentUrl: environment.documentApiUrl,
      storeUrl: environment.storeApiUrl,
      indexedDbName: 'Dont-code Previewer',
      applicationName: 'Previewer',
      templateFileUrl: 'assets/dev/templates.json'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
