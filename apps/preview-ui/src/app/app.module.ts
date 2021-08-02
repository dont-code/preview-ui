import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {SandboxModule} from "@dontcode/sandbox";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";

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
    SandboxModule.forRoot({
      webSocketUrl: environment.webSocketUrl,
      indexedDbName: 'Dont-code Previewer',
      applicationName: 'Previewer'
    })
  ],
//  providers: [{provide: DONTCODE_STORE_API_URL, useValue: environment.storeApiUrl}],
  bootstrap: [AppComponent]
})
export class AppModule {}
