// Utility function to generate a random string
function generateRandomString(length = 8) {
  return Math.random().toString(36).substring(2, length + 2);
}

// Utility function to generate an email
function generateRandomEmail() {
  return `user_${generateRandomString()}@example.com`;
}

// Utility function to generate a phone number
function generateRandomPhoneNumber() {
  return '555' + Math.floor(1000000 + Math.random() * 9000000).toString(); // Generates a 10-digit phone number starting with '555'
}

describe('Registration Test', () => {
  // Handle any uncaught exceptions to avoid test failures due to unrelated errors
  Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('firebaseCloudMessaging is not defined')) {
      // Prevents Cypress from failing the test
      return false;
    }
  });

  it('should register a new user with generated data', () => {
    // Generate values for each field
    const companyName = `Company_${generateRandomString(5)}`;
    const email = generateRandomEmail();
    const phoneNumber = generateRandomPhoneNumber();
    const login = `Login_${generateRandomString(5)}`;
    const password = `PASSWORD-$${generateRandomString(10)}`;

    Cypress.env('login', login);
    Cypress.env('password', password);

    // Visit the registration page
    cy.visit('https://app.ucode.run/login');

    // Wait until the Register button is visible and click it
    cy.contains('div', 'Создайте его', { timeout: 10000 }).should('be.visible').click();

    // Step 2: Fill out the registration form
    cy.get('input[name="name"]').should('be.visible').type(companyName);
    cy.get('input[name="user_info.email"]').should('be.visible').type(email);
    cy.get('input[name="user_info.phone"]').should('be.visible').type(phoneNumber);
    cy.get('input[name="user_info.login"]').should('be.visible').type(login);
    cy.get('input[name="user_info.password"]').should('be.visible').type(password);


    // Step 3: Click the Register button to submit the form
    cy.contains('button', 'Зарегистрироваться').should('be.visible').click();
    cy.wait(6000)
  });
  it('should logim to the new user with generated data', () => {
    const login = Cypress.env('login');
    const password = Cypress.env('password');

    // Visit the login page
    cy.visit('https://app.ucode.run/login');

    // Log in with the stored credentials
    cy.get('#username').type(login);
    cy.get('#password').type(password);
    cy.contains('button', 'Enter').should('be.visible').click();
  })
});