import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { Preferences } from 'app/shared/model/preferences.model';
import { PreferencesService } from './preferences.service';
import { PreferencesComponent } from './preferences.component';
import { PreferencesDetailComponent } from './preferences-detail.component';
import { PreferencesUpdateComponent } from './preferences-update.component';
import { PreferencesDeletePopupComponent } from './preferences-delete-dialog.component';

@Injectable()
export class PreferencesResolve implements Resolve<any> {
    constructor(private service: PreferencesService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id);
        }
        return new Preferences();
    }
}

export const preferencesRoute: Routes = [
    {
        path: 'preferences',
        component: PreferencesComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.preferences.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'preferences/:id/view',
        component: PreferencesDetailComponent,
        resolve: {
            preferences: PreferencesResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.preferences.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'preferences/new',
        component: PreferencesUpdateComponent,
        resolve: {
            preferences: PreferencesResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.preferences.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'preferences/:id/edit',
        component: PreferencesUpdateComponent,
        resolve: {
            preferences: PreferencesResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.preferences.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const preferencesPopupRoute: Routes = [
    {
        path: 'preferences/:id/delete',
        component: PreferencesDeletePopupComponent,
        resolve: {
            preferences: PreferencesResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.preferences.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
