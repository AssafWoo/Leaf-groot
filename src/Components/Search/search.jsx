import { SearchIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { InputLeftAddon } from "@chakra-ui/input";
import { InputGroup } from "@chakra-ui/input";
import { DarkerTheme, LightBlue } from "../../Styles/colors";


const SearchBar = () => {
    return (
        <InputGroup>
            <InputLeftAddon bg={LightBlue} border="none" children={<SearchIcon color="white" />} />
            <Input type="text" placeholder="Search..." border="none" bg={DarkerTheme} />
      </InputGroup>
    )
}


export default SearchBar;