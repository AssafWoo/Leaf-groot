import React, { useContext } from 'react';
import { Flex  } from '../Styles/styles'
import DashboardContent from '../Modules/dashboard/dashboard-content';
import Store from '../Context/global/global-context';


const Dashboard = () => {
    // const [data, setData] = useState(null);
    // useEffect(() => {
    //     const fetchFunc = async () => {
    //         const res = await axios.get('http://localhost:8000');
    //         await setData(res.data);
    //     }
    //         fetchFunc();
    // }, [])
    // console.log(data);


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