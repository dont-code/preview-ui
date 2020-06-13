import { closeSidePanel, getSidePanel, getToolbar, getToolbarTitle } from "../support/app.po";

describe('preview-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display standard layout', () => {
    closeSidePanel();
    getToolbar();
    getToolbarTitle().should ('contain','Preview');
    getSidePanel();
  });
});
