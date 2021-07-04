export const LOAD_ACHIEVMENTS = '[achievments] load';
export const LOAD_ACHIEVMENTS_SUCCESS = '[achievments] success';
export const LOAD_ACHIEVMENTS_FAILURE = '[achievments] failure';
export const SET_ACHIEVMENT = '[achievments] set';
export const SET_WEEKLY_ACHIEVMENTS = '[weekly achievments] set';

export const loadAchievments = {
    type:LOAD_ACHIEVMENTS,
}

export const loadAchievmentsSuccess = achievments => ({
    type:LOAD_ACHIEVMENTS_SUCCESS,
    payload:achievments
});

export const loadAchievmentsFailure = error => ({
    type:LOAD_ACHIEVMENTS_FAILURE,
    payload:error,
});

export const setAchievment = achievment => ({
    type:SET_ACHIEVMENT,
    payload:achievment
});

export const setWeeklyAchievmentss = achievments => ({
    type:SET_WEEKLY_ACHIEVMENTS,
    payload:achievments
});





