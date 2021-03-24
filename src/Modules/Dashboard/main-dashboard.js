import React, { useContext } from 'react';
import { Flex  } from '../../Styles/styles'
import DashboardLeftPart from './left-part/dashboard-left';
import DashboardRightPart from './right-part/dashboard-right';
import Store from '../../global-context/global-context';


const Dashboard = () => {
    const {state} = useContext(Store);
    return(
        <>
        <Flex>
            <DashboardLeftPart companyName={state.companyDetails.name} userName={state.userDetails.name} />
            <DashboardRightPart />
        </Flex>
        
        </>
    )
}

export default Dashboard;