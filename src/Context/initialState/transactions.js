import { transactionsData } from "../../Mocks/transactions-mock";

export const transactionsInitialState = {
    allTransactions: transactionsData.data, // switch to empty array
    lastTransactions:[],
    filteredTransactions:[],
    error:null
};
