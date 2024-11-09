const YourPage = require('./itemAdd');


describe('Add columns to the table', () => {
    let folderName;
    let uniqueLabel;

    beforeEach(() => {
        cy.login('/')
        cy.wait(5000)
        cy.viewport(1920, 1080);

        cy.readFile('cypress/fixtures/folderData.json').then((data) => {
            folderName = data.folderName; // Assign value to the declared variable
            uniqueLabel = data.uniqueLabel;
            cy.log('Retrieved folderName:', folderName);
            cy.log('Retrieved uniqueLabel:', uniqueLabel);
        });
        cy.readFile('cypress/fixtures/uniqueLabel.json').then((data) => {
            uniqueLabel = data.uniqueLabel;
            cy.log('Retrieved uniqueLabel:', uniqueLabel);
        });
    })

    const page = new YourPage();
    
    // it('should add columns to the table', () => {
    //     cy.contains(folderName).should('exist').click();
    //     cy.wrap(folderName).should('not.be.undefined'); // Check that folderName is set
    //     cy.wait(2000)
    //     cy.contains(uniqueLabel).should('exist').click();
    //     cy.wrap(uniqueLabel).should('not.be.undefined'); // Check that folderName is set
      
    //     // Text Field
    //     page.clickAddButton('');
    //     page.clickButtonByText('Text');
    //     page.typeLabel('single');
    //     page.clickPrimaryButton();
    //     cy.contains('single', { timeout: 15000 }).should('exist');

    //     // Text Area Field
    //     page.clickAddButton();
    //     page.clickButtonByText('Text');
    //     page.selectType('Text Area', { timeout: 15000 });
    //     page.typeLabel('multi');
    //     page.clickPrimaryButton();
    //     cy.contains('multi', { timeout: 15000 }).should('exist');

    //     // Number Field
    //     page.clickAddButton();
    //     page.clickButtonByText('Number');
    //     page.typeLabel('number');
    //     page.clickPrimaryButton();
    //     cy.contains('number', { timeout: 15000 }).should('exist');

    //     // Float Field
    //     page.clickAddButton();
    //     page.clickButtonByText('Number');
    //     page.selectType('Float', { timeout: 15000 });
    //     page.typeLabel('float');
    //     page.clickPrimaryButton();
    //     cy.contains('float', { timeout: 15000 }).should('exist');

    //     // Date Field
    //     page.clickAddButton();
    //     page.clickButtonByText('Date');
    //     page.typeLabel('date');
    //     page.clickPrimaryButton();
    //     cy.contains('date', { timeout: 15000 }).should('exist');

    //     // Date Time Without Time Zone Field
    //     page.clickAddButton();
    //     page.clickButtonByText('Date');
    //     page.selectType('Date time (without timezone)', { timeout: 15000 });
    //     page.typeLabel('date_time_without');
    //     page.clickPrimaryButton();
    //     cy.contains('date_time_without', { timeout: 15000 }).should('exist');

    //     // Time Field
    //     page.clickAddButton();
    //     page.clickButtonByText('Date');
    //     page.selectType('Time', { timeout: 15000 });
    //     page.typeLabel('time');
    //     page.clickPrimaryButton();
    //     cy.contains('time', { timeout: 15000 }).should('exist');

    //     // Date Time Field
    //     page.clickAddButton();
    //     page.clickButtonByText('Date');
    //     page.selectType('Date time', { timeout: 15000 });
    //     page.typeLabel('date_time');
    //     page.clickPrimaryButton();
    //     cy.contains('date_time', { timeout: 15000 }).should('exist');

    //     // Dropdown Field
    //     page.clickAddButton();
    //     page.clickButtonByText('Dropdown');
    //     page.typeLabel('dropdown');
    //     page.clickPrimaryButton();
    //     cy.contains('dropdown', { timeout: 15000 }).should('exist');

    //     // Checkbox Field
    //     page.clickAddButton();
    //     page.clickButtonByText('Checkbox');
    //     page.typeLabel('checkbox');
    //     page.clickPrimaryButton();
    //     cy.contains('checkbox', { timeout: 15000 }).should('exist');

    //     // Switch Field
    //     page.clickAddButton();
    //     page.clickButtonByText('Switch');
    //     page.typeLabel('switch');
    //     page.clickPrimaryButton();
    //     cy.contains('switch', { timeout: 15000 }).should('exist');

    //     // // Formula Field
    //     // page.clickAddButton();
    //     // page.clickButtonByText('Formula');
    //     // page.typeLabel('Formula');
    //     // page.selectFields('Date', 'Number');
    //     // page.clickPrimaryButton();
    //     // cy.contains('Formula', { timeout: 15000 }).should('exist');

    //     // //Relation Field
    //     // page.clickAddButton();
    //     // page.clickButtonByText('Relation');
    //     // page.typeLabel('Relation');
    //     // page.clickPrimaryButton();
    //     // cy.contains('Relation', { timeout: 15000 }).should('exist');

    //     // // File Field
    //     // page.clickAddButton();
    //     // page.clickButtonByText('File');
    //     // page.selectType('File', { timeout: 15000 });
    //     // page.typeLabel('file');
    //     // page.clickPrimaryButton();
    //     // cy.contains('file', { timeout: 15000 }).should('exist');

    //     // //Photo Field
    //     // page.clickAddButton();
    //     // page.clickButtonByText('File');
    //     // page.selectType('Photo', { timeout: 15000 });
    //     // page.typeLabel('photo');
    //     // page.clickPrimaryButton();
    //     // cy.contains('photo', { timeout: 15000 }).should('exist');

    //     // // Video Field
    //     // page.clickAddButton();
    //     // page.clickButtonByText('File');
    //     // page.selectType('Video', { timeout: 15000 });
    //     // page.typeLabel('video');
    //     // page.clickPrimaryButton();
    //     // cy.contains('video', { timeout: 15000 }).should('exist');

    //     // // Map Field
    //     // page.clickAddButton();
    //     // page.clickButtonByText('Map');
    //     // page.typeLabel('map');
    //     // page.selectType('Map');
    //     // page.clickPrimaryButton();
    //     // cy.contains('map', { timeout: 15000 }).should('exist');

    //     // Polygon Field
    //     page.clickAddButton();
    //     page.clickButtonByText('Map');
    //     page.typeLabel('map');
    //     page.selectType('Polygon');
    //     page.clickPrimaryButton();
    //     cy.contains('map', { timeout: 15000 }).should('exist');

    //     // Phone Field
    //     page.clickAddButton();
    //     page.clickButtonByText('Phone');
    //     page.typeLabel('phone');
    //     page.clickPrimaryButton();
    //     cy.contains('phone', { timeout: 15000 }).should('exist');

    //     // Email Field
    //     page.clickAddButton();
    //     page.clickButtonByText('Email');
    //     page.typeLabel('email');
    //     page.clickPrimaryButton();
    //     cy.contains('email', { timeout: 15000 }).should('exist');

    //     // Password Field
    //     page.clickAddButton();
    //     page.clickButtonByText('Password');
    //     page.typeLabel('password');
    //     page.clickPrimaryButton();
    //     cy.contains('password', { timeout: 15000 }).should('exist');

    //     // Color Field
    //     page.clickAddButton();
    //     page.clickButtonByText('Color');
    //     page.typeLabel('colo');
    //     page.clickPrimaryButton();
    //     cy.contains('colo', { timeout: 15000 }).should('exist');

    // //     // // Increment Field
    // //     // page.clickAddButton();
    // //     // page.clickButtonByText('Increment');
    // //     // page.typeLabel('increment_id');
    // //     // page.selectType('Increment ID');
    // //     // page.clickPrimaryButton();
    // //     // cy.contains('increment_id', { timeout: 15000 }).should('exist');

    // //     // Barcode Field
    // //     page.clickAddButton();
    // //     page.clickButtonByText('Barcode');
    // //     page.selectType('Barcode');
    // //     page.typeLabel('barcode');
    // //     page.clickPrimaryButton();
    // //     cy.contains('barcode', { timeout: 15000 }).should('exist');

    // //     // QR Code Field
    // //     page.clickAddButton();
    // //     page.clickButtonByText('Barcode');
    // //     page.selectType('QR');
    // //     page.typeLabel('qr_code');
    // //     page.clickPrimaryButton();
    // //     cy.contains('qr_code', { timeout: 15000 }).should('exist');

    // //     // Primary Key - Generated Text
    // //     page.clickAddButton();
    // //     page.clickButtonByText('Primary key');
    // //     page.selectType('Generated');
    // //     page.typeLabel('generated_string');
    // //     page.clickPrimaryButton();
    // //     cy.contains('generated_string', { timeout: 15000 }).should('exist');

    // //     // Primary Key - UUID
    // //     page.clickAddButton();
    // //     page.clickButtonByText('Primary key');
    // //     page.selectType('UUID');
    // //     page.typeLabel('uuid');
    // //     page.clickPrimaryButton();
    // //     cy.contains('uuid', { timeout: 15000 }).should('exist');

    // //     // Primary Key - Manual String
    // //     page.clickAddButton();
    // //     page.clickButtonByText('Primary key');
    // //     page.selectType('Manual');
    // //     page.typeLabel('manual_string');
    // //     page.clickPrimaryButton();
    // //     cy.contains('manual_string', { timeout: 15000 }).should('exist');

    // //     // Primary Key - Increment Number
    // //     page.clickAddButton();
    // //     page.clickButtonByText('Primary key');
    // //     page.selectType('Increment Number');
    // //     page.typeLabel('increment_number');
    // //     page.clickPrimaryButton();
    // //     cy.contains('increment_number', { timeout: 15000 }).should('exist');

    // //     // Code - JSON
    // //     page.clickAddButton();
    // //     page.clickButtonByText('Code');
    // //     page.selectType('JSON');
    // //     page.typeLabel('json_code');
    // //     page.clickPrimaryButton();
    // //     cy.contains('json_code', { timeout: 15000 }).should('exist');

    // //     // Code - Programming Language
    // //     page.clickAddButton();
    // //     page.clickButtonByText('Code');
    // //     page.selectType('Programming Language');
    // //     page.typeLabel('programming_language');
    // //     page.clickPrimaryButton();
    // //     cy.contains('programming_language', { timeout: 15000 }).should('exist');
    // });
    // Test for adding data
    it('should add data to the Text and Text Area fields', () => {

        cy.contains(folderName).should('exist').click();
        cy.wrap(folderName).should('not.be.undefined'); // Check that folderName is set
        cy.wait(2000)
        cy.contains(uniqueLabel).should('exist').click();
        cy.wait(2000)
        cy.wrap(uniqueLabel).should('not.be.undefined'); // Check that folderName is set

        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0'); // Add leading zero
        const minutes = String(now.getMinutes()).padStart(2, '0');
      
        const currentTime = `${hours}:${minutes}`;

        //     // Click on the "+" icon to add data
         cy.get('#add-row').click(); // Replace `.add-data-icon` with the correct selector for the "+" icon

            // For the "Text Field" (labeled as 'single')
        cy.get('#single_single').type('Sample single-line text'); // Adjust selector if necessary
        //cy.get('td.CTableCell.data_table__number_cell').type('Sample multi-line text'); // Adjust selector if necessary

            // For the "Number Field" (labeled as 'number')
        cy.get('#number').type('1234567890'); // Adjust selector if necessary

             // For the "Float Field" (labeled as 'float')
        cy.get('#float-field').type('1234567890'); // Adjust selector if necessary

                 // For the "Float Field" (labeled as 'float')
        cy.get('#date_date').click(); // Adjust selector if necessary
        cy.contains('.rmdp-calendar  ', '10').click(); // Replace '15' with the desired day
        cy.get('#multiselect_').click();
        cy.contains('Hello2').click(); 

        //cy.get('.CTableBody', {ensureScrollable: true}).scrollTo('left'); 
        cy.get('input[type="checkbox"]').check().should('be.checked'); // Replace with the actual checkbox selector
        //Uncheck the checkbox
        //cy.get('input[type="checkbox"]').uncheck().should('not.be.checked');

        cy.get('input[name="phone"]').type('1234567890'); // Replace '#phone-input' with the actual selector

        cy.get('#email').type('test@example.com'); // Match part of the ID if it contains dynamic characters
        cy.get('#password_password').type('mySecurePassword123'); // Enter the password
        //cy.get('#round').first().click(); // Replace with the actual class/selector of the color swatch

            // Click the tick/check icon to save the data
        cy.get('#confirm-row').click(); // Replace `.save-data-icon` with the correct selector for the tick icon

            // Verify that the data has been saved successfully
        // cy.contains('Sample single-line text', { timeout: 15000 }).should('exist');
        // cy.contains('1234567890', { timeout: 15000 }).should('exist');
        // cy.contains('1234567890', { timeout: 15000 }).should('exist');

});
});
