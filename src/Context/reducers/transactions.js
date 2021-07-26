import {
	LOAD_TRANSACTIONS_SUCCESS,
	SET_TRANSACTIONS,
	SET_LAST_TRANSACTIONS,
	LOAD_TRANSACTIONS_FAILURE,
} from "../actions/transactions";

const reducer = (state, action) => {
	console.log(state, action.payload);
	switch (action.type) {
		case LOAD_TRANSACTIONS_FAILURE:
			return { error: action.payload };
		case LOAD_TRANSACTIONS_SUCCESS:
			return { allTransactions: action.payload, error: null };
		case SET_TRANSACTIONS:
			console.log(action.payload);
			return { ...state, allTransactions: action.payload, error: null };
		case SET_LAST_TRANSACTIONS:
			return { ...state, lastTransactions: action.payload, error: null };
		default:
			return state;
	}
};

export default reducer;
