import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { Flex, LeafIcon } from '../../Styles/styles';
import { ItemsNav, SideBarWrapper, Item } from './style';
import LeafLogo from '../../Assets/images/leaf-green.png';
import { useState } from 'react';
import { SettingsIcon } from '@chakra-ui/icons';
import {FaDollarSign, FaHome, FaEye, FaPowerOff, FaTruck, FaLock, FaBook} from 'react-icons/fa';
import Store from '../../Context/global/global-context';

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
        name:'Orders',
        link:'/orders',
        icon: <FaTruck style={{margin:'auto'}} />
    },
    {
        name:'API Keys',
        link:'/apikeys',
        icon:<FaLock style={{margin:'auto'}} />
    },
    {
        name:'Documentation',
        link:'/documentation',
        icon:<FaBook style={{margin:'auto'}} />
    },
    {
        name:'Billing',
        link:'/billing',
        icon:<FaDollarSign style={{margin:'auto'}} />
    },

    {
        name:'Settings',
        link:'/settings/company',
        icon:<SettingsIcon style={{margin:'auto', display:'block'}} />,
        
    },
    {
        name:'Exit',
        link:'/login',
        icon:<FaPowerOff style={{margin:'auto', display:'block'}} />,
    }

]

const SideBar = ({size}) => {
    const [activeItem, setActiveItem] = useState('');
    const {_, dispatch} = useContext(Store);

    const handleClick = ({name, children}) => {
        console.log(name)
        if(name === 'Exit') {
            
           dispatch({type:'USER_LOGOUT'})
        }
        setActiveItem(name)
    }
    return(
        <SideBarWrapper>
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