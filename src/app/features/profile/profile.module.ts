import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './store/profile.effects';


import { ProfileDetailComponent } from './profile-detail';
import { getProfileReducer } from './store/profile.reducers';

@NgModule({
    declarations: [
        ProfileDetailComponent
    ],
    entryComponents: [
        ProfileDetailComponent
    ],
    exports: [
        ProfileDetailComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        StoreModule.forFeature('profile', getProfileReducer),
        EffectsModule.forRoot([ProfileEffects])
    ]
})
export class ProfileModule { }
