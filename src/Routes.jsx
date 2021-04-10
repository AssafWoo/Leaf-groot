import { Route, Switch } from "react-router"
import SignUpQuestions from "./Pages/signup-questions";
import EmissionsComponent from "./Pages/emissions"
import Insights from "./Pages/insights"
import Integrations from "./Pages/integrations"
import Login from "./Pages/login"
import Dashboard from "./Pages/main-dashboard"
import MarketPlace from "./Pages/market_place"
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
                        <Route exact path="/marketplace" component={MarketPlace} />
                        <Route exact path="/insights" component={Insights} />
                        <Route exact path="/plan" component={Subscription} />
                        <Route exact path="/settings/company" component={Settings} />
                        <Route exact path="/integrations" component={Integrations} />
                        <Route exact path="/emissions" component={EmissionsComponent} />
                        <Route exact path="/" component={Dashboard} />
                    </Switch> 
                </Layout> 
            : 
            <>
                <Route exact path="/signup/questions" component={SignUpQuestions} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/" component={Login} />
            </>
            }
        </Switch>
    )
}
export default Routes;