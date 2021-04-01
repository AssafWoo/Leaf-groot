import styled from 'styled-components';
import { ShadowEffect } from '../../Styles/effects';

export const Wrapper = styled.div`
    .recharts-default-tooltip{
        border-radius:20px;
        font-size:1rem;
        border:.4px solid white;
        ${ShadowEffect}
    }
    .recharts-tooltip-label{
        color:white !important;
    }
    .recharts-sector {
        width:10rem;
    }

`