import {LOAD_USER_SUCCESS, SET_USER,USER_LOGIN, LOAD_USER_FAILURE, PUT_USER, LOG_OUT_USER} from '../actions/user';


const reducer = (state, action) => {
    
    switch(action.type){
        case LOAD_USER_FAILURE:
            return {error:action.payload}
        case LOAD_USER_SUCCESS:
            return {user: action.payload, error:null}
        case USER_LOGIN:
            localStorage.setItem('id', action.payload)
            return {
                ...state,
                loggedIn:true,
                user:{
                    ...state.user,
                },
            }
        case SET_USER:
            return {...state, error:null, loggedIn:true}
        case PUT_USER:
            return {user: action.payload, error:null }
        case LOG_OUT_USER:
            localStorage.removeItem('id');
            return {user: {...state.user}, error:null, loggedIn:false};
        default:
            return state;
    }
}

export default reducer;