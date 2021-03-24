import React from 'react';
import {Link} from 'react-router-dom';
import { Flex, LeafIcon } from '../../Styles/styles';
import { ItemsNav, SideBarWrapper, Item } from './style';
import LeafLogo from '../../Assets/images/Leaf-logo-white-leaf.png';
import { useState } from 'react';
import SubHeader from './sub-header';
import { SettingsIcon } from '@chakra-ui/icons';


const MenuNames = [
    {
        name:'Dashboard',
        link:'/'
    },
    {
        name:'Insights',
        link:'/insights'
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
        name:'Marketing',
        link:'/marketing'
    },
    {
        name:'Market Place',
        link:'/volunteer'
    },
    {
        name:'Plan',
        link:'/plan'
    },

    {
        name:<SettingsIcon h={6} w={6} />,
        link:'/settings',
        children:[{name:'User',
        link:'/settings/user',},
        {name:'Company',
        link:'/settings/company',}]
    },

]

const SideBar = () => {
    const [activeItem, setActiveItem] = useState('');
    
    const handleClick = ({name, children}) => {
        console.log(name)
        setActiveItem(name)
    }

    return(
        <SideBarWrapper>
            <ItemsNav>
                <Link to="/">
                    <LeafIcon src={LeafLogo} />
                </Link>
                {MenuNames.map((value, index)=> (
                <Flex key={index}>
                    <Item>
                        {value.children ?  
                        <SubHeader header={value.name} children={value.children} activeItem={activeItem} handleClick={handleClick} />
                        :
                        <Link onClick={(e) => handleClick(value)} className={activeItem === value.name ? 'active' : ''} to={`${value.link}`}>
                            <span>{value.name}</span>
                        </Link> 
                        }

                    </Item>

                </Flex>
                ))}
            </ItemsNav>
        </SideBarWrapper>
    )
}
export default SideBar;