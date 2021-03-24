import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { Flex,BoxMD,BoxSM, BoxLG, BreakLine } from '../../../Styles/styles'
import SingleUser from '../../../Ui/UserAvatar/SingelUser';
import { DarkTheme } from '../../../Styles/colors';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/button';


const DashboardLeftPart = ({companyName, userName}) => {
    const [filter, setFilter] = useState('Display By');
    
    return(
        <BoxMD isInvisible={true}>
        <Flex>
            <BoxLG header={true}>
                <Flex>
                    <BoxLG isInvisible="true">
                        <Heading mb="2" textAlign="left" fontWeight="400" color={DarkTheme}>Wazzaa {userName}</Heading>
                        
                        <p style={{textAlign:"left", color:DarkTheme}}>Pleasure to see you again.</p>
                        <p style={{textAlign:"left", color:'white'}}>Lets see how {companyName} is doing!</p>
                    </BoxLG>
                    <BoxMD isInvisible={true}>
                        <SingleUser desiredPhoto="company" />
                    </BoxMD>
                </Flex>
            </BoxLG>
        </Flex>
            <Menu>
                <MenuButton mt="0.4rem" as={Button} rightIcon={<ChevronDownIcon />} float="right">
                    {filter}
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => setFilter('Daily')}>Daily</MenuItem>
                    <MenuItem onClick={() => setFilter('Weekly')}>Weekly</MenuItem>
                    <MenuItem onClick={() => setFilter('Monthly')}>Monthly</MenuItem>
                    <MenuItem onClick={() => setFilter('Yearly')}>Yearly</MenuItem>
                </MenuList>
            </Menu>
            <Flex>
                <BoxMD>left box</BoxMD>
                <BoxMD>right box</BoxMD>
            </Flex>
            <BoxLG>Progress</BoxLG>
                <Flex>
                    <BoxMD>a</BoxMD>
                    <BoxMD>a</BoxMD>
                    <BoxSM>a</BoxSM>
                </Flex>
                <Flex>
                    <BoxMD>a</BoxMD>
                    <BoxSM>a</BoxSM>
                    <BoxMD>a</BoxMD>
                </Flex>
        </BoxMD>
    )
}

export default DashboardLeftPart;