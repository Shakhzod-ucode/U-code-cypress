// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
    Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('firebaseCloudMessaging is not defined')) {
          // Returning false here prevents Cypress from failing the test
          return false;
        }
      });
    cy.fixture('users').then((user) => {
        const username = 'username';
        const password = 'password';
        cy.wait(2000)
  
        cy.visit('https://app.ucode.run/login', {timeout: 30000}); // Visit your login page
        cy.wait(4000)
  
        // Fill in the login form using data from the JSON file
        cy.get('input[name="username"]', {timeout: 16000}).type(user.username);
        cy.get('input[name="password"]', {timeout: 16000}).type(user.password);
        cy.contains('button','Enter').click(); 
        cy.wait(2000)
        cy.get('#select_client_type', {timeout: 10000}).click();
        cy.get('.MuiList-root', {timeout: 10000}).click()
        cy.contains('ADMIN', {timeout: 10000}).click()
        // Assert that the login was successful
        //cy.url().should('include', '/dashboard');
 })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })