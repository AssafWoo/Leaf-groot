import React from 'react';
import { useColorMode } from "@chakra-ui/react"
import { Flex,BoxMD,BoxSM  } from '../../Styles/styles'
import { SettingsIcon, BellIcon } from '@chakra-ui/icons'
import { DarkTheme } from '../../Styles/colors';
import SingleUser from '../../Components/UserAvatar/SingelUser';
import RankIcon from '../../Components/RankIcon/rank-icon';


const DashboardRightPart = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return(
        <BoxSM isInvisible={true}>
            <Flex>
                <BoxSM isInvisible={true}><SettingsIcon cursor="pointer" w={6} h={6} color={colorMode === 'dark' ? 'white' : DarkTheme} /></BoxSM>
                <BoxSM isInvisible={true}><BellIcon cursor="pointer" w={7} h={7} color={colorMode === 'dark' ? 'white' : DarkTheme} /></BoxSM>
                <BoxSM isInvisible={true}>
                    <SingleUser />
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