import styled from 'styled-components';
import {Black, DarkerTheme} from '../../Styles/colors';
import { ShadowEffect, TransitionEffect } from '../../Styles/effects';

export const SideBarWrapper = styled.div`
  height: 100vh;
  position:sticky;
  z-index: 2;
  background-color: ${DarkerTheme};
  overflow-x: hidden;
  padding-top: 20px;
  border-top-right-radius:15px;
  grid-area:sidebar;
  ${ShadowEffect}
`
export const ItemsNav = styled.div`
    margin-top:.1rem;
    text-align:left;
    span {
      margin:.4rem;
    }

`

export const Item = styled.div`
    margin-top:1rem;
    text-align:left;
    margin-left:.5rem;
    color:white;
    font-weight:500;
    width:100%;
    font-size:1.1rem;
    ${TransitionEffect};
    &:hover{
      ${TransitionEffect};
    }
    .active{
      background:${Black};
      padding:.8rem;
      color:'white';
      ${TransitionEffect};
      /* border-radius:50% 50% 50% 50% / 100% 1% 99% 0%; */
      border-radius:10px;
      width:100%;
    }

`