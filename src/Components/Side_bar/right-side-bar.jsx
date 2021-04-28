/* eslint-disable react-hooks/rules-of-hooks */
import React  from 'react';
import { Flex, BoxSize } from '../../Styles/styles'
import {RightNav} from './style';
import UserMenu from '../User_menu/user_menu';
import SingleUser from '../UserAvatar/SingelUser';
import { Link } from 'react-router-dom';
import { MenuItem } from '@chakra-ui/menu';
import { MainBlue } from '../../Styles/colors';
import { useContext } from 'react';
import Store from '../../Context/global/global-context';



const RightSideBar = () => {
    const {_, dispatch} = useContext(Store);

    const handleLogout = () => {
        dispatch({type:'USER_LOGOUT', payload: ''})
    }
    return(
        <RightNav style={{position:'sticky', top:'.1rem', height:'fit-content'}}>
            <BoxSize  flexSize="1" isInvisible="true" style={{position:'sticky', top:'1rem', padding:'0px'}} >
                <Flex>
                    <BoxSize isInvisible="true" style={{padding:'0', textAlign:'right'}} flexSize="1">
                        <UserMenu icon={<SingleUser />} >
                            <Link to='/settings/company'>
                                <MenuItem _focus={{background:'trasparent'}} _hover={{background:MainBlue}} color='white'>Settings</MenuItem>
                            </Link>
                            <Link to='/'>
                                <MenuItem _hover={{background:MainBlue}} onClick={() => handleLogout()} color='white'>Logout</MenuItem>
                            </Link>
                        </UserMenu>
                    </BoxSize>
                </Flex>
            </BoxSize>
        </RightNav>
    )
}

export default RightSideBar;