import { element, by } from 'protractor';

export class PointsComponentsPage {
    createButton = element(by.css('#jh-create-entity'));
    title = element.all(by.css('jhi-points div h2#page-heading span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class PointsUpdatePage {
    PageTitle = element(by.css('h2#jhi-points-heading'));
    saveButton = element(by.css('#save-entity'));
    cancelButton = element(by.css('#cancel-save'));
    dateInput = element(by.css('input#field_date'));
    exerciseInput = element(by.css('input#field_exercise'));
    mealsInput = element(by.css('input#field_meals'));
    alcoholInput = element(by.css('input#field_alcohol'));
    notesInput = element(by.css('input#field_notes'));
    userSelect = element(by.css('select#field_user'));

    getPageTitle() {
        return this.PageTitle.getAttribute('jhiTranslate');
    }

    setDateInput(date) {
        this.dateInput.sendKeys(date);
    }

    getDateInput() {
        return this.dateInput.getAttribute('value');
    }

    setExerciseInput(exercise) {
        this.exerciseInput.sendKeys(exercise);
    }

    getExerciseInput() {
        return this.exerciseInput.getAttribute('value');
    }

    setMealsInput(meals) {
        this.mealsInput.sendKeys(meals);
    }

    getMealsInput() {
        return this.mealsInput.getAttribute('value');
    }

    setAlcoholInput(alcohol) {
        this.alcoholInput.sendKeys(alcohol);
    }

    getAlcoholInput() {
        return this.alcoholInput.getAttribute('value');
    }

    setNotesInput(notes) {
        this.notesInput.sendKeys(notes);
    }

    getNotesInput() {
        return this.notesInput.getAttribute('value');
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
