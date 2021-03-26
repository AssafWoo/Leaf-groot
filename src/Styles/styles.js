import styled from 'styled-components';
import {DarkTheme, MainGreen, MainGrey} from './colors';
import {ShadowEffect} from './effects';


// heading fontsize - 1.1rem;
// text fontsize - .7rem;
// font weight - 500;

export const Flex = styled.div`
    display:flex;
    flex-wrap:wrap;
`


export const BreakLine = styled.div`
    margin:2.5rem 0;
`


export const LeafIcon = styled.img`
    width:90%;
    display:inline-block;
    margin-bottom:1rem;
    border-radius:15px;
    
`

export const internalBoxStracture = `
    padding:1rem;
    border-radius:15px;
    color:white;
    margin:.4rem;
`


// Boxes
// SM - flex:1
// MD - flex:3
// LG - flex:5

export const BoxSize = styled.div`
    flex:${props => props.flexSize};
    background: ${props => props.isInvisible ? '' : DarkTheme };
    ${internalBoxStracture}
    border: ${props => props.isInvisible ? '' : `1px solid ${MainGrey}` };
    ${props => props.header ? {background:MainGreen, color:DarkTheme, position:'relative', border:'none'} : '' };

`

export const Card = styled.div`
    flex:2;
    ${internalBoxStracture};
    border:1px solid ${MainGrey};
    background: ${props => props.isInvisible ? '' : `1px solid ${DarkTheme}` };
    ${ShadowEffect}
`
