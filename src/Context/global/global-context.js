import {createContext, useReducer} from 'react';
import user from '../reducers/user';
import insights from '../reducers/insights';
import transactions from '../reducers/transactions';
import requests from '../reducers/requests';
import {userInitialState} from '../initialState/user';
import {insightsInitialState} from '../initialState/insights';
import {transactionsInitialState} from '../initialState/transactions';
import {requestsInitialState} from '../initialState/requests';

export const GlobalContext = createContext({});

export const GlobalProvider = props => {
        const [userState, userDispatch] = useReducer(user, userInitialState);
        const [insightsState, insightsDispatch] = useReducer(insights, insightsInitialState);
        const [transactionsState, transactionsDispatch] = useReducer(transactions, transactionsInitialState);
        const [requestsState, requestsDispatch] = useReducer(requests, requestsInitialState);
                
        return (
                <GlobalContext.Provider value={{
                        userState,
                        userDispatch,
                        insightsState,
                        insightsDispatch,
                        transactionsState,
                        transactionsDispatch,
                        requestsState,
                        requestsDispatch,
                        }}>
                {props.children}
                </GlobalContext.Provider>
        )
}


