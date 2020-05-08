import { getToolbarTitle } from '../support/app.po';
import { MainComponent } from '../../../preview-ui/src/app/layout/main/main.component';
import { getMenuForEntity } from '../support/command.po';

describe('commands', () => {
  beforeEach(() => {
    /*cy.getService(CommandProviderService).then ((service:CommandProviderService) => {
      console.log('stubbing');
      cy.stub(service, 'receiveCommands', () => {
        console.log('stubbed');
      });
    });*/
    cy.visit('/');
  });

  it('should display updated name', () => {

    getToolbarTitle().contains('New Name');
    cy.findNgComponent('preview-ui-main').then((comp: MainComponent) => {
      comp.appName = 'Testing Name';
      cy.applyChanges(comp);
      getToolbarTitle().contains('Testing Name');
    });
  });
  /*it('should display entities menu', () => {
    getMenuForEntity('ToDoItem');
    getMenuForEntity('Country');
  });*/
});
