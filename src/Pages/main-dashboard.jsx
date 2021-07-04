import React, { useContext } from 'react';
import { Flex  } from '../Styles/styles'
import DashboardContent from '../Modules/dashboard/dashboard-content';
import { GlobalContext } from '../Context/global/global-context';
import { useState } from 'react';
import {transactionsData } from '../Mocks/transactions-mock';

const Dashboard = () => {
    const {userState, achievmentsState} = useContext(GlobalContext);
    const[selected, setSelected] = useState(true)
    const[dashboardData, setDashboardData] = useState(achievmentsState.weeklyAchievments.co2Emissions)
    const handleToggleFilter = () => {
        if(selected){
            setDashboardData(achievmentsState.weeklyAchievments.transactions)
        } else {
            setDashboardData(achievmentsState.weeklyAchievments.co2Emissions) 

        } 
        setSelected(!selected)
    };
    return(
        <Flex>
            <DashboardContent
              user={userState}
              selected={selected}
              handleToggleFilter={handleToggleFilter}
              dashboardData={dashboardData}
              tableData={transactionsData.data}
            />
        </Flex>
    )
}

export default Dashboard;