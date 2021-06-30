import ModalComponent from "../Modal/modal";

export const transactionsColumns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Status',
      selector: 'status',
      sortable: true,
      right: true,
    },
    {
      name: 'Type',
      selector: 'type',
      sortable: true,
      right: true,
    },
    {
      name: 'CO2 Mass',
      selector: 'co2Mass',
      sortable: true,
      right: true,
    },
    {
      name: 'Total',
      selector: 'total',
      sortable: true,
      right: true,
    },
    {
      name: 'Data',
      selector: 'date',
      sortable: true,
      right: true,
    },
    {
        name: 'Action',
        selector: 'action',
        sortable: false,
        right: true,

        cell: row => 
        <ModalComponent
          openButtonContent='...'
          item={row}
          content={modalContent(row)}
          goToActionButton='empty'
        />,
      },
  ];

  const modalContent = (props) => {
    return(
      <>
        <p>CO2 saved: {props.co2Mass}</p>
        <p>Status: {props.status}</p>
        <p>Date: {props.date}</p>
      </>
    )
  }
  

  export const requestsColumns = [
    {
      name: 'id',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'Status',
      selector: 'status',
      sortable: true,
      right: true,
    },
    {
      name: 'Type',
      selector: 'type',
      sortable: true,
      right: true,
    },
    {
      name:'Action',
      selector:'action',
      sortable:false,
      right:true,
      cell: row => 
      <ModalComponent
        openButtonContent='...'
        item={row}
        header={row.name} 
        content={`The project was bought on ${row.date} and saved ${row.co2Mass} Tonne CO2, the transaction is ${row.status}`}
        goToActionButton='empty'
      />,
    }
  ];
  