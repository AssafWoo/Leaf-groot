import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './Components/Dashboard/dashboard';
import {BreakLine, Flex, Wrapper} from './Common/styles';
import Integrations from './Components/Integrations/integrations';
import SideBar from './Components/Side_bar/side_bar';
import FloatEffect  from './Common/FloatEffect/floatEffect';
import EmissionsComponent from './Components/Emissions/emissions';



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
