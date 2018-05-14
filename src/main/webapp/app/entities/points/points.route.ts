import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from 'app/core';
import { Points } from 'app/shared/model/points.model';
import { PointsService } from './points.service';
import { PointsComponent } from './points.component';
import { PointsDetailComponent } from './points-detail.component';
import { PointsUpdateComponent } from './points-update.component';
import { PointsDeletePopupComponent } from './points-delete-dialog.component';

@Injectable()
export class PointsResolvePagingParams implements Resolve<any> {
    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    }
}

@Injectable()
export class PointsResolve implements Resolve<any> {
    constructor(private service: PointsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id);
        }
        return new Points();
    }
}

export const pointsRoute: Routes = [
    {
        path: 'points',
        component: PointsComponent,
        resolve: {
            pagingParams: PointsResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.points.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'points/:id/view',
        component: PointsDetailComponent,
        resolve: {
            points: PointsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.points.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'points/new',
        component: PointsUpdateComponent,
        resolve: {
            points: PointsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.points.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'points/:id/edit',
        component: PointsUpdateComponent,
        resolve: {
            points: PointsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.points.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const pointsPopupRoute: Routes = [
    {
        path: 'points/:id/delete',
        component: PointsDeletePopupComponent,
        resolve: {
            points: PointsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.points.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
