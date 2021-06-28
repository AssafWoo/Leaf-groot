export const LOAD_USER = '[user] load';
export const LOAD_USER_SUCCESS = '[user] success';
export const LOAD_USER_FAILURE = '[user] failure';
export const SET_USER = '[user] set';
export const PUT_USER = '[user] put';
export const LOG_OUT_USER = '[user] logout';
export const USER_LOGIN ='[user] logged in';

export const loadUser = {
    type:LOAD_USER,
}

export const loadUserSuccess = user => ({
    type:LOAD_USER_SUCCESS,
    payload:user
});

export const loadUserFailure = error => ({
    type:LOAD_USER_FAILURE,
    payload:error,
});

export const setUser = user => ({
    type:SET_USER,
    payload:user
});

export const putUser = user => ({
    type:PUT_USER,
    payload:user
});

export const logoutUser = {
    type:LOG_OUT_USER,
};

export const loginUser = token => ({
    type:USER_LOGIN,
    payload:token
});





