import React from 'react';
import { Flex,InsightBoxMD,InsightBoxSM  } from '../../Common/styles';
import { DetailsBox, MainChartBox,InsightsWrapper,ProgressBox, TimelineBox } from './style';

const Dashboard = () => {

    return(
        <>
        <Flex>
            <DetailsBox>left box</DetailsBox>
            <MainChartBox>right box</MainChartBox>
        </Flex>
        <ProgressBox>Progress</ProgressBox>
        <TimelineBox>Timeline</TimelineBox>
        <InsightsWrapper>
            <Flex>
                <InsightBoxMD>a</InsightBoxMD>
                <InsightBoxMD>a</InsightBoxMD>
                <InsightBoxSM>a</InsightBoxSM>
            </Flex>
            <Flex>
                <InsightBoxMD>a</InsightBoxMD>
                <InsightBoxSM>a</InsightBoxSM>
                <InsightBoxMD>a</InsightBoxMD>

            </Flex>
        </InsightsWrapper>
        </>
    )
}

export default Dashboard;