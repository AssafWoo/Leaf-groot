import React, { useContext } from 'react';
import { Flex  } from '../Styles/styles'
import DashboardContent from '../Modules/dashboard/dashboard-content';
import { GlobalContext } from '../Context/global/global-context';
import { useState } from 'react';
import { dashboardContentCO2Data, dashboardContentOrdersData } from '../Mocks/dashboard';
import {transactionsData } from '../Mocks/transactions-mock';

const Dashboard = () => {
    const {userState} = useContext(GlobalContext);
    
    const[selected, setSelected] = useState(true)
    const[dashboardData, setDashboardData] = useState(dashboardContentCO2Data)
    const handleToggleFilter = () => {
        if(selected){
            setDashboardData(dashboardContentOrdersData)
        } else {
            setDashboardData(dashboardContentCO2Data)
        } 
        setSelected(!selected)
    };
    return(
        <Flex>
            <DashboardContent
              companyName={userState.user.company}
              userName={userState.user.name}
              selected={selected}
              handleToggleFilter={handleToggleFilter}
              dashboardData={dashboardData}
              tableData={transactionsData.data}
            />
        </Flex>
    )
}

export default Dashboard;