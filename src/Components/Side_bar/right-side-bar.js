import React  from 'react';
import { Flex, BoxSize, BreakLine } from '../../Styles/styles'
import {LeftNav} from './style';
import UserMenu from '../User_menu/user_menu';
import RankIcon from '../RankIcon/rank-icon';
import { Settings } from '../../Mocks/settins-options';
import SingleUser from '../UserAvatar/SingelUser';



const RightSideBar = () => {

    return(
        <LeftNav>
            <BoxSize flexSize="1" isInvisible="true" style={{position:'sticky', top:'1rem', height:'fit-content', marginRight:'1rem', padding:'0px'}} >
                <Flex>
                    <BreakLine />
                    <BoxSize style={{margin:'1rem', padding:'0'}} flexSize="1" isInvisible="true">
                        <UserMenu children={Settings} icon={<SingleUser />} />
                    </BoxSize>
                    <BoxSize style={{margin:'0', padding:'0'}} flexSize="1" isInvisible="true"><RankIcon /></BoxSize>

                </Flex>
            </BoxSize>
        </LeftNav>
    )
}

export default RightSideBar;