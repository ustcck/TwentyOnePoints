import { element, by } from 'protractor';

export class BloodPressureComponentsPage {
    createButton = element(by.css('#jh-create-entity'));
    title = element.all(by.css('jhi-blood-pressure div h2#page-heading span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class BloodPressureUpdatePage {
    PageTitle = element(by.css('h2#jhi-blood-pressure-heading'));
    saveButton = element(by.css('#save-entity'));
    cancelButton = element(by.css('#cancel-save'));
    datetimeInput = element(by.css('input#field_datetime'));
    systolicInput = element(by.css('input#field_systolic'));
    diastolicInput = element(by.css('input#field_diastolic'));
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

    setSystolicInput(systolic) {
        this.systolicInput.sendKeys(systolic);
    }

    getSystolicInput() {
        return this.systolicInput.getAttribute('value');
    }

    setDiastolicInput(diastolic) {
        this.diastolicInput.sendKeys(diastolic);
    }

    getDiastolicInput() {
        return this.diastolicInput.getAttribute('value');
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
