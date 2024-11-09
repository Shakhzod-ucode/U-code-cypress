//import 'cypress-file-upload'
//import './login.cy' 
import FolderPage from './folder_create.cy';
import ItemAdd from './itemAdd';
//import FieldsPage from './update_item';
let folderName;
//let tableName;
//let keyName;
function generateUniqueLabel(prefix = 'Label') {
  const randomString = Math.random().toString(36).substring(2, 8); // Generates a 6-character random string
  return `${prefix}_${randomString}`;
}

 describe('Testing table to u-code', () => {

    let credentials;
    const unique_id = Date.now() 
    folderName = 'main_fold' + unique_id

    


    //tableName = 'table' + unique_id
    //keyName = 'table' + unique_id
    const itemAddPage =  new ItemAdd()
    const folderPage = new FolderPage();
    const uniqueLabel = generateUniqueLabel();

    //const fieldsPage = new FieldsPage();

    //const folderName = 'main_fold1712037566376'
    //const tableName = 'table'

before(() => {
  cy.login('/')
  cy.wait(5000)
  cy.viewport(1920, 1080)
  cy.writeFile('cypress/fixtures/folderData.json', { folderName });
  cy.writeFile('cypress/fixtures/uniqueLabel.json', { uniqueLabel }); 
})

after(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
})



it('Create folder and get into folder',  () => {
  cy.visit('https://app.ucode.run')
  cy.viewport(1920, 1080)

  cy.get('.MuiButton-root').contains('Create', {timeout: 14000}).click(); // Click button with text "Create"
  cy.get('.MuiButtonBase-root').contains('Add folder', {timeout: 14000}).click(); // Select "Folder" option
  cy.get('#folder_create', {timeout: 14000}).type(folderName).should('have.value', folderName); // Enter folder name
  cy.get('.MuiButtonBase-root').contains('Save').click(); // Save folder
// // //       // **Create table:**

// // // //       // create sub folder

  cy.contains(folderName, {timeout: 14000}).click();
  cy.get('#add_icon', {timeout: 14000}).click()
  cy.get('.menu > :nth-child(5)', {timeout: 14000}).click()
  cy.get('#folder_create', {timeout: 14000}).type('sub_fold').should('have.value', 'sub_fold')
  cy.get('.btns-row > .MuiButtonBase-root', {timeout: 14000}).click()
 

//   // create table 
  cy.get('#create_btn', {timeout: 14000}).click();
  cy.contains('Create table', {timeout: 14000}).click();
  cy.get('#create_table_name').type(uniqueLabel);
  cy.get('#create_table_key').type(uniqueLabel);
  cy.get('._primary_19zv0_20', {timeout: 14000}).click();
  cy.get('.MuiButtonBase-root').contains(folderName, {timeout: 14000}).click()
  cy.get('.header > .MuiButtonBase-root', {timeout: 14000}).click()

  //       delete table
// cy.wait(2000)
// cy.contains(uniqueLabel).should('exist'), {timeout: 14000};
// cy.contains(uniqueLabel).parent().click();
// // // // Затем кликнем на второй элемент <path>
// cy.get('[data-cy="back-button"]').closest('button').click(); 
// cy.wait(3000)
// cy.contains(folderName, { timeout: 14000 }).should('exist');
// cy.wait(2000)
//     // Click on the folder name to open it
// cy.contains(folderName).click();
// cy.wait(2000); // Adjust as needed

//   // add table 
//   // cy.get('.extra_icon.MuiBox-root').invoke('show');
//   // cy.get('.extra_icon > [data-testid="AddIcon"]').click();
//   // cy.get('.menu > :nth-child(2)', {timeout: 5000}).click();
//   // //cy.get('#attributes\\.label_en').type(tableName).should('have.value', tableName)
//   // cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root', {timeout: 5000}).click();
//   // cy.contains(tableName, {timeout: 8000}).click();
//   // cy.get('.btns-row > .MuiButtonBase-root', {timeout: 5000}).click()

//   cy.contains(folderName, { timeout: 14000 }).should('exist');
//   cy.wait(2000)
//       // Click on the folder name to open it
//   cy.contains(folderName).click();
//   // get table 
//   cy.wait(2000); 
//   //cy.contains('sub_fold', {timeout: 14000}).click();
//   cy.contains(uniqueLabel, {timeout: 10000}).should('exist');
//   cy.contains(uniqueLabel, {timeout: 5000}).click()

  // itemAddPage.clickAddButton()
  // itemAddPage.clickButtonByText('Text', {timeout: 15000})
  // itemAddPage.typeLabel('single')
  // itemAddPage.clickPrimaryButton()
  // cy.contains('single', { timeout: 19000 }).should('exist')

    // itemAddPage.clickAddButton()
    // itemAddPage.clickButtonByText('Text', {timeout: 15000})
    // itemAddPage.selectType('Text Area')
    // itemAddPage.typeLabel('multi')
    // itemAddPage.clickPrimaryButton()
    // cy.contains('multi', { timeout: 19000 }).should('exist')
}) 
       

// it('Create folder, Add Subfolder, create table, delete table', () => {
//   folderPage.createFolder();
//   folderPage.addSubfolder();
//   folderPage.createSubFolder('sub_fold')
//   folderPage.createTable(uniqueLabel);
//   folderPage.deleteTable(uniqueLabel);
// });

// after(() => {
//   cy.contains(folderName, {timeout: 15000}).click();
//   cy.contains('sub_fold', {timeout: 14000}).click();
//   cy.contains(uniqueLabel).should('exist');
//   cy.contains(uniqueLabel, {timeout: 5000}).click()
// })


// it('Single', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Text', {timeout: 15000})
//       itemAddPage.typeLabel('single')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('single', { timeout: 19000 }).should('exist')  
//       })
//   it('Multi', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Text', {timeout: 15000})
//       itemAddPage.selectType('Text Area')
//       itemAddPage.typeLabel('multi')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('multi', { timeout: 19000 }).should('exist')
//   })
  
//   it('Number', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Number', {timeout: 15000})
//       itemAddPage.typeLabel('number')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('number', { timeout: 19000 }).should('exist')
//   })
  
//   it('Float', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Number', {timeout: 15000})
//       itemAddPage.selectType('Float')
//       itemAddPage.typeLabel('float')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('float', { timeout: 19000 }).should('exist')
//   })
  
//   it('Date', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Date', {timeout: 15000})
//       itemAddPage.typeLabel('date')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('date', { timeout: 19000 }).should('exist')
//   })
  
//   it('Date Time Without Time Zone', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Date', {timeout: 15000})
//       itemAddPage.selectType('Date time (without timezone)')
//       itemAddPage.typeLabel('date_time_without')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('date_time_without', { timeout: 19000 }).should('exist')
//   })
  
//   it('Time', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Date', {timeout: 15000})
//       itemAddPage.selectType('Time')
//       itemAddPage.typeLabel('time')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('time', { timeout: 19000 }).should('exist')
//   })
  
//   it('Date Time', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Date', {timeout: 15000})
//       itemAddPage.selectType('Date time')
//       itemAddPage.typeLabel('date_time')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('date_time', { timeout: 19000 }).should('exist')
//   })
  
//   it('Dropdown', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Dropdown', {timeout: 15000})
//       itemAddPage.typeLabel('dropdown')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('dropdown', { timeout: 19000 }).should('exist')
//   })
  
//   it('Checkbox', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Checkbox', {timeout: 15000})
//       itemAddPage.typeLabel('checkbox')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('checkbox', { timeout: 19000 }).should('exist')
//   })
  
//   it('Switch', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Switch', {timeout: 15000})
//       itemAddPage.typeLabel('switch')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('switch', { timeout: 19000 }).should('exist')
//   })
  
//   it('File', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('File', {timeout: 15000})
//       itemAddPage.typeLabel('file')
//       cy.get('#select_type').click()
//       cy.get('[data-value="FILE"]', {timeout: 10000}).click()
//       itemAddPage.clickPrimaryButton()
//       cy.contains('file', { timeout: 19000 }).should('exist')
//   })
  
//   it('Photo', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('File', {timeout: 15000})
//       itemAddPage.selectType('Photo')
//       itemAddPage.typeLabel('photo')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('photo', { timeout: 20000 }).should('exist')
//   })
  
//   it('Video', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('File', {timeout: 15000})
//       itemAddPage.selectType('Video')
//       itemAddPage.typeLabel('video')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('video', { timeout: 19000 }).should('exist')
//   })
  
//   it('Map', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Map', {timeout: 15000})
//       itemAddPage.typeLabel('map')
//       cy.get('#select_type').click()
//       cy.get('[data-value="MAP"]', {timeout: 7000}).click()
//       itemAddPage.clickPrimaryButton()
//       cy.contains('map', { timeout: 19000 }).should('exist')
//   })
  
//   it('Polygon', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Map', {timeout: 15000})
//       itemAddPage.selectType('Polygon')
//       itemAddPage.typeLabel('map')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('map', { timeout: 19000 }).should('exist')
//   })
  
//   it('Phone', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Phone', {timeout: 15000})
//       itemAddPage.typeLabel('phone')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('phone', { timeout: 19000 }).should('exist')
//   })


//   it('Update phone to internation phone number', () => {
//     cy.get('.FiltersBlock > :nth-child(2) > :nth-child(2)', {timeout: 20000}).click()
//     cy.contains('Fields', {timeout: 15000}).click()
  
  
//     cy.wait(5000)
//       cy.get(':nth-child(1) > [style="padding: 8px 12px 4px; vertical-align: middle;"] > .flex > .success', {timeout: 20000}).click()
//       cy.get('#field_label').clear()
//       cy.get('#field_label').type('phone')
//       cy.get('#field_key').clear()
//       cy.get('#field_key').type('phone').should('have.value', 'phone')
//       cy.get('#select_type').click()
//       cy.get('[data-value="INTERNATION_PHONE"]', {timeout: 15000}).click()
//       cy.get('._settingsFooter_laow2_94 > ._button_19zv0_1', {timeout: 15000}).click()
//       cy.wait(5000)
//       cy.get('._primary_19zv0_20', {timeout: 15000}).click()
//       cy.wait(5000)
//   })
 
//   it('Email', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Email', {timeout: 15000})
//       itemAddPage.typeLabel('email')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('email', { timeout: 19000 }).should('exist')
//   })
  
//   it('Password', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Password', {timeout: 15000})
//       itemAddPage.typeLabel('password')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('password', { timeout: 19000 }).should('exist')
//   })
  
//   it('Color', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Color', {timeout: 15000})
//       itemAddPage.typeLabel('colo')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('colo', { timeout: 19000 }).should('exist')
//   })
  
//   it('Increment ID', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Increment', {timeout: 15000})
//       itemAddPage.typeLabel('increment_id')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('increment_id', { timeout: 19000 }).should('exist')
//   })
  
//   it('Barcode', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Barcode', {timeout: 15000})
//       cy.get('#select_type').click()
//       cy.get('.Mui-selected', {timeout: 10000}).click()
//       itemAddPage.typeLabel('barcode')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('barcode', { timeout: 19000 }).should('exist')
//   })
  
//   it('QR Code', () => {
//       itemAddPage.clickAddButton()
//       itemAddPage.clickButtonByText('Barcode', {timeout: 15000})
//       cy.get('#select_type', { timeout:4000}).click()
//       cy.contains('QR', { timeout: 19000 }).click()
//       itemAddPage.typeLabel('qr_code')
//       itemAddPage.clickPrimaryButton()
//       cy.contains('qr_code', { timeout: 19000 }).should('exist')
//   })

//   it('Primary Key - Random Text', () => {
//     itemAddPage.clickAddButton()
//     itemAddPage.clickButtonByText('Primary key',{timeout: 15000})
//     itemAddPage.typeLabel('random_string')
//     itemAddPage.clickPrimaryButton()
//     cy.contains('random_string', { timeout: 19000 }).should('exist')
// })

// it('Primary Key - Random UUID', () => {
//     itemAddPage.clickAddButton()
//     itemAddPage.clickButtonByText('Primary key',{timeout: 15000})
//     itemAddPage.selectType('UUID')
//     itemAddPage.typeLabel('random_uuid')
//     itemAddPage.clickPrimaryButton()
//     cy.contains('random_uuid', { timeout: 19000 }).should('exist')
// })

// it('Primary Key - Manual String', () => {
//     itemAddPage.clickAddButton()
//     itemAddPage.clickButtonByText('Primary key',{timeout: 15000})
//     itemAddPage.selectType('Manual string')
//     itemAddPage.typeLabel('manual_string')
//     itemAddPage.clickPrimaryButton()
//     cy.contains('manual_string', { timeout: 19000 }).should('exist')
// })

// it('Primary Key - Increment Number', () => {
//     itemAddPage.clickAddButton()
//     itemAddPage.clickButtonByText('Primary key',{timeout: 15000})
//     itemAddPage.selectType('Increment number')
//     itemAddPage.typeLabel('increment_number')
//     itemAddPage.clickPrimaryButton()
//     cy.contains('increment_number', { timeout: 19000 }).should('exist')
// })

// it('Code - JSON', () => {
//     itemAddPage.clickAddButton()
//     itemAddPage.clickButtonByText('Code', {timeout: 15000})
//     itemAddPage.typeLabel('json_code')
//     itemAddPage.clickPrimaryButton()
//     cy.contains('json_code', { timeout: 19000 }).should('exist')
// })

// it('Code - Programming Language', () => {
//     itemAddPage.clickAddButton()
//     itemAddPage.clickButtonByText('Code', {timeout: 15000})
//     itemAddPage.selectType('Programming Language')
//     itemAddPage.typeLabel('programming_language')
//     itemAddPage.clickPrimaryButton()
//     cy.contains('programming_language', { timeout: 19000 }).should('exist')
// })


  


// it('add object by plus butto', () => {
//   cy.viewport(1920, 1080)



//       cy.get('._rightExtra_146br_337 > :nth-child(5) > .MuiButtonBase-root').click()
//       cy.get(':nth-child(1) > [style="flex: 1 1 0%; align-items: center; padding: 8px 0px; margin: -1px -1px 0px 0px; width: 70px; border: 0px; display: flex; justify-content: flex-end;"] > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input', {timeout: 3000}).eq(0).click()
//       cy.get('body').click()
//             cy.get('.CTableCell > .MuiButtonBase-root', {timeout: 50000}).click()
//             cy.get('#single_single', {timeout: 15000}).type('text').should('have.value', 'text')
//             cy.get('#number').clear().type(3).should('have.value', 3)
            
//             cy.get('.MuiButton-root > [data-testid="UploadFileIcon"]', {timeout: 15000}).eq(0).scrollIntoView().eq(0).click() // Нажимаем на кнопку, чтобы открыть диалог выбора файла
            
//             cy.get('input[type="file"]').attachFile({
//               filePath: 'upload_file.txt', // Замените на путь к вашему файлу
//               mimeType: 'text/plain' // MIME-тип вашего файла
//             })
//             cy.wait(5000)
            
//             cy.get('.MuiButton-root > [data-testid="UploadFileIcon"]', {timeout: 15000}).eq(0).scrollIntoView().click() // Нажимаем на кнопку, чтобы открыть диалог выбора файла
//             // После того, как диалог открыт, выбираем файл, используя метод attachFile на соответствующем элементе input
//             cy.get('input[type="file"]').attachFile({
//               filePath: 'image.png', // Замените на путь к вашему файлу
//               mimeType: 'image/jpeg' // MIME-тип вашего файла
//             })

//             cy.get('.add-block').scrollIntoView().click() 
//             cy.get('input[type="file"]').attachFile({
//                 filePath: 'image.png',
//                 mimeType: 'image/png' 
//             }, {timeout: 10000}).then(input => {
//                 const changeEvent = new Event('change', { bubbles: true })
//                 input[0].dispatchEvent(changeEvent)
//             })
//             cy.get(':nth-child(3) > [style="position: relative; min-width: 150px;"] > .MuiBox-root > p', {timeout: 15000}).click()
//             cy.get('.ql-editor', {timeout: 10000}).type('text')
//             cy.get('body').click()
//             cy.get(':nth-child(5) > .MuiBox-root > .custom_textfield', {timeout: 15000}).then($input => {
//               // Set the value of the input field directly using JavaScript
//               $input[0].value = 0.9
//               // Trigger the 'input' event to simulate user input
//               $input[0].dispatchEvent(new Event('input', { bubbles: true }))
//             }).should('have.value', '0.9')
//             cy.get(':nth-child(7) > .css-0 > .main_wrapper', {timeout: 15000}).click({offsetX: -20})
//             cy.get(':nth-child(1) > .rmdp-down', {timeout: 15000}).click()
//             cy.get('body').click()            
//             cy.get('#date_date').scrollIntoView()
//             cy.get('#date_date').click()
//             cy.get('.rmdp-today > .sd').click()
            
//             cy.get('.CTableBody > :nth-child(1) > :nth-child(21)').scrollIntoView()
//             cy.get('.MuiSwitch-root').click()
            
//             cy.get('#phone_phone', {timeout: 15000}).scrollIntoView()
//             cy.get('#phone_phone').type('935084877').should('have.value', '+93 50 848 77')
//             cy.get('[id*=checkbox_checkbox]').click()
            
//             cy.get('#email').scrollIntoView()
//             cy.get('#email').type('paesyrk@gmail.com').should('have.value', 'paesyrk@gmail.com')
//             cy.get('#password_password').type('pass')
//             cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
//             cy.get('#password_password').should('have.value', 'pass')
//             cy.get('.round').click()
//             cy.get('[style="background-color: rgb(39, 174, 96);"]').click()
//             cy.viewport(1000, 600)
//             cy.get(':nth-child(30) > [style="position: relative; min-width: 150px;"] > .MuiBox-root > p').scrollIntoView().then(() => {
//                   cy.get(':nth-child(30) > [style="position: relative; min-width: 150px;"] > .MuiBox-root > p').click()
//                   cy.get('.MuiButton-contained').click()
//                   cy.contains('Golang').click()
//                   cy.get('.ace_content').type('golang func')
//                   cy.get('body').click()
//               })
//               cy.get(':nth-child(30) > [style="position: relative; min-width: 150px;"] > .MuiBox-root > p').scrollIntoView().then(() => {
//                 cy.get(':nth-child(30) > [style="position: relative; min-width: 150px;"] > .MuiBox-root > p').should('contain', 'golang')
                
//                 cy.viewport(1980, 1200)
            
//               cy.get('.CTableBody > :nth-child(1) > :nth-child(23)').scrollIntoView().then(() => {
//                 cy.get('#qr_code_qr_code').should('be.visible').type(423423).should('have.value', '423423')
//             })
//             cy.get('.MuiButton-root').should('not.contain', '[data-testid="UploadFileIcon"]');

//             cy.get(':nth-child(8) > .css-0 > :nth-child(1) > .rmdp-container > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root').scrollIntoView().click()
//             cy.get(':nth-child(9) > .css-0 > .main_wrapper').scrollIntoView().click()
            
//             cy.get(':nth-child(3) > .rmdp-down').click()
//             cy.get('.success').click()
//               })          
// });


// it('update object and delete ', () => {
//   cy.viewport(1920, 1080)

//               cy.get('#single_multi\\.0\\.single', {timeout: 15000}).clear()
//               cy.get('#single_multi\\.0\\.single', {timeout: 15000}).type('some_type')
              
              
//               cy.get(':nth-child(3) > [style="position: relative; min-width: 150px; box-sizing: border-box;"] > .MuiBox-root > p').click()
//               cy.get('.ql-editor > p', {timeout:5000}).clear()
//               cy.get('.ql-editor > p', {timeout:5000}).type('some_multi')
//               cy.get('body').click()
              
//               cy.get('#multi\\.0\\.number').clear()
//               cy.get('#multi\\.0\\.number').clear().type(4).should('have.value', 4)
              
              
              
//               cy.get(':nth-child(5) > .MuiBox-root > .custom_textfield').clear()
//               cy.get(':nth-child(5) > .MuiBox-root > .custom_textfield').type(0.8).should('have.value', 0.8)
              
//               cy.get('.css-0 > .rmdp-container > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root').click()
//               cy.get(':nth-child(4) > :nth-child(1) > .sd').click()
              
              
//               cy.get(':nth-child(7) > .css-0 > .main_wrapper').click()
              
//               cy.get(':nth-child(3) > .rmdp-down').click()
//               cy.get('body').click()
              
              
//               cy.get('#phone_multi\\.0\\.phone').scrollIntoView()
//               cy.get('#phone_multi\\.0\\.phone').clear()
//               cy.get('#phone_multi\\.0\\.phone').type(935084877).should('have.value', '+93 50 848 77')
//               cy.get('#multi\\.0\\.email').clear()
//               cy.get('#multi\\.0\\.email').type('paesyrk@gmail.com').should('have.value', 'paesyrk@gmail.com')
              
//               cy.get('#password_multi\\.0\\.password').clear()
//               cy.get('#password_multi\\.0\\.password').type('password')
//               cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
//               cy.get('#password_multi\\.0\\.password').should('have.value', 'password')
              
              
//               cy.get('.round').scrollIntoView()
//               cy.get('.round').click()
//               cy.get('[style="background-color: rgb(9, 24, 236);"]').click()

//               cy.get('input[type="file"]').attachFile({
//                 filePath: 'upload_file.txt', // Замените на путь к вашему файлу
//                 mimeType: 'text/plain' // MIME-тип вашего файла
//               })
//               cy.get('body').click()
              
              
//               cy.wait(14000)
//               cy.get('body').click()
//               cy.wait(5000)              
              
              
              
//               cy.get('body').click()
              
//               cy.get(':nth-child(30) > [style="position: relative; min-width: 150px; box-sizing: border-box;"] > .MuiBox-root > p').click()
//               cy.get('.ace_content').then($element => {
//                   const textLength = $element.text().length
//                   cy.get('.ace_content').eq(1).type('{selectall}')
//                   for (let i = 0; i < textLength; i++) {
//                       cy.get('.ace_content').eq(1).type('{backspace}')
//                   }
//               })
//               cy.get('.ace_content').eq(1).type('golang')
//               cy.get('body').click()
//               cy.get('[id*=checkbox_multi]').scrollIntoView().then($checkbox => {
//                 $checkbox.click()
              
//               })
              
              
//               cy.get('[id*=switch_multi]').scrollIntoView().then($checkbox => {
//                 $checkbox.click()
//               })

//               cy.get(':nth-child(9) > .css-0 > .main_wrapper').scrollIntoView().click()
//               cy.get(':nth-child(3) > .rmdp-down').click()

//               cy.get(':nth-child(8) > .css-0 > :nth-child(1) > .rmdp-container > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root').click()
//               cy.get(':nth-child(2) > :nth-child(29)').scrollIntoView().click()
//               cy.get('.CTableCell > :nth-child(1) > .RectangleIconButton').click()
//               cy.contains('Yes').click()
              
//               cy.wait(7000)
              

// })


// it('Add object by add object Button', () => {
//   cy.viewport(1920, 1020)

//                 cy.get('[style="display: flex; align-items: center; gap: 10px; margin-left: 10px;"] > .MuiButton-root', {timeout: 50000}).click()
//                 cy.wait(5000)
//               cy.get('#single', {timeout: 15000}).type('text').should('have.value', 'text')
//               cy.get('#number_number', {timeout: 15000}).clear().type(32).should('have.value', 32)
//               cy.get('.ql-editor > p', {timeout:14000}).type(343043234)
//               cy.get('.component > ._numberField_14vhg_91').type(0.9).should('have.value', 0.9)


//               cy.get('.MuiButton-root > [data-testid="UploadFileIcon"]').eq(0).scrollIntoView().eq(0).click() // Нажимаем на кнопку, чтобы открыть диалог выбора файла

//               // После того, как диалог открыт, выбираем файл, используя метод attachFile на соответствующем элементе input
//               cy.get('input[type="file"]').attachFile({
//                 filePath: 'upload_file.txt', // Замените на путь к вашему файлу
//                 mimeType: 'text/plain' // MIME-тип вашего файла
//               })
//               cy.wait(14000)


//               cy.viewport(1920, 1200)

//               cy.get('.MuiButton-root > [data-testid="UploadFileIcon"]').eq(0).scrollIntoView().click() // Нажимаем на кнопку, чтобы открыть диалог выбора файла
//               // После того, как диалог открыт, выбираем файл, используя метод attachFile на соответствующем элементе input
//               cy.get('input[type="file"]').attachFile({
//                 filePath: 'im.png', // Замените на путь к вашему файлу
//                 mimeType: 'im/jpeg' // MIME-тип вашего файла
//               })
//               cy.wait(14000)
//               cy.get('.MuiButton-root > [data-testid="UploadFileIcon"]').should('not.exist')


//               cy.get('body').click()
//               cy.get('.add-block').scrollIntoView().click() // Нажимаем на кнопку, чтобы открыть диалог выбора файла
//               // После того, к диалог открыт, выбираем файл видео, используя метод attachFile на соответствующем элементе input
//               cy.get('input[type="file"]').attachFile({
//                 filePath: 'im.png', // Замените на путь к вашему видеофайлу
//                 mimeType: 'im/jpeg' // MIME-тип вашего видеофайла
//               })

//               cy.wait(14000)

//               cy.get('.add-block').should('not.exist')





//               const date = '12.12.2023'
//               cy.get('#date_date').click().type(date, {delay:500 }).should('have.value', date, {timeout: 14000})



//               const date_time_without = '12:22'
//               cy.get(':nth-child(3) > .FRow > .component > .main_wrapper').type(date_time_without, { delay: 1000 })





//               cy.get(':nth-child(1) > .FRow > .component > :nth-child(1) > .rmdp-container > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root').click()
//               cy.get('body').click()



//               cy.get('#email').scrollIntoView()
//               cy.get('#email').type('paesyrk@gmail.com').should('have.value', 'paesyrk@gmail.com')

//               cy.get('#password').type('paesyrk@gmail.com').should('have.value', 'paesyrk@gmail.com')
//               cy.get('#phone_phone').type(935084988).should('have.value', '+998 93 508 49 88')


//               cy.get('._barcode_layer_1l76f_45').scrollIntoView().type(23423423)
              
//               cy.get('[id*=checkbox_checkbox]').scrollIntoView()
//               cy.get('[id*=checkbox_checkbox]').click()
//               cy.get('[id*=switch_switch]').scrollIntoView()
//               cy.get('[id*=switch_switch]').click()

//               cy.get('#programming_language').type('prog_language').should('have.value', 'prog_language')
//               cy.get('#json_code').type('json_code').should('have.value', 'json_code')
//               cy.get('#submit', {timeout:5000}).click()

// })



// it('Update objecct when', () => {
//     cy.viewport(1920, 1080)
     
//               cy.get('.uploadedImage', {timeout: 40000}).scrollIntoView().click()
//               cy.get('.MuiPaper-root > .MuiBox-root > :nth-child(2)').click()
//               cy.get('input[type="file"]').attachFile({
//                 filePath: 'im.png', // Замените на путь к вашему видеофайлу
//                 mimeType: 'image/jpeg' // MIME-тип вашего видеофайла
//               })
//               cy.get('body').click()


//               cy.wait(14000)

//               cy.get('.block').scrollIntoView().trigger('mouseover')
//               cy.get('[data-testid="CancelIcon"]').click()
//               cy.wait(5000)
//               cy.get('.add-block').scrollIntoView().click()
//               cy.get('input[type="file"]').attachFile({
//                   filePath: 'im.png', // Замените на путь к вашему видеофайлу
//                   mimeType: 'im/jpeg' // MIME-тип вашего видеофайла
//                 })


//               cy.get('body').click()

//               cy.get('#single_multi\\.0\\.single').clear()
//               cy.get('#single_multi\\.0\\.single').type('some_type').should('have.value', 'some_type')


//               cy.get(':nth-child(3) > [style="position: relative; min-width: 150px; box-sizing: border-box;"] > .MuiBox-root > p').click()
//               cy.get('.ql-editor > p').clear()
//               cy.get('.ql-editor > p').type('some_multi')
//               cy.get('body').click()

//               cy.get('#multi\\.0\\.number').clear().type(4).should('have.value', 40)


//               cy.get(':nth-child(5) > .MuiBox-root > .custom_textfield').clear()
//               cy.get(':nth-child(5) > .MuiBox-root > .custom_textfield').type(0.8).should('have.value', 0.8)

//               cy.get('.css-0 > .rmdp-container > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root').click()
//               cy.get(':nth-child(4) > :nth-child(1) > .sd').click()


//               cy.get(':nth-child(7) > .css-0 > .main_wrapper').click()
//               cy.get(':nth-child(3) > .rmdp-down').click()

//               cy.get('#date_multi\\.0\\.date').click()
//               cy.get(':nth-child(4) > :nth-child(2) > .sd').click()

//               cy.get('#phone_multi\\.0\\.phone').scrollIntoView()
//               cy.get('#phone_multi\\.0\\.phone').clear()
//               cy.get('#phone_multi\\.0\\.phone').type(935084877).should('have.value', '+93 50 848 77')
//               cy.get('#multi\\.0\\.email').clear()
//               cy.get('#multi\\.0\\.email').type('paesyrk@gmail.com').should('have.value', 'paesyrk@gmail.com')

//               cy.get('#password_multi\\.0\\.password').clear()
//               cy.get('#password_multi\\.0\\.password').type('password')


//               cy.get('.round').scrollIntoView()
//               cy.get('.round').click()
//               cy.get('[style="background-color: rgb(52, 152, 219);"]').click()

//               cy.get('body').click()
//               cy.get(':nth-child(30) > [style="position: relative; min-width: 150px; box-sizing: border-box;"] > .MuiBox-root > p').scrollIntoView().then(() => {
//                     cy.get(':nth-child(30) > [style="position: relative; min-width: 150px; box-sizing: border-box;"] > .MuiBox-root > p').click()
//                     cy.get('.MuiButton-contained').click()
//                     cy.contains('Golang').click()
//                     cy.get('.ace_content').eq(2).type('golang func')
//                           cy.get('body').click()
//                       })
//                       cy.get(':nth-child(30) > [style="position: relative; min-width: 150px; box-sizing: border-box;"] > .MuiBox-root > p').scrollIntoView().then(() => {
//                         cy.get(':nth-child(30) > [style="position: relative; min-width: 150px; box-sizing: border-box;"] > .MuiBox-root > p').should('contain', 'golang')
                        
//                                       cy.get('.MuiButton-root').should('not.contain', '[data-testid="UploadFileIcon"]');
// cy.get('.add-block').should('not.exist')

//               })
//               cy.get('.CTableCell > :nth-child(1) > .RectangleIconButton').click()
//               cy.contains('Yes').click()

// })


//   it('get settings', () => {
//     cy.get('.FiltersBlock > :nth-child(2) > :nth-child(2)', {timeout: 10000}).click()
//     cy.contains('Fields', {timeout: 30000}).click()
//   })
 
//   it('should update programming language field', () => {
//     fieldsPage.clickField(1)
//     fieldsPage.clearAndTypeFieldLabel('programming_lang_changed')
//     fieldsPage.clearAndTypeFieldKey('programming_lang_changed')
//     fieldsPage.clickSaveButton()
// })

// it('should update JSON field', () => {
//     fieldsPage.clickField(2)
//     fieldsPage.clearAndTypeFieldLabel('json_updated')
//     fieldsPage.clearAndTypeFieldKey('json_updated')
//     fieldsPage.clickSaveButton()
// })

// it('should update increment number field', () => {
//     fieldsPage.clickField(3)
//     fieldsPage.clearAndTypeFieldLabel('increment_num_changed')
//     fieldsPage.clearAndTypeFieldKey('increment_num_changed')
//     fieldsPage.clickSaveButton()
// })

// it('should update manual string field', () => {
//     fieldsPage.clickField(4)
//     fieldsPage.clearAndTypeFieldLabel('manual_string_changed')
//     fieldsPage.clearAndTypeFieldKey('manual_string_changed')
//     fieldsPage.clickSaveButton()
// })

// it('should update random UUID field', () => {
//     fieldsPage.clickField(5)
//     fieldsPage.clearAndTypeFieldLabel('random_uuid_updated')
//     fieldsPage.clearAndTypeFieldKey('random_uuid_updated')
//     fieldsPage.clickSaveButton()
// })

// it('should update random text field', () => {
//     fieldsPage.clickField(6)
//     fieldsPage.clearAndTypeFieldLabel('random_text_updated')
//     fieldsPage.clearAndTypeFieldKey('random_text_updated')
//     fieldsPage.clickSaveButton()
// })

// it('should update QR code field', () => {
//     fieldsPage.clickField(7)
//     fieldsPage.clearAndTypeFieldLabel('qr_code_updated')
//     fieldsPage.clearAndTypeFieldKey('qr_code_updated')
//     fieldsPage.clickSaveButton()
// })

// it('should update UPC barcode field', () => {
//     fieldsPage.clickField(8)
//     fieldsPage.clearAndTypeFieldLabel('up_barcode')
//     fieldsPage.clearAndTypeFieldKey('up_barcode')
//     fieldsPage.clickSaveButton()
// })

// it('should update updated increment ID field', () => {
//     fieldsPage.clickField(9)
//     fieldsPage.clearAndTypeFieldLabel('updated_incr_id')
//     fieldsPage.clearAndTypeFieldKey('updated_incr_id')
//     fieldsPage.clickSaveButton()
// })


// it('should update updated color field', () => {
//   fieldsPage.clickField(10)
//   fieldsPage.clearAndTypeFieldLabel('updated_color')
//   fieldsPage.clearAndTypeFieldKey('updated_color')
//   fieldsPage.clickSaveButton()
// })

// it('should update updated password field', () => {
//   fieldsPage.clickField(11)
//   fieldsPage.clearAndTypeFieldLabel('updated_password')
//   fieldsPage.clearAndTypeFieldKey('updated_password')
//   fieldsPage.clickSaveButton()
// })

// it('should update updated email field', () => {
//   fieldsPage.clickField(12)
//   fieldsPage.clearAndTypeFieldLabel('updated_email')
//   fieldsPage.clearAndTypeFieldKey('updated_email')
//   fieldsPage.clickSaveButton()
// })

// it('should update updated phone field', () => {
//   fieldsPage.clickField(13)
//   fieldsPage.clearAndTypeFieldLabel('updated_phone')
//   fieldsPage.clearAndTypeFieldKey('updated_phone')
//   fieldsPage.clickSaveButton()
// })

// it('should update updated polygon field', () => {
//   fieldsPage.clickField(14)
//   fieldsPage.clearAndTypeFieldLabel('updated_polygon')
//   fieldsPage.clearAndTypeFieldKey('updated_polygon')
//   fieldsPage.clickSaveButton()
// })

// it('should update updated map field', () => {
//   fieldsPage.clickField(15)
//   fieldsPage.clearAndTypeFieldLabel('updated_map')
//   fieldsPage.clearAndTypeFieldKey('updated_map')
//   fieldsPage.clickSaveButton()
// })

// it('should update updated video field', () => {
//   fieldsPage.clickField(16)
//   fieldsPage.clearAndTypeFieldLabel('updated_video')
//   fieldsPage.clearAndTypeFieldKey('updated_video')
//   fieldsPage.clickSaveButton()
// })

// it('should update updated photo field', () => {
//   fieldsPage.clickField(17)
//   fieldsPage.clearAndTypeFieldLabel('updated_photo')
//   fieldsPage.clearAndTypeFieldKey('updated_photo')
//   fieldsPage.clickSaveButton()
// })

// it('should update updated file field', () => {
//   fieldsPage.clickField(18)
//   fieldsPage.clearAndTypeFieldLabel('updated_file')
//   fieldsPage.clearAndTypeFieldKey('updated_file')
//   fieldsPage.clickSaveButton()
// })

// it('should update updated switch field', () => {
//   fieldsPage.clickField(19)
//   fieldsPage.clearAndTypeFieldLabel('updated_switch')
//   fieldsPage.clearAndTypeFieldKey('updated_switch')
//   fieldsPage.clickSaveButton()
// })

// it('should update updated checkbox field', () => {
//   fieldsPage.clickField(20)
//   fieldsPage.clearAndTypeFieldLabel('updated_checkbox')
//   fieldsPage.clearAndTypeFieldKey('updated_checkbox')
//   fieldsPage.clickSaveButton()
// })

// it('should update updated multiselect field', () => {
//   fieldsPage.clickField(21)
//   fieldsPage.clearAndTypeFieldLabel('updated_multiselect')
//   fieldsPage.clearAndTypeFieldKey('updated_multiselect')
//   fieldsPage.clickSaveButton()
// })

// it('should update updated date time field', () => {
//   fieldsPage.clickField(22)
//   fieldsPage.clearAndTypeFieldLabel('updated_date_time')
//   fieldsPage.clearAndTypeFieldKey('updated_date_time')
//   fieldsPage.clickSaveButton()
// })

// it('should update updated time field', () => {
//   fieldsPage.clickField(23)
//   fieldsPage.clearAndTypeFieldLabel('updated_time')
//   fieldsPage.clearAndTypeFieldKey('updated_time')
//   fieldsPage.clickSaveButton()
// })

// it('should update updated date time without field', () => {
//   fieldsPage.clickField(24)
//   fieldsPage.clearAndTypeFieldLabel('updated_date_time_without')
//   fieldsPage.clearAndTypeFieldKey('updated_date_time_without')
//   fieldsPage.clickSaveButton()
// })

// it('should update updated date field', () => {
//   fieldsPage.clickField(25)
//   fieldsPage.clearAndTypeFieldLabel('updated_date')
//   fieldsPage.clearAndTypeFieldKey('updated_date')
//   fieldsPage.clickSaveButton()
// })

// it('should update updated float field', () => {
//   fieldsPage.clickField(26)
//   fieldsPage.clearAndTypeFieldLabel('updated_float')
//   fieldsPage.clearAndTypeFieldKey('updated_float')
//   fieldsPage.clickSaveButton()
// })

// it('should update updated number field', () => {
//   fieldsPage.clickField(27)
//   fieldsPage.clearAndTypeFieldLabel('updated_number')
//   fieldsPage.clearAndTypeFieldKey('updated_number')
//   fieldsPage.clickSaveButton()
// })

// it('should update updated multiline field', () => {
//   fieldsPage.clickField(28)
//   fieldsPage.clearAndTypeFieldLabel('updated_multiline')
//   fieldsPage.clearAndTypeFieldKey('updated_multiline')
//   fieldsPage.clickSaveButton()
// })

// it('should update updated single line field', () => {
//   fieldsPage.clickField(29)
//   fieldsPage.clearAndTypeFieldLabel('updated_single_line')
//   fieldsPage.clearAndTypeFieldKey('updated_single_line')
//   fieldsPage.clickSaveButton()

//   cy.get('._primary_19zv0_20').eq(0).click()
// })

// it('Delete all columns and folder', () => {

    
//   // Нажать на кнопку "Fields"
//   cy.wait(10000)
//   cy.get('.FiltersBlock > :nth-child(2) > :nth-child(2)', {timeout: 50000}).click()
//   cy.contains('Fields', {timeout: 50000}).click()
//   cy.wait(10000)

//   const numberOfIterations = 30;

// for (let i = 0; i < numberOfIterations; i++) {
//     cy.get(`:nth-child(1) > [style="padding: 8px 12px 4px; vertical-align: middle;"] > .flex > :nth-child(2) > .RectangleIconButton`, { timeout: 25000 }).click();
//     cy.contains('Yes', { timeout: 10000 }).click();
//     cy.wait(5000);
// }


//   // Нажать на кнопку "Back"
//   cy.get('._primary_19zv0_20', {timeout: 15000}).click()

//   // Нажать на кнопку "Home"
//   cy.get('.brand > .MuiButtonBase-root', {timeout: 50000}).click()

//   // Удалить папку
//   cy.contains(folderName, {timeout: 15000}).click()
//   cy.get('.dots > [stroke="currentColor"]', {timeout: 15000}).click()
//   cy.get('.MuiButtonBase-root').contains('Delete', {timeout: 15000}).click() 
//   cy.contains(folderName, {timeout: 15000}).should('not.exist', {timeout: 15000})
// })
})





