import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './Pages/main-dashboard';
import {AppWrapper, BreakLine, MainWrapper} from './Styles/styles';
import Integrations from './Pages/integrations';
import SideBar from './Components/Side_bar/left-side-bar';
import FloatEffect  from './Components/FloatEffect/floatEffect';
import EmissionsComponent from './Pages/emissions';
import Settings from './Pages/settings';
import Subscription from './Pages/subscription';
import Store from './Context/global/global-context';
import { useContext, useEffect, useReducer } from 'react';
import { usePersistedContext, usePersistedReducer } from './Utils/usePersist';
import reducer from './Context/global/reducer';
import Insights from './Pages/insights';
import Login from './Pages/login';
import Signup from './Pages/sign-up';
import { useState } from 'react';
import RightSideBar from './Components/Side_bar/right-side-bar';
import MarketPlace from './Pages/market_place';


function App() {
  const [isLogged, setIsLogged] = useState(true); // is the user logged demo

  const globalStore = usePersistedContext(useContext(Store), "state");

  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state" // The localStorage key
  );


  useEffect(() => {
    dispatch({type:'USER_CHANGE', payload:{name:'Assaf', role:'CEO', email:'@', auth:'ALL', loggedIn:true} })
  },[])
  

  return (
    <Store.Provider value={{state, dispatch}}>
        <BrowserRouter>
        {isLogged ? 
        <>
        <MainWrapper>
          <SideBar />
            <AppWrapper>
            <FloatEffect size="lg" />
            <BreakLine />
                  <Switch>
                    <Route expact path="/marketplace" component={MarketPlace} />
                    <Route expact path="/insights" component={Insights} />
                    <Route expact path="/plan" component={Subscription} />
                    <Route expact path="/settings" component={Settings} />
                    <Route expact path="/integrations" component={Integrations} />
                    <Route expact path="/emissions" component={EmissionsComponent} />
                    <Route expact path="/" component={Dashboard} />
                  </Switch>
            </AppWrapper>
            <RightSideBar />
          </MainWrapper>
          </> :
            <Switch>
                <AppWrapper>
                  <FloatEffect size="lg" />
                  <Route expact path="/signup" component={Signup} />
                  <Route expact path="/login" component={Login} />
                </AppWrapper>
            </Switch> }
        </BrowserRouter>
    </Store.Provider>

  );
}

export default App;
