import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Portal } from "@chakra-ui/portal";
import SingleUser from "../UserAvatar/SingelUser";


const UserMenu = () => {
    return(
        <Menu>
            <MenuButton color='white' rightIcon={<ChevronDownIcon />}><SingleUser /></MenuButton>
            <Portal>
                <MenuList>
                    <MenuItem color='white'>Settings</MenuItem>
                    <MenuItem color='white'>Logout</MenuItem>
                </MenuList>
            </Portal>
        </Menu> 
    )
}

export default UserMenu;