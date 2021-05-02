import { IconButton } from "@chakra-ui/button";
import { SearchIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { InputLeftAddon } from "@chakra-ui/input";
import { InputGroup } from "@chakra-ui/input";


const SearchBar = () => {
    return (
        <InputGroup>
            <InputLeftAddon children={<IconButton aria-label="Search database" icon={<SearchIcon color="black" />} />} />
            <Input type="text" placeholder="Search..." />
      </InputGroup>
    )
}


export default SearchBar;