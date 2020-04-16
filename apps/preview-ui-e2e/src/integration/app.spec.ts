import { getSidePanel, getToolbar, getToolbarTitle } from '../support/app.po';

describe('preview-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display standard layout', () => {

    getToolbar();
    getToolbarTitle().contains('Preview');
    getSidePanel();
  });
});
