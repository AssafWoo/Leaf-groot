import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './Components/Dashboard/dashboard';
import {Flex, Wrapper} from './Common/styles';
import Integrations from './Components/Integrations/integrations';
import SideBar from './Components/Side_bar/side_bar';



function App() {
  return (
    <Flex>
      <BrowserRouter>
        <SideBar />
        <div className="App">
          <Wrapper>
              <Switch>
                <Route expact path="/integrations" component={Integrations} />
                <Route expact path="/" component={Dashboard} />
              </Switch>
          </Wrapper>
        </div>
      </BrowserRouter>
    </Flex>
  );
}

export default App;
