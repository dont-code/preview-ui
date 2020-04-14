import { getSidePanel, getToolbar, getToolbarTitle } from '../support/app.po';

describe('preview-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display standard layout', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    getToolbar();
    getToolbarTitle().contains('Preview');
    getSidePanel();
  });
});
