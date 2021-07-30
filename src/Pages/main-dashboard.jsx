import React, { useContext, useEffect, useReducer } from "react";
import { Flex } from "../Styles/styles";
import DashboardContent from "../Modules/dashboard/dashboard-content";
import { GlobalContext } from "../Context/global/global-context";
import { useState } from "react";
import { setTransactions } from "../Context/actions/transactions";
import useFetch from "../Utils/useFetch";
import { setUser } from "../Context/actions/user";
import getJWT from "../Utils/useJWTDecode";
import { usePersistedReducer } from "../Utils/usePersist";
import reducer from "../Context/reducers/user";

const Dashboard = () => {
	const { userState, achievmentsState, userDispatch } =
		useContext(GlobalContext);
	const { transactionsState, transactionsDispatch } = useContext(GlobalContext);
	const [transactionsData, setTransactionsData] = useState(
		transactionsState.allTransactions
	);
	const [selected, setSelected] = useState(true);
	const [dashboardData, setDashboardData] = useState(
		achievmentsState.weeklyAchievments.co2Emissions
	);

	const transactionsResponse = useFetch(
		"http://localhost:3001/backoffice/transactions",
		"Transactions"
	);
	const { data } = transactionsResponse;
	const userInformation = getJWT(localStorage.getItem("id"));

	usePersistedReducer(useReducer(reducer, userInformation));

	useEffect(() => {
		setTransactionsData(data);
		transactionsDispatch(setTransactions(data));
		userDispatch(setUser(userInformation));
	}, [data, transactionsDispatch]);

	const handleToggleFilter = () => {
		if (selected) {
			setDashboardData(achievmentsState.weeklyAchievments.transactions);
		} else {
			setDashboardData(achievmentsState.weeklyAchievments.co2Emissions);
		}
		setSelected(!selected);
	};

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
