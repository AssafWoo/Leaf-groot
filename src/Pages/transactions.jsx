import React, { useContext, useEffect, useState } from "react";
import { Heading } from "@chakra-ui/layout";
import { BoxSize, BreakLine, Flex, SubHeader } from "../Styles/styles";
import TableTemplate from "../Components/Table/table-template";
import { transactionsColumns } from "../Components/Table/data-stracture";
import { DarkerTheme, DarkTheme } from "../Styles/colors";
import { GlobalContext } from "../Context/global/global-context";
import useFetch from "../Utils/useFetch";
import { setTransactions } from "../Context/actions/transactions";

// divide sections into different files
const TransactionsComponent = () => {
	// const [state, dispatchFunction] = useReducer(transactionR, initialState);
	const { transactionsState, transactionsDispatch } = useContext(GlobalContext);
	const [_, setTransactionsData] = useState(transactionsState.allTransactions);
	const transactionsResponse = useFetch(
		"http://localhost:3001/backoffice/transactions",
		"Transactions"
	);
	const { data } = transactionsResponse;

	useEffect(() => {
		setTransactionsData(data);
		transactionsDispatch(setTransactions(data));
	}, [data, transactionsDispatch]);

	return (
		<Flex>
			<Heading {...SubHeader}>Transactions</Heading>
			<BreakLine />
			<BoxSize
				flexSize="5"
				isInvisible={false}
				style={{
					background: DarkerTheme,
					border: `4px solid ${DarkTheme}`,
					borderRadius: "15px",
				}}
			>
				<TableTemplate
					tableData={transactionsState.allTransactions}
					columnsType={transactionsColumns}
				/>
			</BoxSize>
		</Flex>
	);
};

export default TransactionsComponent;
