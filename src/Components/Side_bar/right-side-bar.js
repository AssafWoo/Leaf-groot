import React  from 'react';
import { Flex, BoxSize } from '../../Styles/styles'
import {RightNav} from './style';
import UserMenu from '../User_menu/user_menu';
import { Settings } from '../../Mocks/settins-options';
import SingleUser from '../UserAvatar/SingelUser';



const RightSideBar = () => {

    return(
        <RightNav style={{position:'sticky', top:'1rem', height:'fit-content'}}>
            <BoxSize  flexSize="1" isInvisible="true" style={{position:'sticky', top:'1rem', padding:'0px'}} >
                <Flex>
                    <BoxSize isInvisible="true" style={{padding:'0', textAlign:'right'}} flexSize="1">
                        <UserMenu children={Settings} icon={<SingleUser />} />
                    </BoxSize>
                </Flex>
            </BoxSize>
        </RightNav>
    )
}

export default RightSideBar;