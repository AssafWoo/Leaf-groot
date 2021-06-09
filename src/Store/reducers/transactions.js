import {LOAD_TRANSACTIONS_SUCCESS, SET_TRANSACTIONS, LOAD_TRANSACTIONS_FAILURE} from '../actions/transactions';

const initialState = {
    allTransactions: [],
    error:null
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_TRANSACTIONS_FAILURE:
            return {error:action.payload}
        case LOAD_TRANSACTIONS_SUCCESS:
            return {allTransactions: action.payload, error:null}
        case SET_TRANSACTIONS:
            return {allTransactions: action.payload, error:null}
        default:
            return state;
    }
}

export default reducer;