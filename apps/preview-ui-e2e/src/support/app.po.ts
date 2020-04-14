export const getSidePanel = () => cy.get('#mainSidePanel');
export const getToolbar = () => cy.get('#mainToolbar');
export const getToolbarTitle = () => getToolbar().within(() => {
  return cy.get("span");
});
