import styled from 'styled-components';
import {DarkTheme, MainGreen} from './colors';

export const Flex = styled.div`
    display:flex;
    flex-wrap:wrap;
`

export const MyIcon = styled.span`
    width:1.4rem;
    height:1.4rem;
    background:white;
    border-radius:50%;
    margin:0rem .5rem 0rem .5rem;
    display:inline-block;
    
`

export const LeafIcon = styled.img`
    width:90%;
    display:inline-block;
    margin-bottom:1rem;
    
`
export const LeafDashboardIcon = styled.img`
    width:10%;
    display:inline-block;
    margin-bottom:1rem;

`

export const Wrapper = styled.div`
    width:80%;
    margin:auto;
`

export const internalBoxStracture = `
    background:white;
    border-radius:20px;
    color:black;
    margin:.4rem;
`


export const BoxMD = styled.div`
    flex:3;
    padding:1rem;

    ${props => props.isInvisible ? '' : internalBoxStracture }

`

export const BoxLG = styled.div`
    flex:5;

    ${props => props.isInvisible ? '' : internalBoxStracture }
    padding:2rem;
    ${props => props.header ? {background:MainGreen, color:DarkTheme} : '' }

`

export const BoxSM = styled.div`
    flex:1;
    padding:1rem;

    ${props => props.isInvisible ? '' : internalBoxStracture }

`
export const BreakLine = styled.div`
    margin:2.5rem 0;
`

