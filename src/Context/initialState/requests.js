import { requestsData } from "../../Mocks/requests-mock";

export const requestsInitialState = {
    allRequests: requestsData.data, // switch to empty []
    filteredRequests:[],
    error:null
};