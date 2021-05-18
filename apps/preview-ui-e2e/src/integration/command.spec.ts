import { getToolbar } from "../support/app.po";
import { MainComponent } from '../../../preview-ui/src/app/layout/main/main.component';

describe('commands', () => {
  beforeEach(() => {
    /*cy.getService(ChangeProviderService).then ((service:ChangeProviderService) => {
      console.log('stubbing');
      cy.stub(service, 'receiveCommands', () => {
        console.log('stubbed');
      });
    });*/
    cy.visit('/');
  });

  it('should display updated name', () => {
    getToolbar().should('contain.text','No Name');
    cy.findNgComponent('preview-ui-main').then((comp: MainComponent) => {
      comp.appName = 'Testing Name';
      cy.applyChanges(comp);
      getToolbar().should('contain.text','Testing Name');
    });
  });
});
