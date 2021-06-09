export const LOAD_REQUESTS = '[requests] load';
export const LOAD_REQUESTS_SUCCESS = '[requests] success';
export const LOAD_REQUESTS_FAILURE = '[requests] failure';
export const SET_REQUESTS = '[requests] set';

export const loadTransactions = {
    type:LOAD_REQUESTS,
}

export const loadRequestsSuccess = requests => ({
    type:LOAD_REQUESTS_SUCCESS,
    payload:requests
});

export const loadRequestsFailure = error => ({
    type:LOAD_REQUESTS_FAILURE,
    payload:error,
});

export const setRequests = requests => ({
    type:SET_REQUESTS,
    payload:requests
});


