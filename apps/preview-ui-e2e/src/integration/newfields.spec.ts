import {clickAutoComplete, getSendButton, getSubMenuWithText, selectPopupChoiceWithText} from "../support/app.po";
import {
  getButtonWithName, getCheckWithName, getDatePicker,
  getImageWithClass,
  getInputWithName,
  getLinkWithUrl,
  getListRowWithText,
  getTabWithName
} from "../support/edit.po";

describe('preview-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display images and url',  () => {
    cy.clearPreviewUIDbCollection("Recipe").then (() => {
      // First load the Task Manager app
      getSubMenuWithText('Dev').click();// Move to dev page
      clickAutoComplete("template");
      selectPopupChoiceWithText("Recipe Collection");
      getSendButton().click();
      getSubMenuWithText( 'Recipe').click();

      getButtonWithName ('new').click();
      getInputWithName('Name').type('Test Recipe');
      getInputWithName('Image').type ('https://test.dont-code.net/poweredby.png');
      getInputWithName('Link').type ('https://test.dont-code.net');
      getButtonWithName ('save').click();

      getTabWithName ('List').click();
      getListRowWithText ( "Test Recipe");
      getImageWithClass ('inline-image').should ('have.attr', 'src', 'https://test.dont-code.net/poweredby.png');
      getLinkWithUrl ('https://test.dont-code.net');

    });

  });

  it('should support date and time', () => {
    cy.clearPreviewUIDbCollection("Test Task").then (() => {
        // First load the Task Manager app
      getSubMenuWithText('Dev').click();// Move to dev page
      clickAutoComplete("template");
      selectPopupChoiceWithText("Task Manager Application"); // Create Entity name
      getSendButton().click();
      getSubMenuWithText( 'Test Task').click();

      getButtonWithName ('new').click();
      getInputWithName('Name').type('First Task');
      getInputWithName('Due Date').type('05/05/2004');
      getCheckWithName('Done').click({force:true});
      getButtonWithName ('save').click();

      getTabWithName ('List').click();
      getButtonWithName ('new').click();
      getInputWithName('Name').type('Second Task');
      getInputWithName('Due Date').click();
      getDatePicker ("6").click();
      getButtonWithName ('save').click();

      getTabWithName ('List').click();

      getListRowWithText("5/5/04");

    });
  });

});
