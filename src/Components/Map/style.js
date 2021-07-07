import styled from 'styled-components';
import { MainRed } from '../../Styles/colors';

export const Marker = styled.div`
.pin2 {
  position: absolute;
  top: 40%;
  left: 50%;
  margin-left: 115px;
  
  border-radius: 50%;
  border: 8px solid #fff;
  width: 8px;
  height: 8px;
}

.pin2::after {
  position: absolute;
  content: '';
  width: 0px;
  height: 0px;
  bottom: -30px;
  left: -6px;
  border: 10px solid transparent;
  border-top: 17px solid #fff;
}
}

`