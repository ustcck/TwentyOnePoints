import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TwentyOnePointsSharedModule } from 'app/shared';
import { TwentyOnePointsAdminModule } from 'app/admin/admin.module';
import {
    BloodPressureService,
    BloodPressureComponent,
    BloodPressureDetailComponent,
    BloodPressureUpdateComponent,
    BloodPressureDeletePopupComponent,
    BloodPressureDeleteDialogComponent,
    bloodPressureRoute,
    bloodPressurePopupRoute,
    BloodPressureResolve
} from './';

const ENTITY_STATES = [...bloodPressureRoute, ...bloodPressurePopupRoute];

@NgModule({
    imports: [TwentyOnePointsSharedModule, TwentyOnePointsAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        BloodPressureComponent,
        BloodPressureDetailComponent,
        BloodPressureUpdateComponent,
        BloodPressureDeleteDialogComponent,
        BloodPressureDeletePopupComponent
    ],
    entryComponents: [
        BloodPressureComponent,
        BloodPressureUpdateComponent,
        BloodPressureDeleteDialogComponent,
        BloodPressureDeletePopupComponent
    ],
    providers: [BloodPressureService, BloodPressureResolve],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TwentyOnePointsBloodPressureModule {}
