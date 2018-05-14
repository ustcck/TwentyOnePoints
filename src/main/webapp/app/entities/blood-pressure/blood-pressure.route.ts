import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { BloodPressure } from 'app/shared/model/blood-pressure.model';
import { BloodPressureService } from './blood-pressure.service';
import { BloodPressureComponent } from './blood-pressure.component';
import { BloodPressureDetailComponent } from './blood-pressure-detail.component';
import { BloodPressureUpdateComponent } from './blood-pressure-update.component';
import { BloodPressureDeletePopupComponent } from './blood-pressure-delete-dialog.component';

@Injectable()
export class BloodPressureResolve implements Resolve<any> {
    constructor(private service: BloodPressureService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id);
        }
        return new BloodPressure();
    }
}

export const bloodPressureRoute: Routes = [
    {
        path: 'blood-pressure',
        component: BloodPressureComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.bloodPressure.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'blood-pressure/:id/view',
        component: BloodPressureDetailComponent,
        resolve: {
            bloodPressure: BloodPressureResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.bloodPressure.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'blood-pressure/new',
        component: BloodPressureUpdateComponent,
        resolve: {
            bloodPressure: BloodPressureResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.bloodPressure.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'blood-pressure/:id/edit',
        component: BloodPressureUpdateComponent,
        resolve: {
            bloodPressure: BloodPressureResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.bloodPressure.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const bloodPressurePopupRoute: Routes = [
    {
        path: 'blood-pressure/:id/delete',
        component: BloodPressureDeletePopupComponent,
        resolve: {
            bloodPressure: BloodPressureResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.bloodPressure.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
