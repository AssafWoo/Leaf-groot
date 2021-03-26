import React from 'react';
import { useColorMode } from "@chakra-ui/react"
import { Flex,BoxSize  } from '../../Styles/styles'
import { BellIcon } from '@chakra-ui/icons'
import { DarkTheme } from '../../Styles/colors';
import RankIcon from '../../Components/RankIcon/rank-icon';
import UserMenu from '../../Components/User_menu/user_menu';


const DashboardRightPart = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return(
        <BoxSize flexSize="1" isInvisible={true}>
            <Flex>
                <BoxSize flexSize="1" isInvisible={true}><BellIcon cursor="pointer" w={7} h={7} color={colorMode === 'dark' ? 'white' : DarkTheme} /></BoxSize>
                <BoxSize flexSize="1" isInvisible={true}>
                    <UserMenu />
                </BoxSize>
            </Flex>
            <BoxSize flexSize="3">
                <Flex>
                    <BoxSize flexSize="1" isInvisible="true">
                        Leaf corp.
                    </BoxSize>
                    <BoxSize flexSize="1" isInvisible="true">
                        <RankIcon />
                    </BoxSize>
                </Flex>
                
                
            </BoxSize>

        </BoxSize>
    )
}

export default DashboardRightPart;