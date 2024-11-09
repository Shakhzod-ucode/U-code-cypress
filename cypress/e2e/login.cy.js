describe('User Login Test', () => {
  Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('firebaseCloudMessaging is not defined')) {
      // Returning false here prevents Cypress from failing the test
      return false;
    }
  });
  it('should log in with valid credentials', () => {
    // Load data from user.json
    cy.fixture('users').then((user) => {
      const username = 'username';
      const password = 'password';
      cy.wait(2000)
      cy.visit('https://app.ucode.run/login', {timeout: 30000}); // Visit your login page
      cy.wait(3000)
      // Fill in the login form using data from the JSON file
      cy.get('[name="username"]').type(user.username);
      cy.get('[name="password"]').type(user.password);
      cy.contains('button','Enter').click(); 
      cy.wait(2000)
      cy.get('#select_client_type', {timeout: 10000}).click();
      cy.get('.MuiList-root', {timeout: 10000}).click()
      cy.contains('ADMIN', {timeout: 10000}).click()
      // Assert that the login was successful
      //cy.url().should('include', '/dashboard');
    });
  });
});