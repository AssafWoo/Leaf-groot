import React, { useContext } from 'react';
import { Flex  } from '../Styles/styles'
import DashboardLeftPart from '../Modules/dashboard/dashboard-left';
import DashboardRightPart from '../Modules/dashboard/dashboard-right';
import Store from '../Context/global/global-context';


const Dashboard = () => {
    const {state} = useContext(Store);
    return(
        <>
        <Flex>
            <DashboardLeftPart companyName={state.company.name} userName={state.user.name} />
            <DashboardRightPart />
        </Flex>
        
        </>
    )
}

export default Dashboard;