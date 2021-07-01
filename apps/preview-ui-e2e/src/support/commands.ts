// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// eslint-disable-next-line @typescript-eslint/no-namespace

declare namespace Cypress {
  interface Chainable<Subject> {
    login(email: string, password: string): void;
    findNgComponent (selector:string): Chainable<any>;
    applyChanges (component: any):void;
    getAngular (): Chainable<any>;
    clearPreviewUIDbCollection (collection:string): Promise<void>;
    //Doesn't work getService (service:any): Chainable<any>;
  }
}

function getAngular () {
  let angular!: any;
//  console.log('ngComponent', selector);
  // You can access the window object in cypress using
  //   window() method
  return cy.window()
    .then((win) => {
      // Grab a reference to the global ng object
      angular = (win as any).ng;
      return angular;
    });
}

Cypress.Commands.add('getService', (service:any) => {
  let angular!: any;
  return getAngular()
    .then((ng) => {
      angular = ng;
    })
    .then(()=> cy.document())
    .then ((doc) => {
    return angular.getInjector (doc.querySelector('preview-ui-main')).get(service);
  });
});
//
// -- This is a parent command --

Cypress.Commands.add('getAngular', () => {
  return getAngular();
});

Cypress.Commands.add('applyChanges', (component: any) => {
    getAngular().then((ng) =>{
      ng.applyChanges(component);
    });
});

Cypress.Commands.add('findNgComponent', (selector: string) => {
  let angular!: any;
//  console.log('ngComponent', selector);
  // You can access the window object in cypress using
  //   window() method
  return getAngular()
    .then((ng) => {
      angular = ng;
    })
    .then(() => cy.document())
    .then((doc) =>{
      const componentInstance = angular
        .getComponent(doc.querySelector(selector));
      return componentInstance;
    });
});

Cypress.Commands.add('clearPreviewUIDbCollection', (collection:string) => {

  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open('Preview-UI');

    request.onsuccess = function  ( event)  {
      const transaction = request.result.transaction(collection, 'readwrite');
      transaction.objectStore(collection).clear();
      transaction.oncomplete = function () {
        resolve(event);
      };
      transaction.onerror = function () {
        reject(event);
      }
    };

    // Note: we need to also listen to the "blocked" event
    // (and resolve the promise) due to https://stackoverflow.com/a/35141818
    request.addEventListener('blocked', resolve);
    request.addEventListener('error', reject);

  });
});

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
