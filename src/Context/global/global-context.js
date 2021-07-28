import { createContext, useReducer } from "react";
import user from "../reducers/user";
import achievments from "../reducers/achievments";
import transactions from "../reducers/transactions";
import requests from "../reducers/requests";
import projects from "../reducers/projects";
import { userInitialState } from "../initialState/user";
import { achievmentsInitialState } from "../initialState/achievments";
import { transactionsInitialState } from "../initialState/transactions";
import { requestsInitialState } from "../initialState/requests";
import { projectsInitialState } from "../initialState/projects";

export const GlobalContext = createContext({});

export const GlobalProvider = (props) => {
	const [userState, userDispatch] = useReducer(user, userInitialState);
	const [achievmentsState, achievmentsDispatch] = useReducer(
		achievments,
		achievmentsInitialState
	);
	const [transactionsState, transactionsDispatch] = useReducer(
		transactions,
		transactionsInitialState
	);
	const [requestsState, requestsDispatch] = useReducer(
		requests,
		requestsInitialState
	);
	const [projectsState, projectsDispatch] = useReducer(
		projects,
		projectsInitialState
	);
	return (
		<GlobalContext.Provider
			value={{
				userState,
				userDispatch,
				achievmentsState,
				achievmentsDispatch,
				transactionsState,
				transactionsDispatch,
				requestsState,
				requestsDispatch,
				projectsState,
				projectsDispatch,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};
