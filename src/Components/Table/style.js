import styled from 'styled-components';
import { DarkerTheme, DarkTheme, MainRed } from '../../Styles/colors';


export const customStyles = {
    headCells:{
        style:{
            background:'#2c3c5b',
            color:'white',
            fontSize:'1rem'
        }
    },
    cells:{
        style:{
            background:'#2c3c5b',
            color:'white'
        }
    },
    nav:{
        style:{
            background:'#2c3c5b',
            color:'white',
        }
    },
    row:{
        style:{
            background:'#2c3c5b',
            color:'white'
        }
    }
}


export const TableWrapper = styled.div`
    background:${DarkerTheme} !important;
    width:100%;
    .rdt_TableHeader{
        display:none;
    }
    .rdt_Table {
        border-radius:15px;
        background:${DarkerTheme}
    }
    .rdt_Pagination{
        background:${DarkTheme};
        color:white;

    }
    header{
        background:${DarkTheme};
        color:white;
        #search {
            cursor:text;
            color:black;
        }
        button {
            background:${MainRed}
        }
    }
`


export const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

export const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
        columns={columns}
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;