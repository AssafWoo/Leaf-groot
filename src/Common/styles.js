import styled from 'styled-components';

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
export const Wrapper = styled.div`
    width:80%;
    margin:auto;
`

export const internalBoxStracture = `
    background:white;
    border-radius:20px;
    color:black;
    padding:1rem;
    margin:.4rem;    
`
export const ShadowEffect = `


`
export const Ripple = `
    animation: at-ripple 0.5s linear infinite;
    overflow: hidden;
    @keyframes at-ripple {
        0% {
            box-shadow: 0 12px 30px rgba(102, 102, 102, 0.1), 0 0 0 0 rgba(102, 102, 102, 0.1), 0 0 0 15px rgba(102, 102, 102, 0.1), 0 0 0 20px rgba(102, 102, 102, 0.1);
        }
        100% {
            box-shadow: 0 12px 30px rgba(102, 102, 102, 0.1), 0 0 0 20px rgba(102, 102, 102, 0.1), 0 0 0 30px rgba(102, 102, 102, 0.1), 0 0 0 60px rgba(102, 102, 102, 0);
        }
    }
`

export const InsightBoxMD = styled.div`
    flex:3;
    ${internalBoxStracture};

`
export const InsightBoxSM = styled.div`
    flex:1;
    ${internalBoxStracture};

`
export const BreakLine = styled.div`
    margin:2.5rem 0;
`

