import React, { useContext } from 'react';
import { Flex  } from '../Styles/styles'
import DashboardContent from '../Modules/dashboard/dashboard-content';
import Store from '../Context/global/global-context';
import { useState } from 'react';
import { dashboardContentCO2Data, dashboardContentOrdersData, dashboardContentTableData } from '../Mocks/dashboard';


const Dashboard = () => {
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
    const {state} = useContext(Store);
    return(
        <Flex>
            <DashboardContent
              companyName={state.company.name}
              userName={state.user.name}
              selected={selected}
              handleToggleFilter={handleToggleFilter}
              dashboardData={dashboardData}
              tableData={dashboardContentTableData}
            />
        </Flex>
    )
}

export default Dashboard;