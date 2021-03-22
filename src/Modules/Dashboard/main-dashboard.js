import React from 'react';
import { Flex  } from '../../Styles/styles'
import DashboardLeftPart from './right-part/dashboard-right';
import DashboardRightPart from './left-part/dashboard-left';


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