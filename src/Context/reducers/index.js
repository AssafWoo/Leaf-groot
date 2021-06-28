import {combineReducers}  from 'redux';
import transactions from './transactions';
import requests from './requests';
import user from './user';
import insights from './insights';

export default combineReducers({
    transactions,
    requests,
    user,
    insights
});
