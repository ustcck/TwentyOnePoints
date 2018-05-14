import { element, by } from 'protractor';

export class PreferencesComponentsPage {
    createButton = element(by.css('#jh-create-entity'));
    title = element.all(by.css('jhi-preferences div h2#page-heading span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class PreferencesUpdatePage {
    PageTitle = element(by.css('h2#jhi-preferences-heading'));
    saveButton = element(by.css('#save-entity'));
    cancelButton = element(by.css('#cancel-save'));
    weekly_goalInput = element(by.css('input#field_weekly_goal'));
    weight_unitsSelect = element(by.css('select#field_weight_units'));
    userSelect = element(by.css('select#field_user'));

    getPageTitle() {
        return this.PageTitle.getAttribute('jhiTranslate');
    }

    setWeekly_goalInput(weekly_goal) {
        this.weekly_goalInput.sendKeys(weekly_goal);
    }

    getWeekly_goalInput() {
        return this.weekly_goalInput.getAttribute('value');
    }

    setWeight_unitsSelect(weight_units) {
        this.weight_unitsSelect.sendKeys(weight_units);
    }

    getWeight_unitsSelect() {
        return this.weight_unitsSelect.element(by.css('option:checked')).getText();
    }

    weight_unitsSelectLastOption() {
        this.weight_unitsSelect
            .all(by.tagName('option'))
            .last()
            .click();
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
