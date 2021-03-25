import styled from 'styled-components';
import { DarkTheme, MainGrey } from '../../Styles/colors';
import { ShadowEffect } from '../../Styles/effects';
import { internalBoxStracture } from '../../Styles/styles';


export const Card = styled.div`
    flex:2;
    ${internalBoxStracture};
    border:1px solid ${MainGrey};
    background: ${props => props.isInvisible ? '' : `1px solid ${DarkTheme}` };
    ${ShadowEffect}
`
