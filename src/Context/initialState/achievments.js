import { dashboardContentCO2Data, dashboardContentTransactionsData } from "../../Mocks/dashboard";

export const achievmentsInitialState = {
    allAchievments: [],
    weeklyAchievments:{
        co2Emissions:dashboardContentCO2Data, // switch here and below to empty [];
        transactions:dashboardContentTransactionsData
    },
    filteredAchievments:[],
    error:null
};