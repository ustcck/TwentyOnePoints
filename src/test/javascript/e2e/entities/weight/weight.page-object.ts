import { element, by } from 'protractor';

export class WeightComponentsPage {
    createButton = element(by.css('#jh-create-entity'));
    title = element.all(by.css('jhi-weight div h2#page-heading span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class WeightUpdatePage {
    PageTitle = element(by.css('h2#jhi-weight-heading'));
    saveButton = element(by.css('#save-entity'));
    cancelButton = element(by.css('#cancel-save'));
    datetimeInput = element(by.css('input#field_datetime'));
    weigthInput = element(by.css('input#field_weigth'));
    userSelect = element(by.css('select#field_user'));

    getPageTitle() {
        return this.PageTitle.getAttribute('jhiTranslate');
    }

    setDatetimeInput(datetime) {
        this.datetimeInput.sendKeys(datetime);
    }

    getDatetimeInput() {
        return this.datetimeInput.getAttribute('value');
    }

    setWeigthInput(weigth) {
        this.weigthInput.sendKeys(weigth);
    }

    getWeigthInput() {
        return this.weigthInput.getAttribute('value');
    }

    userSelectLastOption() {
        this.userSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    userSelectOption(option) {
        this.userSelect.sendKeys(option);
    }

    getUserSelect() {
        return this.userSelect;
    }

    getUserSelectedOption() {
        return this.userSelect.element(by.css('option:checked')).getText();
    }

    save() {
        this.saveButton.click();
    }

    cancel() {
        this.cancelButton.click();
    }

    getSaveButton() {
        return this.saveButton;
    }
}
