import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './Modules/Dashboard/main-dashboard';
import {BreakLine, Flex, Wrapper} from './Styles/styles';
import Integrations from './Modules/Integrations/integrations';
import SideBar from './Ui/Side_bar/side_bar';
import FloatEffect  from './Ui/FloatEffect/floatEffect';
import EmissionsComponent from './Modules/Emissions/emissions';
import Settings from './Modules/Settings/settings';
import Subscription from './Modules/Subscription/subscription';



function App() {
  return (
    <Flex>
      <BrowserRouter>
        <SideBar />
        <div className="App">
        <FloatEffect />
        <BreakLine />
          <Wrapper>
              <Switch>
                <Route expact path="/plan" component={Subscription} />
                <Route expact path="/settings" component={Settings} />
                <Route expact path="/integrations" component={Integrations} />
                <Route expact path="/emissions" component={EmissionsComponent} />
                <Route expact path="/" component={Dashboard} />
              </Switch>
          </Wrapper>
        </div>
      </BrowserRouter>
    </Flex>
  );
}

export default App;
