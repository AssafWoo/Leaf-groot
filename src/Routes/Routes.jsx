import { Route, Switch } from "react-router";
import TransactionsComponent from "../Pages/transactions";
import Achievments from "../Pages/achievments";
import APICallsComponent from "../Pages/api";
import Login from "../Pages/login";
import Dashboard from "../Pages/main-dashboard";
import DocumentationsComponent from "../Pages/documentations";
import Profile from "../Pages/profile";
import Signup from "../Pages/sign-up";
import Billing from "../Pages/billing";
import ErrorPage from "../Pages/404";
import { Layout } from "../Layout/Layout";
import ConsoleOForApiCalls from "../Pages/console";
import ProjectPage from "../Pages//transaction/transaction";
import ProjectsMarketplace from "../Pages/projects-protfolio/projects";

const Routes = () => {
	const hasTokens = localStorage.getItem("id");
	return (
		<Switch>
			{hasTokens ? (
				<>
					<Layout>
						<Switch>
							<Route exact path="/docs" component={DocumentationsComponent} />
							<Route exact path="/billing" component={Billing} />
							<Route exact path="/console" component={ConsoleOForApiCalls} />
							<Route exact path="/profile/company" component={Profile} />
							<Route exact path="/api" component={APICallsComponent} />
							<Route
								exact
								path="/transactions"
								component={TransactionsComponent}
							/>
							<Route exact path="/achievments" component={Achievments} />
							<Route exact path="/projects" component={ProjectsMarketplace} />
							<Route exact path="/" component={Dashboard} />
						</Switch>
					</Layout>
					<Route exact path="/projects/:id" component={ProjectPage} />
				</>
			) : (
				<>
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/" component={ErrorPage} />
					<Route exact path="/projects/:id" component={ProjectPage} />
				</>
			)}
		</Switch>
	);
};
export default Routes;
