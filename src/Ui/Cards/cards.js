import styled from 'styled-components';
import { ShadowEffect } from '../../Styles/effects';
import { internalBoxStracture } from '../../Styles/styles';


export const Card = styled.div`
    flex:2;
    ${internalBoxStracture}
    background: ${props => props.isInvisible ? '' : 'white' };
    ${ShadowEffect}
`
