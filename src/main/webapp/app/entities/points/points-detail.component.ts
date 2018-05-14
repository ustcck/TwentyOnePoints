import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPoints } from 'app/shared/model/points.model';

@Component({
    selector: 'jhi-points-detail',
    templateUrl: './points-detail.component.html'
})
export class PointsDetailComponent implements OnInit {
    points: IPoints;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.data.subscribe(({ points }) => {
            this.points = points.body ? points.body : points;
        });
    }

    previousState() {
        window.history.back();
    }
}
