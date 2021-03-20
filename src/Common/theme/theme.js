// theme.js
// 1. import `extendTheme` function
import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from "@chakra-ui/react"
// 2. Add your color mode config
const styles = {
    global: props => ({
      body: {
        color: mode('gray.200', '#1A1D53')(props),
        bg: mode('gray.200', '#1A1D53')(props),
      },
    }),
  };
  
  const components = {
    Drawer: {
      // setup light/dark mode component defaults
      baseStyle: props => ({
        dialog: {
          color: mode('gray.200', '#1A1D53')(props),
          bg: mode('gray.200', '#1A1D53')(props),
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