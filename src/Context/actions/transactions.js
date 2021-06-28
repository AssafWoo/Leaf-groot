export const LOAD_TRANSACTIONS = '[transactions] load';
export const LOAD_TRANSACTIONS_SUCCESS = '[transactions] success';
export const LOAD_TRANSACTIONS_FAILURE = '[transactions] failure';
export const SET_TRANSACTIONS = '[transactions] set';

export const loadTransactions = {
    type:LOAD_TRANSACTIONS,
}

export const loadTransactionsSuccess = transactions => ({
    type:LOAD_TRANSACTIONS_SUCCESS,
    payload:transactions
});

export const loadTransactionsFailure = error => ({
    type:LOAD_TRANSACTIONS_FAILURE,
    payload:error,
});

export const setTransactions = transactions => ({
    type:SET_TRANSACTIONS,
    payload:transactions
});


