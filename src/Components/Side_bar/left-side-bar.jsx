import React from 'react';
import {Link} from 'react-router-dom';
import { Flex, LeafIcon } from '../../Styles/styles';
import { ItemsNav, SideBarWrapper, Item } from './style';
import LeafLogo from '../../Assets/images/leaf-green.png';
import { useState } from 'react';
import { SettingsIcon } from '@chakra-ui/icons';
import FloatEffect from '../FloatEffect/floatEffect';
import {FaDollarSign, FaPlus, FaHome, FaEye} from 'react-icons/fa';
import { HiLightningBolt, HiShoppingCart } from "react-icons/hi";
import { GoMegaphone } from "react-icons/go";


const MenuNames = [
    {
        name:'Dashboard',
        link:'/',
        icon:<FaHome style={{margin:'auto'}} />
    },
    {
        name:'Insights',
        link:'/insights',
        icon:<FaEye style={{margin:'auto'}} />
    },
    {
        name:'Emissons',
        link:'/emissions',
        icon: <HiLightningBolt style={{margin:'auto'}} />
    },
    {
        name:'Integrations',
        link:'/integrations',
        icon:<FaPlus style={{margin:'auto'}} />
    },
    {
        name:'Marketing',
        link:'/marketing',
        icon:<GoMegaphone style={{margin:'auto'}} />
    },
    {
        name:'Market Place',
        link:'/marketplace',
        icon:<HiShoppingCart style={{margin:'auto'}} />
    },
    {
        name:'Plan',
        link:'/plan',
        icon:<FaDollarSign style={{margin:'auto'}} />
    },

    {
        name:'Settings',
        link:'/settings/company',
        icon:<SettingsIcon style={{margin:'auto', display:'block'}} />,
    }

]

const SideBar = ({size}) => {
    const [activeItem, setActiveItem] = useState('');
    const handleClick = ({name, children}) => {
        setActiveItem(name)
    }
    return(
        <SideBarWrapper>
            <FloatEffect size="sm" />
            <ItemsNav>
                <Link to="/">
                    <LeafIcon src={LeafLogo} style={{marginBottom:'1rem', width: size ? '40%' : '25%'}} />
                </Link>
                    {MenuNames.map((value, index) => (
                        <Flex key={index}>
                            <Item size>
                                <Link onClick={(e) => handleClick(value)} className={activeItem === value.name ? 'active' : ''} to={`${value.link}`}>
                                    {size ? <span>{value.icon}</span> : <span>{value.name}</span> }
                                </Link> 
                            </Item>
                        </Flex>
                    ))} 
            </ItemsNav>
        </SideBarWrapper>
    )
}
export default SideBar;