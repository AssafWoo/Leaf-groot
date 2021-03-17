import React from 'react';
import { TopBarWrapper, Flex, Icon,Img } from './style';


const TopBar = () => {
    return(
        <TopBarWrapper>
            <Flex>
                <Icon>
                    <Flex>
                        <div className="icon" />
                        <p>Hey Assaf!</p>
                    </Flex>
                </Icon>
                <Img />
            </Flex>
        </TopBarWrapper>
    )
}

export default TopBar;