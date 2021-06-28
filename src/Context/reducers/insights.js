import {LOAD_INSIGHTS_SUCCESS,SET_WEEKLY_INSIGHTS,  SET_INSIGHT, LOAD_INSIGHTS_FAILURE} from '../actions/insights';


const reducer = (state , action) => {
    switch(action.type){
        case LOAD_INSIGHTS_FAILURE:
            return {error:action.payload}
        case LOAD_INSIGHTS_SUCCESS:
            return {allInsights: action.payload, error:null}
        case SET_INSIGHT:
            return {allInsights: action.payload, error:null}
        case SET_WEEKLY_INSIGHTS:
            console.log('moasjda')
            return {...state, weeklyInsights:action.payload, error:null}
        default:
            return state;
    }
}

export default reducer;