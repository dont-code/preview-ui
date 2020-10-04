import { Component } from '@angular/core';

@Component({
  selector: 'preview-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'preview-ui';

  mainTab(): boolean {
    return window.location.hash.indexOf('/newTabDev')==-1;
  }

}
