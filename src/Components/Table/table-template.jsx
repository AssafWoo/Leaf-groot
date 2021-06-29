import DataTable from 'react-data-table-component';
import {TableWrapper, TextField, ClearButton, customStyles} from './style';
import {dashboardContentTableData} from '../../Mocks/order_sort_types';
import { useMemo, useState } from 'react';



const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
      <TextField id="search" type="text" placeholder="Filter By Name" aria-label="Search Input" value={filterText} onChange={onFilter} />
      <ClearButton type="button" onClick={onClear}>X</ClearButton>
    </>
  );

const TableTemplate = ({columnsType}) => {
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = dashboardContentTableData.data.filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
          if (filterText) {
            setResetPaginationToggle(!resetPaginationToggle);
            setFilterText('');
          }
        };
    

        return <FilterComponent  onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
    }, [filterText, resetPaginationToggle]);

    return (
        <TableWrapper>
            <DataTable
                title={false}
                columns={columnsType}
                data={filteredItems}
                responsive={true}
                persistTableHead={true}
                customStyles={customStyles}
                pagination
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
            />
        </TableWrapper>

    )
};

export default TableTemplate;