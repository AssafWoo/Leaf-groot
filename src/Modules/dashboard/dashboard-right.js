import React from 'react';
import { useColorMode } from "@chakra-ui/react"
import { Flex,BoxMD,BoxSM  } from '../../Styles/styles'
import { SettingsIcon, BellIcon } from '@chakra-ui/icons'
import { DarkTheme } from '../../Styles/colors';
import RankIcon from '../../Components/RankIcon/rank-icon';
import UserMenu from '../../Components/User_menu/user_menu';


const DashboardRightPart = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return(
        <BoxSM isInvisible={true}>
            <Flex>
                <BoxSM isInvisible={true}><BellIcon cursor="pointer" w={7} h={7} color={colorMode === 'dark' ? 'white' : DarkTheme} /></BoxSM>
                <BoxSM isInvisible={true}>
                    <UserMenu />
                </BoxSM>
            </Flex>
            <BoxMD>
                <Flex>
                    <BoxSM isInvisible="true">
                        Leaf corp.
                    </BoxSM>
                    <BoxSM isInvisible="true">
                        <RankIcon />
                    </BoxSM>
                </Flex>
                
                
            </BoxMD>

        </BoxSM>
    )
}

export default DashboardRightPart;