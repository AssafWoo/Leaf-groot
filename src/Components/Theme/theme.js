// theme.js
// 1. import `extendTheme` function
import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from "@chakra-ui/react"
import { DarkerTheme } from '../../Styles/colors';
// 2. Add your color mode config
const styles = {
    global: props => ({
      body: {
        color: mode(DarkerTheme, DarkerTheme)(props),
        bg: mode(DarkerTheme, DarkerTheme)(props),
      },
    }),
  };
  
  const components = {
    Drawer: {
      // setup light/dark mode component defaults
      baseStyle: props => ({
        dialog: {
          color: mode(DarkerTheme, DarkerTheme)(props),
          bg: mode(DarkerTheme, DarkerTheme)(props),
        },
      }),
    },
  };
  
  const theme = extendTheme({
    components,
    styles,
  });
  
// 3. extend the theme
export default theme;