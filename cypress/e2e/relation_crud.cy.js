  // for table crud
  describe('Testing table to u-code', () => {

    beforeEach(() => {
      cy.login('/')
      cy.wait(5000)
      cy.viewport(1920, 1080);
    });

    const username = 'montella';    
    const password = 'montella';  
    const unique_id = Date.now();
    const folderName = 'folder_' + unique_id;
    const RelationFieldName = 'relation_from';
    const RelationToName = 'relation_to';
    const tableName = 'table1' + unique_id;
    const keyName = 'table1' + unique_id;
    const sec_tableName = 'sec_table' + unique_id;
    const sec_keyName = 'sec_table' + unique_id;
    const sec_folder = 'sec_folder' + unique_id;

  
    it('Login to u-code positive', () => {
      // cy.visit('https://app.ucode.run/login');
      // cy.wait(5000); 
  
      // //LOGIN
      // cy.get('[name="username"]').type(username).should('have.value', username);
      // cy.get('[name="password"]').type(password).should('have.value', password); 
      // cy.get(':nth-child(2) > ._button_19zv0_1').click(); // Click button with text "Enter"
  
    //into table 
    
    cy.get('.MuiButton-root', {timeout: 10000}).contains('Create', {timeout: 20000}).click(); // Click button with text "Create"
    cy.get('.MuiButtonBase-root').contains('Add folder').click(); // Select "Folder" option
    cy.get('#folder_create').type(folderName).should('have.value', folderName); // Enter folder name
    cy.get('.MuiButtonBase-root').contains('Save', {timeout: 15000}).click(); // Save folder
    


    cy.get('.MuiButton-root').contains('Create', {timeout: 15000}).click(); // Click button with text "Create"
    cy.get('.MuiButtonBase-root').contains('Add folder', {timeout: 15000}).click(); // Select "Folder" option
    cy.get('#folder_create').type(sec_folder).should('have.value', sec_folder); // Enter folder name
    cy.get('.MuiButtonBase-root').contains('Save').click(); // Save folder


    // **Create table:**
    cy.get('.MuiButtonBase-root').contains(folderName, {timeout: 15000}).click(); // Нажмите кнопку с текстом "folder" для выбора нужного фолдера
    cy.get('.MuiButton-root').contains('Create', {timeout: 15000}).click();
    cy.get('.menu > :nth-child(1)').click(); // Выберите опцию "table"
    cy.get('#create_table_name').type(tableName).should('have.value', tableName); // Введите имя таблицы
    cy.get('#create_table_key').type(keyName).should('have.value', keyName); // Введите ключ таблицы
    cy.get('._primary_19zv0_20').click(); // Нажмите кнопку "Save" для сохранения таблицы
    cy.contains(folderName, {timeout: 15000}).click()



    cy.wait(1000); // Wait for 1 second to give the page time to load the folder
    cy.contains(sec_folder, {timeout: 15000}).click({ force: true });
    // // cy.get('.MuiButton-root').contains('Create', {timeout: 15000}).click();
    cy.get('#create_btn', {timeout: 14000}).click();
    cy.get('.menu > :nth-child(1)', {timeout: 15000}).click(); // Выберите опцию "table"
    cy.get('#create_table_name').type(sec_tableName).should('have.value', sec_tableName); // Введите имя таблицы
    cy.get('#create_table_key').type(sec_keyName).should('have.value', sec_keyName); // Введите ключ таблицы
    cy.get('._primary_19zv0_20').click(); // Нажмите кнопку "Save" для сохранения таблицы
    cy.contains(sec_folder, {timeout: 15000}).click()
 


    cy.wait(5000)
    cy.contains(sec_tableName, {timeout: 15000}).click()
    //cy.get('[style="border-color: rgb(168, 168, 168); width: 35px; height: 35px; padding: 0px; min-width: 35px;"]').click();
    cy.get('[style="padding: 0px 4px; position: sticky; right: 0px; background-color: rgb(255, 255, 255); z-index: 1;"]', {timeout: 15000}).click()
    // cy.get('.MuiButtonBase-root').contains('Relation', {timeout: 15000}).click()
    // cy.get('#create_field_label').type(RelationFieldName).should('have.value', RelationFieldName)
    // cy.get('#create_tab_label').type(RelationToName).should('have.value', RelationToName)
    // cy.get('._relation_rhlqa_66 > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select', {timeout: 15000}).click()
    // cy.get('.MuiButtonBase-root').contains('Single', {timeout: 15000}).click()
    // cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select', {timeout: 15000}).click()

    // // Click on the element containing the text stored in the variable sec_sec_tableName
    // cy.contains(tableName, {timeout: 15000}).click()
    
    
    // cy.get(':nth-child(3) > .MuiInputBase-root > .MuiSelect-select', {timeout: 15000}).click();
    
    // cy.get('.MuiButtonBase-root').contains('ID', {timeout: 15000}).click()
    // cy.get('body').click();
    // cy.get('.MuiButton-containedPrimary', {timeout: 15000}).click()


    
    // cy.get('[style="padding: 0px 4px; position: sticky; right: 0px; background-color: rgb(255, 255, 255); z-index: 1;"]', {timeout: 15000}).click()
    // cy.get('.MuiButtonBase-root').contains('Relation', {timeout: 15000}).click()
    
    // cy.get('#create_field_label').type(RelationFieldName).should('have.value', RelationFieldName)
    // cy.get('#create_tab_label').type(RelationToName).should('have.value', RelationToName)
    // cy.get('._relation_rhlqa_66 > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select', {timeout: 15000}).click()
    
    // cy.get('.MuiButtonBase-root').contains('Multi', {timeout: 15000}).click()
    // cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select', {timeout: 15000}).click()
    // cy.contains(tableName, {timeout: 15000}).click()

    // cy.get(':nth-child(3) > .MuiInputBase-root > .MuiSelect-select', {timeout: 15000}).click();
   
    // cy.get('.MuiButtonBase-root').contains('ID', {timeout: 15000}).click()
    // cy.get('body').click();
    // cy.get('.MuiButton-containedPrimary', {timeout: 15000}).click()

    // cy.get('.FiltersBlock > :nth-child(2) > :nth-child(2)', {timeout: 15000}).click()
    // cy.contains('Relations, {timeout: 15000}').click()
    
    // cy.get('.success', {timeout: 15000}).eq(0).click({force: true}) 
    

    
    // cy.get('#relation_label_from_en').clear().type('updated_rel_from').should('have.value', 'updated_rel_from')     

    // cy.get('#relation_label_to_en').clear().type('updated_rel_to').should('have.value', 'updated_rel_to' )
    
    // cy.get('._settingsFooter_1kbrq_43 > ._button_19zv0_1', {timeout: 15000}).click();
    


    // cy.get(':nth-child(1) > [style="padding: 8px 12px 4px; vertical-align: middle;"] > .flex > :nth-child(2) > .RectangleIconButton', {timeout: 15000}).click()
    // cy.contains('Yes', {timeout: 15000}).click()
    // cy.get(':nth-child(1) > [style="padding: 8px 12px 4px; vertical-align: middle;"] > .flex > :nth-child(2) > .RectangleIconButton', {timeout: 15000}).click()
    // cy.contains('Yes', {timeout: 15000}).click()

    // cy.get('._primary_19zv0_20', {timeout: 15000}).click()

    // cy.contains(sec_folder, {timeout: 15000}).click()
    // cy.get('.dots > [stroke="currentColor"]', {timeout: 15000}).click();
    // cy.get('.MuiButtonBase-root').contains('Delete', {timeout: 15000}).click(); 
     
    // cy.contains(folderName, {timeout: 15000}).click()
    // cy.get('.dots > [stroke="currentColor"]', {timeout: 15000}).click();
    // cy.get('.MuiButtonBase-root').contains('Delete', {timeout: 15000}).click(); 
     
  })})

  //[style="border-bottom: 1px solid rgb(238, 238, 238); display: flex; background-color: rgb(255, 255, 255);"] > [style="flex: 1 1 0%; align-items: center; padding: 8px 0px; margin: -1px -1px 0px 0px; width: 70px; border: 0px; display: flex; justify-content: flex-end;"]
