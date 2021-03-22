import styled from 'styled-components';
import {DarkTheme, MainGreen, MainGrey} from './colors';

export const Flex = styled.div`
    display:flex;
    flex-wrap:wrap;
`

export const Wrapper = styled.div`
    width:80%;
    margin:auto;
`

export const BreakLine = styled.div`
    margin:2.5rem 0;
`


export const LeafIcon = styled.img`
    width:90%;
    display:inline-block;
    margin-bottom:1rem;
    
`

export const internalBoxStracture = `
    padding:1rem;
    border-radius:15px;
    color:white;
    margin:.4rem;
`



// Boxes
export const BoxMD = styled.div`
    flex:3;
    ${internalBoxStracture}
    background: ${props => props.isInvisible ? '' : DarkTheme };
    border: ${props => props.isInvisible ? '' : `1px solid ${MainGrey}` };


`

export const BoxLG = styled.div`
    flex:5;
    ${internalBoxStracture}
    background: ${props => props.isInvisible ? '' : DarkTheme };
    border: ${props => props.isInvisible ? '' : `1px solid ${MainGrey}` };
    ${props => props.header ? {background:MainGreen, color:DarkTheme, position:'relative', border:'none'} : '' };

`

export const BoxSM = styled.div`
    flex:1;
    ${internalBoxStracture}
    background: ${props => props.isInvisible ? '' : DarkTheme };
    border: ${props => props.isInvisible ? '' : `1px solid ${MainGrey}` };

`

