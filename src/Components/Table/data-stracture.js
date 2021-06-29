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
          header={row.name} 
          content={`The project was bought on ${row.date} and saved ${row.co2Mass} Tonne CO2, the transaction is ${row.status}`}
          goToActionButton='empty'
        />,
      },
  ];
  

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
        header={row.name} 
        content={`The project was bought on ${row.date} and saved ${row.co2Mass} Tonne CO2, the transaction is ${row.status}`}
        goToActionButton='empty'
      />,
    }
  ];
  