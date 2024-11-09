class FolderPage {

    createFolder(folderName) {
        cy.get('.MuiButton-root').contains('Create', {timeout: 14000}).click();
        cy.get('.MuiButtonBase-root').contains('Add folder', {timeout: 14000}).click();
        cy.get('#folder_create', {timeout: 14000}).type('folder').should('have.value', 'folder');
        cy.get('.MuiButtonBase-root').contains('Save').click();
        cy.wait(9000)
        cy.contains('folder').should('exist')
    }

    addSubfolder(folderName) {
        cy.contains(folderName, {timeout: 14000}).click();
       
    }
    createSubFolder(subfolderName) {
        cy.get('#add_icon', {timeout: 14000}).click();
        cy.get('.menu > :nth-child(5)', {timeout: 14000}).click();
        cy.get('#folder_create', {timeout: 14000}).type(subfolderName).should('have.value', subfolderName);
        cy.get('.btns-row > .MuiButtonBase-root', {timeout: 14000}).click();
    }
    createTable(folderName, tableName, keyName) {
        cy.contains(folderName, {timeout: 14000}).click();
        cy.get('#create_btn', {timeout: 14000}).click();
        cy.contains('Create table', {timeout: 14000}).click();
        cy.get('#create_table_name', {timeout: 14000}).type(tableName).should('have.value', tableName);
        cy.get('#create_table_key', {timeout: 14000}).type(keyName).should('have.value', keyName);
        cy.get('._primary_19zv0_20', {timeout: 14000}).click();
    }

    deleteTable(tableName) {
        cy.contains(tableName, {timeout: 14000});
        cy.get('.css-nb2z2f > .icon_group > .extra_icon', {timeout: 15000}).invoke('show');
        cy.get(':nth-child(2) > .css-5030pi > .parent-block > .MuiButtonBase-root > .label > .css-nb2z2f > .icon_group > .extra_icon', {timeout: 7000}).click();
        cy.contains('Delete').click();
        cy.wait(5000);
        cy.contains(tableName).should('not.exist');
    }

    addItemToTable(subfolderName, tableName) {
        cy.contains(subfolderName, {timeout: 14000}).click();
        cy.contains(tableName).should('exist');
        cy.contains(tableName, {timeout: 5000}).click();

        cy.get('.extra_icon.MuiBox-root').invoke('show');
        cy.get('.extra_icon > [data-testid="AddIcon"]').click();
        cy.get('.menu > :nth-child(2)', {timeout: 5000}).click();
        cy.get('#attributes\\.label_en').type(tableName).should('have.value', tableName);
        cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root', {timeout: 5000}).click();
        cy.contains(tableName, {timeout: 8000}).click();
        cy.get('.btns-row > .MuiButtonBase-root', {timeout: 5000}).click();
    }
}

export default FolderPage;
