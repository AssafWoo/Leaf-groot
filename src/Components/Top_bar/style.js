import styled from 'styled-components';

export const TopBarWrapper = styled.div`
    position:fixed;
    width:100%;
    border-bottom:1px solid #8de7c3;
    background:#8de7c3;
    color:black;
    padding:.5rem;
    z-index:3;
    top:0;
`

export const Flex = styled.div`
    display:flex;
    flex-wrap:wrap;
`
export const Icon = styled.div`
    .icon {
        width:1.4rem;
        height:1.4rem;
        background:white;
        border-radius:50%;
        margin-right:1rem;
    }
    flex:1;
    text-align:left;
    font-size:.8rem;
`
export const Img = styled.span`
    width:1.4rem;
    height:1.4rem;
    background:white;
    border-radius:50%;

`