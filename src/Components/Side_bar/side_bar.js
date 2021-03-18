import React from 'react';
import {Link} from 'react-router-dom';
import { Flex, MyIcon } from '../../Common/styles';
import { ItemsNav, SideBarWrapper } from './style';

const MenuNames = [
    {
        name:'Dashboard',
        link:'/'
    },
    {
        name:'Emissons',
        link:'/emissions'
    },
    {
        name:'Integrations',
        link:'/integrations'
    },
    {
        name:'Divions',
        link:'/divisions'
    },
    {
        name:'Volunteer',
        link:'/volunteer'
    },
    {
        name:'Certificate',
        link:'/certificate'
    },
    {
        name:'Offsets',
        link:'/offsets'
    },
    {
        name:'Settings',
        link:'/settings'
    },

]


const SideBar = () => {
    return(
        <SideBarWrapper>
            <ItemsNav>
                <MyIcon className="icon" />
                <span>Logo</span>
                {MenuNames.map((value, index)=> (
                <Flex key={index} >
                    <MyIcon className="icon" />
                        <Link to={`${value.link}`}>
                            <span>{value.name}</span>
                        </Link>
                </Flex>
                ))}
            </ItemsNav>
        </SideBarWrapper>
    )
}
export default SideBar;