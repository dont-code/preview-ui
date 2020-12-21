import {
  clickAutoComplete, getHeaderMenu,
  getSendButton,
  getSubMenu,
  getToolbar,
  getValueTextArea,
  selectPopupChoice
} from "../support/app.po";
import { MainComponent } from '../../../preview-ui/src/app/layout/main/main.component';

describe('debug', () => {
  beforeEach(() => {
    /*cy.getService(CommandProviderService).then ((service:CommandProviderService) => {
      console.log('stubbing');
      cy.stub(service, 'receiveCommands', () => {
        console.log('stubbed');
      });
    });*/
    cy.visit('/');
  });

  it('should enable application name change', () => {
    getToolbar().should('contain.text','No Name');
    getSubMenu(3).should ('contain.text', 'Dev');
    getSubMenu(3).click();    // Move to dev page

    clickAutoComplete("template");
    selectPopupChoice(1); // Change App Name
    getSendButton ().click();
    getToolbar().should('contain.text','New Name');

  });
  it('should add Entity Menu', () => {
    getSubMenu(3).should ('contain.text', 'Dev');
    getSubMenu(3).click();    // Move to dev page

    clickAutoComplete("template");
    selectPopupChoice(2); // Create Entity name
    getValueTextArea ().clear().type ("NewItem");
    getSendButton ().click();
    getHeaderMenu(4).should('contain.text', 'Application Menu');
    getSubMenu(5).should('contain.text', 'NewItem');

  });
});
