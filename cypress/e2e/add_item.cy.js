//import './login.cy' 
import FolderPage from './folder_create.cy';
import ItemAdd from './item_add';
function generateUniqueLabel(prefix = 'Label') {
    const randomString = Math.random().toString(36).substring(2, 8); // Generates a 6-character random string
    return `${prefix}_${randomString}`;
}

describe('Testing table to u-code', () => {

    let credentials;
    const unique_id = Date.now() 
    folderName = 'main_fold' + unique_id 

    const itemAddPage =  new ItemAdd();
    const folderPage = new FolderPage();
    const uniqueLabel = generateUniqueLabel();

    before(() => {
        cy.login('/')
        cy.wait(5000)
        cy.viewport(1920, 1080)
      })
      
      after(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
      })

//       it('Create folder and get into folder',  () => {
//         cy.visit('https://app.ucode.run')
//         cy.viewport(1920, 1080)
      
//         cy.get('.MuiButton-root').contains('Create', {timeout: 14000}).click(); // Click button with text "Create"
//         cy.get('.MuiButtonBase-root').contains('Add folder', {timeout: 14000}).click(); // Select "Folder" option
//         cy.get('#folder_create', {timeout: 14000}).type(folderName).should('have.value', folderName); // Enter folder name
//         cy.get('.MuiButtonBase-root').contains('Save').click(); // Save folder


//         // // // //       // create sub folder

//   cy.contains(folderName, {timeout: 14000}).click();
//   cy.get('#add_icon', {timeout: 14000}).click()
//   cy.get('.menu > :nth-child(5)', {timeout: 14000}).click()
//   cy.get('#folder_create', {timeout: 14000}).type('sub_fold').should('have.value', 'sub_fold')
//   cy.get('.btns-row > .MuiButtonBase-root', {timeout: 14000}).click()

//   //   // create table 
//   cy.get('#create_btn', {timeout: 14000}).click();
//   cy.contains('Create table', {timeout: 14000}).click();
//   cy.get('#create_table_name').type(uniqueLabel);
//   cy.get('#create_table_key').type(uniqueLabel);
//   cy.get('._primary_19zv0_20', {timeout: 14000}).click();
//   cy.get('.MuiButtonBase-root').contains(folderName, {timeout: 14000}).click()
//   cy.get('.header > .MuiButtonBase-root', {timeout: 14000}).click()
//       })
        // get table 
  cy.contains('sub_fold', {timeout: 14000}).click();
  cy.contains(uniqueLabel, {timeout: 10000}).should('exist');
  cy.contains(uniqueLabel, {timeout: 5000}).click()
})