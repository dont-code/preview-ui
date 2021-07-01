import {clickAutoComplete, getSendButton, getSubMenuWithText, selectPopupChoiceWithText} from "../support/app.po";
import {
  getButtonWithName,
  getCheckWithName,
  getInputWithName, getListRow, getListRowWithText,
  getTableHeader,
  getTabWithName
} from "../support/edit.po";

describe('edit', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it ('should display list', () => {
    cy.clearPreviewUIDbCollection('A Name').then (() => {
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
      getListRowWithText ( "ID1");

      getButtonWithName ('new').click();
      getInputWithName('id').type('ID2');
      getInputWithName('count').type('2');
      getButtonWithName ('save').click();

      getTabWithName ('List').click();
      getListRowWithText ("ID2");

      getListRowWithText ("ID1").click();
      getInputWithName('id').clear().type('NEWID1');

      getButtonWithName ('save').click();
      getListRowWithText ( "NEWID1");

      getSubMenuWithText('Dev').click();// Move to dev page
      getSubMenuWithText('A Name').click();// Returns to list page
      getListRowWithText( "NEWID1");

      // Delete ID2
      getListRowWithText ("ID2").click();
      getButtonWithName('delete').click();
      // It should have automatically switched back to the list, however I can't test that ID2 is gone.
      getListRowWithText( "NEWID1");
    });
  });
});
