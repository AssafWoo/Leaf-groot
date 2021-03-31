import React, { useContext, useEffect } from 'react';
import { Flex  } from '../Styles/styles'
import DashboardContent from '../Modules/dashboard/dashboard-content';
import Store from '../Context/global/global-context';


const Dashboard = () => {

    useEffect(() => {
        const fetchFunc = async () => {
            const res = await fetch('http://localhost:9000/emissions');         }
        fetchFunc();
    }, [])

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