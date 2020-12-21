export const getToolbar = () => cy.get('.p-toolbar');
export const getMainMenu = () => cy.get('#mainMenu');
export const getHeaderMenu = (pos:number) => cy.get("#mainMenu > .p-grid > .p-col > .ng-trigger > .p-menu-list > :nth-child("+pos+")");
export const getSubMenu = (pos:number) => cy.get("#mainMenu > .p-grid > .p-col > .ng-trigger > .p-menu-list > :nth-child("+pos+") > .p-menuitem-link");
export const getPageTitle = () => cy.get('h1');

export const clickAutoComplete = (name:string) => cy.get("#"+name+" > .p-autocomplete > .p-autocomplete-dropdown").click();
export const selectPopupChoice = (pos:number) => cy.get("#pr_id_1_list > :nth-child("+pos+")").click();
export const getSendButton = () => cy.get("#sendButton");
export const getValueTextArea = () => cy.get("#value");
