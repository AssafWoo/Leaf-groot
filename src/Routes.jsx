import { Route, Switch } from "react-router"
import SignUpQuestions from "./Pages/signup-questions";
import OrdersComponent from "./Pages/orders"
import Insights from "./Pages/insights"
import APICallsComponent from "./Pages/api"
import Login from "./Pages/login"
import Dashboard from "./Pages/main-dashboard"
import DocumentationsComponent from "./Pages/documentations"
import Settings from "./Pages/settings"
import Signup from "./Pages/sign-up"
import Subscription from "./Pages/subscription"
import { useContext } from "react";
import Store from './Context/global/global-context';
import { Layout } from "./Layout";

const Routes = () => {
    const {state, _} = useContext(Store);
    const hasTokens = state.user.loggedIn;

    return(
        <Switch>
            {hasTokens ?           
                <Layout>
                    <Switch> 
                        <Route exact path="/docs" component={DocumentationsComponent} />
                        <Route exact path="/billing" component={Subscription} />
                        <Route exact path="/settings/company" component={Settings} />
                        <Route exact path="/api" component={APICallsComponent} />
                        <Route exact path="/orders" component={OrdersComponent} />
                        <Route exact path="/insights" component={Insights} />
                        <Route exact path="/" component={Dashboard} />
                    </Switch> 
                </Layout> 
            : 
            <>
                <Route exact path="/signup/questions" component={SignUpQuestions} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
            </>
            }
        </Switch>
    )
}
export default Routes;