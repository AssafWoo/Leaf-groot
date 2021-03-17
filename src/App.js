import './App.css';
import ThemeButton from './Common/theme/theme_button';
import TopBar from './Components/Top_bar/top_bar';
import { Button, ChakraProvider, ColorModeProvider, Heading, Icon, useColorMode } from "@chakra-ui/react"
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SideBar from './Components/Side_bar/side_bar';
import Dashboard from './Components/Dashboard/dashboard';
import {Wrapper} from './Common/styles';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route expact path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
