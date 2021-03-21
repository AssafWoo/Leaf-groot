import React from 'react';
import { Flex  } from '../../Styles/styles'
import DashboardLeftPart from './left-part/dashboard-left';
import DashboardRightPart from './right-part/dashboard-right';


const Dashboard = () => {

    return(
        <>
        <Flex>
            <DashboardRightPart />
            <DashboardLeftPart />
        </Flex>
        
        </>
    )
}

export default Dashboard;