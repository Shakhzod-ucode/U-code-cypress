class FieldsPage {
    getField(index) {
        return cy.get(`:nth-child(${index}) > [style="padding: 8px 12px 4px; vertical-align: middle;"] > .flex > .success`, {timeout: 50000});
    }

    getFieldLabelInput() {
        return cy.get('#field_label', {timeout: 15000});
    }

    getFieldKeyInput() {
        return cy.get('#field_key', {timeout: 15000});
    }

    getSaveButton() {
        return cy.get('._settingsFooter_laow2_94 > ._button_19zv0_1', {timeout: 15000});
    }

    clickField(index) {
        this.getField(index).click();
    }

    clearAndTypeFieldLabel(label) {
        this.getFieldLabelInput().clear().type(label).should('have.value', label);
    }

    clearAndTypeFieldKey(key) {
        this.getFieldKeyInput().clear().type(key).should('have.value', key);
    }

    clickSaveButton() {
        this.getSaveButton().click();
    }
}

module.exports = FieldsPage;
