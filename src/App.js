import {BrowserRouter} from 'react-router-dom';
import {AppWrapper, BreakLine, MainWrapper} from './Styles/styles';
import SideBar from './Components/Side_bar/left-side-bar';
import FloatEffect  from './Components/FloatEffect/floatEffect';

import Store from './Context/global/global-context';
import { useContext, useEffect, useReducer } from 'react';
import { useGetPersistedToken, usePersistedContext, usePersistedReducer } from './Utils/usePersist';
import reducer from './Context/global/reducer';

import RightSideBar from './Components/Side_bar/right-side-bar';

import Routes from './Routes';





const App = () => {
  const hasTokens = useGetPersistedToken('id'); // is the user logged demo

  const globalStore = usePersistedContext(useContext(Store), "state");

  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state" // The localStorage key
  );

    console.log(hasTokens)
  useEffect(() => {
    dispatch({type:'USER_CHANGE', payload:{name:'Assaf', role:'CEO', email:'@', auth:'ALL', loggedIn:true} })
  },[])
  

  return (
    <Store.Provider value={{state, dispatch}}>
        <BrowserRouter>
        <MainWrapper>
          {hasTokens ? <SideBar /> : ''}
            <AppWrapper>
              <FloatEffect size="lg" />
              <BreakLine />
              <Routes hasTokens={hasTokens} />
            </AppWrapper>
            {hasTokens ? <RightSideBar /> : ''}
          </MainWrapper>
        </BrowserRouter>
    </Store.Provider>

  );
}

export default App;
