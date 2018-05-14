import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IBloodPressure } from 'app/shared/model/blood-pressure.model';

@Component({
    selector: 'jhi-blood-pressure-detail',
    templateUrl: './blood-pressure-detail.component.html'
})
export class BloodPressureDetailComponent implements OnInit {
    bloodPressure: IBloodPressure;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.data.subscribe(({ bloodPressure }) => {
            this.bloodPressure = bloodPressure.body ? bloodPressure.body : bloodPressure;
        });
    }

    previousState() {
        window.history.back();
    }
}
