import styled from 'styled-components';
import { Black, MainGrey} from '../../Styles/colors';


export const FooterWrapper = styled.div`
    width:100%;
    background-color: ${Black};
    color:white;
    text-align: center;
    margin-top: 10rem;
`

export const UlWrapper = styled.ul`
    text-align: left;
`

export const Li = styled.ul`
    font-size: 1rem;
    margin:.4rem;
    cursor: pointer;
    line-height: 2.5rem;
`
export const LiHeader = styled.ul`
    font-size: 1.3rem;
    margin:.4rem;
    color:${MainGrey}

`