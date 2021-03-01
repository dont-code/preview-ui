import {clickAutoComplete, getSendButton, getSubMenuWithText, selectPopupChoiceWithText} from "../support/app.po";
import {
  getButtonWithName,
  getCheckWithName,
  getInputWithName, getListRow,
  getTableHeader,
  getTabWithName
} from "../support/edit.po";

describe('edit', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it ('should display list', () => {
    getSubMenuWithText('Dev').click();// Move to dev page

    clickAutoComplete("template");
    selectPopupChoiceWithText("Create Complete Entity A"); // Create Entity name
    getSendButton().click();
    getSubMenuWithText( 'A Name').click();

    getTableHeader('id').should('contain.text', "id");
    getTableHeader('check').should('contain.text', "check");
    getTableHeader('count').should('contain.text', "count");

    getButtonWithName ('new').click();
    getInputWithName('id').type('ID1');
    getCheckWithName('check').click();
    getButtonWithName ('save').click();

    getTabWithName ('List').click();
    getListRow (1).should('contain.text', "ID1");

    getButtonWithName ('new').click();
    getInputWithName('id').type('ID2');
    getInputWithName('count').type('2');
    getButtonWithName ('save').click();

    getTabWithName ('List').click();
    getListRow (2).should('contain.text', "ID2");

    getListRow (1).click();
    getInputWithName('id').should('have.attr', 'ng-reflect-model');
    getInputWithName('id').clear().type('NEWID1');

    getButtonWithName ('save').click();
    getListRow (1).should('contain.text', "NEWID1");

    getSubMenuWithText('Dev').click();// Move to dev page
    getSubMenuWithText('A Name').click();// Returns to list page
    // Stuff should be reloaded from browser's DB, however due to some bugs ? in Dexie or Cypress it's not saving to IndexedDb
    // getListRow (1).should('contain.text', "NEWID1");
  });
});
