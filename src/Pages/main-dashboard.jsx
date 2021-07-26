import React, { useContext, useEffect } from "react";
import { Flex } from "../Styles/styles";
import DashboardContent from "../Modules/dashboard/dashboard-content";
import { GlobalContext } from "../Context/global/global-context";
import { useState } from "react";
import { getToken } from "../Utils/getToken";
import axios from "axios";
import { setTransactions } from "../Context/actions/transactions";

const Dashboard = () => {
	const { userState, achievmentsState } = useContext(GlobalContext);
	const { transactionsState, transactionsDispatch } = useContext(GlobalContext);
	const [transactionsData, setTransactionsData] = useState(
		transactionsState.allTransactions
	);
	const [selected, setSelected] = useState(true);
	const [dashboardData, setDashboardData] = useState(
		achievmentsState.weeklyAchievments.co2Emissions
	);
	const handleToggleFilter = () => {
		if (selected) {
			setDashboardData(achievmentsState.weeklyAchievments.transactions);
		} else {
			setDashboardData(achievmentsState.weeklyAchievments.co2Emissions);
		}
		setSelected(!selected);
	};

	useEffect(() => {
		(async () => {
			try {
				let validToken = getToken();
				let config = {
					headers: {
						Authorization: "Bearer " + validToken,
					},
				};
				const data = await axios.get(
					"http://localhost:3001/backoffice/transactions",
					config
				);

				// the problem is this code is running before the data was complete so we get undefined
				setTransactionsData(data.data.data);

				transactionsDispatch(setTransactions(transactionsData));
			} catch (e) {
				console.log(e);
			}
		})();
	}, []);

	return (
		<Flex>
			<DashboardContent
				user={userState}
				selected={selected}
				handleToggleFilter={handleToggleFilter}
				dashboardData={dashboardData}
				tableData={transactionsData}
			/>
		</Flex>
	);
};

export default Dashboard;
