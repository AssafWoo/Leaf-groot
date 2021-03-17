import React from 'react';
import { TopBarWrapper, Flex, Icon,Img } from './style';


const TopBar = () => {
    return(
        <TopBarWrapper>
            <Flex>
                <Icon>
                    <Flex>
                        <div className="icon" />
                        <span>Welcome Assaf</span>
                    </Flex>
                </Icon>
                <Img />
            </Flex>
        </TopBarWrapper>
    )
}

export default TopBar;