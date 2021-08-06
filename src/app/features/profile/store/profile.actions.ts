import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

const initProfile = createAction('[Profile] Init Profile');
const initProfilesSuccess = createAction('[Profile] Init Profile Success', props<{user: UserProfile}>());
const initProfileError = createAction('[Profile] Init Profile Error');

export const profileActions = { initProfile, initProfilesSuccess,initProfileError};
