export const LOAD_INSIGHTS = '[insights] load';
export const LOAD_INSIGHTS_SUCCESS = '[insights] success';
export const LOAD_INSIGHTS_FAILURE = '[insights] failure';
export const SET_INSIGHT = '[insights] set';
export const SET_WEEKLY_INSIGHTS = '[weekly insights] set';

export const loadInsights = {
    type:LOAD_INSIGHTS,
}

export const loadInsightsSuccess = insights => ({
    type:LOAD_INSIGHTS_SUCCESS,
    payload:insights
});

export const loadInsightsFailure = error => ({
    type:LOAD_INSIGHTS_FAILURE,
    payload:error,
});

export const setInsights = insights => ({
    type:SET_INSIGHT,
    payload:insights
});

export const setWeeklyInsights = insights => ({
    type:SET_WEEKLY_INSIGHTS,
    payload:insights
});





