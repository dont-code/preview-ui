import {
  getHeaderMenu,
  getMainMenu, getPageTitle,
  getSubMenu,
  getToolbar
} from "../support/app.po";

describe('preview-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display standard layout', () => {
    getMainMenu();
    getHeaderMenu(1).should ('contain.text', 'Main Menu');
    getToolbar().should('contain.text','Preview');
    getSubMenu(2).should ('contain.text', 'Home');
    getSubMenu(3).should ('contain.text', 'Dev');
    getSubMenu(3).click();    // Move to dev page
    getPageTitle ().should('contain.text','Debug Page');
  });
});
