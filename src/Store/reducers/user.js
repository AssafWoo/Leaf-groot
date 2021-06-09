import {LOAD_USER_SUCCESS, SET_USER, LOAD_USER_FAILURE, PUT_USER} from '../actions/user';

const initialState = {
    user: {},
    error:null
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_USER_FAILURE:
            return {error:action.payload}
        case LOAD_USER_SUCCESS:
            return {user: action.payload, error:null}
        case SET_USER:
            return {user: action.payload, error:null}
        case PUT_USER:
            return {user: action.payload, error:null}
        default:
            return state;
    }
}

export default reducer;