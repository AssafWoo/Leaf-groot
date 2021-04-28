import {BrowserRouter} from 'react-router-dom';
import FloatEffect  from './Components/FloatEffect/floatEffect';
import Store from './Context/global/global-context';
import { useContext, useEffect, useReducer } from 'react';
import { usePersistedContext, usePersistedReducer } from './Hooks/usePersist';
import reducer from './Context/global/reducer';
import Routes from './Routes';

const App = () => {
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
              <FloatEffect size="lg" />
              <Routes />
        </BrowserRouter>
    </Store.Provider>

  );
}

export default App;
