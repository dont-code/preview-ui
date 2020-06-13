export const getSidePanel = () => cy.get('#mainSidePanel');
export const getToolbar = () => cy.get('#mainToolbar');
export const getToolbarTitle = () => getToolbar().invoke('attr', 'label');
export const closeSidePanel = () => cy.get('#mainSidePanel').invoke('removeAttr', 'visible');
