export const getTableHeader = (name:string) => cy.get('[ng-reflect-field="'+name+'"][tabindex="0"]');
export const getButtonWithName = (name:string) => cy.get('button[name="'+name+'"]');
export const getInputWithName = (name:string) => cy.get('input[ng-reflect-name="'+name+'"], input[name="'+name+'"]');
export const getCheckWithName = (name:string) => cy.get('p-checkbox[ng-reflect-name="'+name+'"]');

export const getTabWithName = (name:string) => cy.get('a[role="tab"] > span').contains(name);
export const getListRow = (row:number) => cy.get('table > tbody > :nth-child('+row+')');
export const getListRowWithText = (text:string) => cy.get('table > tbody > tr').contains('tr', text);
