import { Route, Switch } from "react-router"
import SignUpQuestions from "../Pages/signup-questions";
import OrdersComponent from "../Pages/orders"
import Insights from "../Pages/insights"
import APICallsComponent from "../Pages/api"
import Login from "../Pages/login"
import Dashboard from "../Pages/main-dashboard"
import DocumentationsComponent from "../Pages/documentations"
import Settings from "../Pages/settings"
import Signup from "../Pages/sign-up"
import Billing from "../Pages/billing"
import ErrorPage from '../Pages/404';
import { Layout } from "../Layout/Layout";
import ConsoleOForApiCalls from "../Pages/console";
import TransactionPage from "../Pages//transaction/transaction";
    
const Routes = () => {
    const hasTokens = localStorage.getItem('id')
    return(
        <Switch>
            {hasTokens ?          
            <> 
                <Layout>
                    <Switch> 
                        <Route exact path="/docs" component={DocumentationsComponent} />
                        <Route exact path="/billing" component={Billing} />
                        <Route exact path="/console" component={ConsoleOForApiCalls} />
                        <Route exact path="/settings/company" component={Settings} />
                        <Route exact path="/api" component={APICallsComponent} />
                        <Route exact path="/orders" component={OrdersComponent} />
                        <Route exact path="/insights" component={Insights} />
                        <Route exact path="/" component={Dashboard} />
                    </Switch> 
                </Layout> 
                <Route exact path="/transaction/:id" component={TransactionPage} />
            </>
            : 
            <>
                <Route exact path="/signup/questions" component={SignUpQuestions} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={ErrorPage} />
                <Route exact path="/transaction/:id" component={TransactionPage} />
            </>
            }
        </Switch>
    )
}
export default Routes;