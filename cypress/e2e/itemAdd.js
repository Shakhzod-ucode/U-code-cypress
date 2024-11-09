class ItemAdd {
    constructor() {
        // Define your locators here
        this.addButton = '[data-cy="add_button"]';
        this.textButton = '.MuiButtonBase-root';
        this.labelField = '#text_field_label';
        this.typeSelect = '#select_type';
        this.firstOption = '#select_attributes.from_formula';
        this.secondOption = '#select_attributes.to_formula';
        this.primaryButton = '.MuiButton-containedPrimary';
    }

    clickAddButton() {
        cy.get(this.addButton, { timeout: 15000 }).click();
    }

    clickButtonByText(text) {
        cy.get(this.textButton, { timeout: 15000 }).contains(text).click();
    }

    typeLabel(text) {
        cy.get(this.labelField).type(text).should('have.value', text);
    }

    selectType(type) {
        cy.get(this.typeSelect, {timeout: 10000}).click();
        cy.contains(type, { timeout: 15000 }).click({ force: true });
    }

    selectFields(firstOption, secondOption) {
        // Select the first option from the first dropdown
        cy.get(this.firstOption, { timeout: 10000 }).click();
        cy.contains(firstOption, { timeout: 15000 }).click({ force: true });
    
        // Select the second option from the second dropdown
        cy.get(this.secondOption, { timeout: 10000 }).click();
        cy.contains(secondOption, { timeout: 15000 }).click({ force: true });
    }

    clickPrimaryButton() {
        cy.get(this.primaryButton, { timeout: 15000 }).click();
    }

}

module.exports = ItemAdd;
