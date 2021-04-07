import { Route, Switch } from "react-router"
import CompanyTargets from "./Modules/settings/company-targets"
import EmissionsComponent from "./Pages/emissions"
import Insights from "./Pages/insights"
import Integrations from "./Pages/integrations"
import Login from "./Pages/login"
import Dashboard from "./Pages/main-dashboard"
import MarketPlace from "./Pages/market_place"
import Settings from "./Pages/settings"
import Signup from "./Pages/sign-up"
import Subscription from "./Pages/subscription"



const Routes = ({hasTokens}) => { // should be a function to check auth tokens
     console.log(hasTokens)


    return(
        <Switch>
            {hasTokens ?           
            <Switch> {/*Prive routes - login required */}
                <Route exact path="/marketplace" component={MarketPlace} />
                <Route exact path="/insights" component={Insights} />
                <Route exact path="/plan" component={Subscription} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/integrations" component={Integrations} />
                <Route exact path="/emissions" component={EmissionsComponent} />
                <Route exact path="/dashboard" component={Dashboard} />
            </Switch> 
            : 
            <>
                <Route exact path="/signup/questions" component={CompanyTargets} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/" component={Login} />
            </>
            }
        </Switch>
    )
}
export default Routes;