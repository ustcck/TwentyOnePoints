import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IWeight } from 'app/shared/model/weight.model';

@Component({
    selector: 'jhi-weight-detail',
    templateUrl: './weight-detail.component.html'
})
export class WeightDetailComponent implements OnInit {
    weight: IWeight;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.data.subscribe(({ weight }) => {
            this.weight = weight.body ? weight.body : weight;
        });
    }

    previousState() {
        window.history.back();
    }
}
