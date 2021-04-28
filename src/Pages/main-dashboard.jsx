import React, { useContext } from 'react';
import { Flex  } from '../Styles/styles'
import DashboardContent from '../Modules/dashboard/dashboard-content';
import Store from '../Context/global/global-context';
import { useState } from 'react';


const Dashboard = () => {
    const[selected, setSelected] = useState(true)

    const handleToggleFilter = () => {
        setSelected(!selected)
    };
    const {state} = useContext(Store);
    return(
        <Flex>
            <DashboardContent companyName={state.company.name} userName={state.user.name} selected={selected} handleToggleFilter={handleToggleFilter} />
        </Flex>
    )
}

export default Dashboard;