import DataTable from "react-data-table-component";
import { TableWrapper, TextField, customStyles } from "./style";
import { useEffect, useMemo, useState } from "react";
import { Spinner } from "@chakra-ui/spinner";

const FilterComponent = ({ filterText, onFilter, onClear }) => (
	<>
		<TextField
			id="search"
			type="text"
			placeholder="Filter By ID"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
			style={{ borderRadius: "15px" }}
		/>
	</>
);

const TableTemplate = ({ columnsType, tableData = [] }) => {
	const [filterText, setFilterText] = useState("");
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	const [pending, setPending] = useState(true);
	const [rowsData, setRowsData] = useState([]);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setRowsData(tableData);
			setPending(false);
		}, 1000);
		return () => clearTimeout(timeout);
	}, [tableData]);

	const filteredItems = rowsData.filter(
		(item) =>
			item.id && item.id.toLowerCase().includes(filterText.toLowerCase())
	);

	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText("");
			}
		};

		return (
			<FilterComponent
				onFilter={(e) => setFilterText(e.target.value)}
				onClear={handleClear}
				filterText={filterText}
			/>
		);
	}, [filterText, resetPaginationToggle]);

	return (
		<TableWrapper>
			<DataTable
				title={false}
				columns={columnsType}
				data={filteredItems}
				wrap
				responsive
				persistTableHead
				customStyles={customStyles}
				pagination
				paginationPerPage={5}
				subHeader
				highlightOnHover
				progressPending={pending}
				progressComponent={<Spinner />}
				subHeaderComponent={subHeaderComponentMemo}
			/>
		</TableWrapper>
	);
};

export default TableTemplate;
