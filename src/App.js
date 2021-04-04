import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './Pages/main-dashboard';
import {BreakLine} from './Styles/styles';
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
        <div className="Wrapper">
          <SideBar />
            <div className="App">
            <FloatEffect size="lg" />
            <BreakLine />
                  <Switch>
                    <Route expact path="/marketplace" component={Insights} />
                    <Route expact path="/insights" component={Insights} />
                    <Route expact path="/plan" component={Subscription} />
                    <Route expact path="/settings" component={Settings} />
                    <Route expact path="/integrations" component={Integrations} />
                    <Route expact path="/emissions" component={EmissionsComponent} />
                    <Route expact path="/" component={Dashboard} />
                  </Switch>
            </div>
            <RightSideBar />
          </div>
          </> :
            <Switch>
                <div className="App">
                  <FloatEffect size="lg" />
                  <Route expact path="/signup" component={Signup} />
                  <Route expact path="/login" component={Login} />
                </div>
            </Switch> }
        </BrowserRouter>
    </Store.Provider>

  );
}

export default App;
