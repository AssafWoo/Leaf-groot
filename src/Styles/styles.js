import styled from 'styled-components';
import {DarkTheme, MainGreen, MainGrey} from './colors';
import {ShadowEffect} from './effects';


// heading fontsize - 1.1rem;
// text fontsize - .7rem;
// font weight - 500;

export const LayoutGapWrapper = styled.div`
    padding:2rem;
`

export const Flex = styled.div`
    display:flex;
    flex-wrap:wrap;
    grid-area:content;
`

export const AppWrapper = styled.div`
    text-align: center;
    grid-area:content;
    padding:.4rem;
    ${props => {
        if(props.size){
            return {display:'flex'};
        }
    }}
`
export const MainWrapper = styled.div`
    display:grid;
    grid-template-columns: ${props =>{
        switch(props.size){
            case '3-cols':
                return '1fr 4fr 1fr';
            case '2-cols':
                return '90px auto 0px';
            case '1-cols':
                return '50px auto 0px';
            case 'fullscreen':
                return '40px auto';
            default:
                return '160px auto 100px';
        }
    }};
    grid-gap: ${props =>{
        switch(props.size){
            case '3-cols':
                return '20px'; //170px prev
            case '2-cols':
                return '20px';//100px prev
            case '1-cols':
                return '5px';//30px prev
            case 'fullscreen':
                return '0px';//0px prev
            default:
                return '50px';//170px prev
        }
    }};

    grid-template-areas: ${props => {
        switch(props.size){
            case '3-cols':
                return `
                "header header header"
                "content content content"
                `;
            case '2-cols':
                return '"sidebar content leftsidebar"';
            case '1-cols':
                return '"sidebar content"';
            case 'fullscreen':
                return '"sidebar content"';
            default:
                return '"sidebar content leftsidebar"';
        }
    }};

    height:100vh;
`
  
  

export const BreakLine = styled.div`
    margin:2.5rem 0;
`

export const LeafIcon = styled.img`
    width:25%;
    display:block;
    margin:auto;
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
    ${props => props.header ? {background:MainGreen, color:DarkTheme, position:'relative', border:'none'} : '' };

`

export const Card = styled.div`
    flex:2;
    ${internalBoxStracture};
    border:1px solid ${MainGrey};
    background: ${props => props.isInvisible ? '' : `1px solid ${DarkTheme}` };
    ${ShadowEffect}
`


// headers

export const SubHeader = {
    fontSize:"2rem", textAlign:"left", fontWeight:"300", color:'white'
}

export const Parag = styled.p`
    font-size:1.1rem;
    font-weight:300;
    text-align:left;
`

export const InputProperties = {size:'sm', borderRadius:"full", variant:"solid", margin:'0.5rem 0.3rem'}
