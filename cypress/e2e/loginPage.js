// loginPage.js
class LoginPage {
  visit(url) {
      cy.visit('https://app.u-code.io/login'); 
  }

  fillUsername(username) {
      cy.get('[name="username"]').type(username).should('have.value', username);
  }

  fillPassword(password) {
      cy.get('[name="password"]').type(password).should('have.value', password);
  }

  submitLoginForm() {
      cy.get(':nth-child(2) > ._button_19zv0_1').submit();
  }
}

export default LoginPage;
