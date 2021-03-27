import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Portal } from "@chakra-ui/portal";


const UserMenu = ({icon, children}) => {
    return(
        <Menu>
            <MenuButton color='white' rightIcon={<ChevronDownIcon />}>{icon}</MenuButton>
            <Portal>
                <MenuList>
                    {children.map(v =>(
                        <MenuItem color='white'>{v.content}</MenuItem>

                    ))}
                </MenuList>
            </Portal>
        </Menu> 
    )
}

export default UserMenu;