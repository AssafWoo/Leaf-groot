import { AchievmentType } from '../../interfaces/achievment';

export const LOAD_ACHIEVMENTS = '[achievments] load';
export const LOAD_ACHIEVMENTS_SUCCESS = '[achievments] success';
export const LOAD_ACHIEVMENTS_FAILURE = '[achievments] failure';
export const SET_ACHIEVMENT = '[achievments] set';
export const SET_WEEKLY_ACHIEVMENTS = '[weekly achievments] set';

export const loadAchievments = {
    type:LOAD_ACHIEVMENTS,
}

export const loadAchievmentsSuccess = (achievments:Array<AchievmentType>) => ({
    type:LOAD_ACHIEVMENTS_SUCCESS,
    payload:achievments
});

export const loadAchievmentsFailure = (error:any) => ({
    type:LOAD_ACHIEVMENTS_FAILURE,
    payload:error,
});

export const setAchievment = (achievment:AchievmentType) => ({
    type:SET_ACHIEVMENT,
    payload:achievment
});

export const setWeeklyAchievmentss = (achievments:Array<AchievmentType>) => ({
    type:SET_WEEKLY_ACHIEVMENTS,
    payload:achievments
});





