import React from 'react';
import {Link} from 'react-router-dom';
import { Flex, LeafIcon } from '../../Styles/styles';
import { ItemsNav, SideBarWrapper, Item } from './style';
import LeafLogo from '../../Assets/images/Leaf-logo-white-leaf.png';
import { useState } from 'react';


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
    const [activeItem, setActiveItem] = useState('')

    return(
        <SideBarWrapper>
            <ItemsNav>
                <Link to="/">
                    <LeafIcon src={LeafLogo} />
                </Link>
                {MenuNames.map((value, index)=> (
                <Flex key={index}>
                    <Item>
                        <Link onClick={() => setActiveItem(value.name)} className={activeItem === value.name ? 'active' : ''} to={`${value.link}`}>
                            <span>{value.name}</span>
                        </Link>
                    </Item>

                </Flex>
                ))}
            </ItemsNav>
        </SideBarWrapper>
    )
}
export default SideBar;