import {combineReducers}  from 'redux';
import transactions from './transactions';
import requests from './requests';
import user from './user';

export default combineReducers({
    transactions,
    requests,
    user
});
