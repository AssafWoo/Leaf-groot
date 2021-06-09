import {LOAD_REQUESTS_SUCCESS, SET_REQUEST, LOAD_REQUESTS_FAILURE} from '../actions/requests';

const initialState = {
    allRequests: [],
    error:null
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_REQUESTS_FAILURE:
            return {error:action.payload}
        case LOAD_REQUESTS_SUCCESS:
            return {allTransactions: action.payload, error:null}
        case SET_REQUEST:
            return {allTransactions: action.payload, error:null}
        default:
            return state;
    }
}

export default reducer;