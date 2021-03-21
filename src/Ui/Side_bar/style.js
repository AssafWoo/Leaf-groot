import styled from 'styled-components';
import {DarkTheme, MainGreen} from '../../Styles/colors';
import { TransitionEffect } from '../../Styles/effects';

export const SideBarWrapper = styled.div`
  height: 100vh;
  position:sticky;
  border-radius:40px;
  z-index: 2;
  top: 1rem;
  margin:.5rem 0;
  background-color: ${MainGreen};
  overflow-x: hidden;
  padding-top: 20px;
  flex:2 0 5%;
`
export const ItemsNav = styled.div`
    margin-top:.1rem;
    text-align:center;
    span {
      margin:.4rem;
    }

`

export const Item = styled.div`
    margin-top:1rem;
    text-align:center;
    color:white;
    font-weight:400;
    width:100%;
    ${TransitionEffect};
    &:hover{
      color:${DarkTheme};
      ${TransitionEffect};
    }
    .active{
      background:${DarkTheme};
      padding:.8rem;
      color:white;
      ${TransitionEffect};
      border-radius:50% 50% 50% 50% / 100% 1% 99% 0%;
    }

`