import React  from 'react';
import { Flex, BoxSize } from '../../Styles/styles'
import { DarkerTheme } from '../../Styles/colors';
import {LeftNav} from './style';
import { BellIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/color-mode';
import UserMenu from '../User_menu/user_menu';
import RankIcon from '../RankIcon/rank-icon';


const LeftSideBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return(
        <LeftNav>
            <BoxSize flexSize="1" isInvisible="true" style={{position:'sticky', top:'1rem', height:'fit-content', marginRight:'1rem', padding:'0px'}} >
                <Flex>
                <BoxSize style={{margin:'0', padding:'0'}} flexSize="1" isInvisible="true"><BellIcon margin="0" cursor="pointer" w={7} h={7} color={colorMode === 'dark' ? 'white' : DarkerTheme} /></BoxSize>
                    <BoxSize style={{margin:'0', padding:'0'}} flexSize="1" isInvisible="true">
                        <UserMenu />
                    </BoxSize>
                    <BoxSize style={{margin:'0', padding:'0'}} flexSize="1" isInvisible="true"><RankIcon /></BoxSize>

                </Flex>
            </BoxSize>
        </LeftNav>
    )
}

export default LeftSideBar;