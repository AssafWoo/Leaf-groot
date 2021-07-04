import styled from 'styled-components';
import { DarkerTheme, MainRed } from '../../Styles/colors';


export const customStyles = {
    headCells:{
        style:{
            background:'#233048',
            color:'white',
            fontSize:'1rem'
        }
    },
    cells:{
        style:{
            background:'#233048',
            color:'white'
        }
    },
    nav:{
        style:{
            background:'#233048',
            color:'white',
        }
    },
    row:{
        style:{
            background:'#233048',
            color:'white'
        }
    }
}

const tableCellsStyle = {
    background:DarkerTheme,
    color:'white'
}

export const TableWrapper = styled.div`
    background:${DarkerTheme} !important;

    width:100%;
    .kVlSIs{
        background:transparent;
        color:white; 
        padding:2rem;
    }
    .clAJoY{
        background:transparent;
        color:white;
        padding:2rem;
        
    }
    .rdt_TableHeader{
        display:none;
    }
    .rdt_Table {
        background:${DarkerTheme};
        border-radius:15px;

    }
    .rdt_Pagination{
        ${tableCellsStyle}

    }
    header{
        ${tableCellsStyle}
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