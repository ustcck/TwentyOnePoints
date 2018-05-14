import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPreferences } from 'app/shared/model/preferences.model';

@Component({
    selector: 'jhi-preferences-detail',
    templateUrl: './preferences-detail.component.html'
})
export class PreferencesDetailComponent implements OnInit {
    preferences: IPreferences;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.data.subscribe(({ preferences }) => {
            this.preferences = preferences.body ? preferences.body : preferences;
        });
    }

    previousState() {
        window.history.back();
    }
}
