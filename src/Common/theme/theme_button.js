import { useColorMode } from "@chakra-ui/react"
import { MoonIcon } from '@chakra-ui/icons';

const ThemeButton = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <div className="header">
          <MoonIcon top="92vh" position="absolute" margin="15px" cursor="pointer" size="lg" color={colorMode === 'dark' ? 'white' : 'gray.700'} onClick={toggleColorMode} position="absolute" right="1px" />
      </div>
    )
  }
export default ThemeButton;