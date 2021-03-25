import React from 'react';
import { BoxLG, BoxMD, BoxSM, Flex } from '../Styles/styles';


const Insights = () => {

    return(
        <>
            <Flex>
                <BoxSM>Worse / Best Division</BoxSM>
                <BoxSM>Worse / Best Integration</BoxSM>
                <BoxMD>Monday Saved</BoxMD>
            </Flex>
            <Flex>
                <BoxSM>Where can we save more</BoxSM>
                <BoxMD>Rank comppared to other companies</BoxMD>
                <BoxMD>Taxes return</BoxMD>
            </Flex>
            <Flex>
                <BoxLG>Trees / offsets planted / contributed to</BoxLG>
                <BoxSM>Electricity saved since</BoxSM>
            </Flex>
        </>
    )
}

export default Insights;