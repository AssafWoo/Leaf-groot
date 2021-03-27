import React, { useContext } from 'react';
import { Flex  } from '../Styles/styles'
import DashboardContent from '../Modules/dashboard/dashboard-content';
import Store from '../Context/global/global-context';


const Dashboard = () => {
    const {state} = useContext(Store);
    return(
        <>
        <Flex>
            <DashboardContent companyName={state.company.name} userName={state.user.name} />
        </Flex>
        
        </>
    )
}

export default Dashboard;