export const APISortTypes = [
    {
        name:'Type',
        up: {
            fn: ((a, b) => a.type.localeCompare(b.type))
        },
        down: {
            fn: ((a, b) => b.type.localeCompare(a.type))       
        },
        default: {
            class: 'sort',
            fn: (a, b) => a
        }
    },
    {
        name:'Date',
        up: {
            fn: (a, b) => a.date - b.date
        },
        down: {
            fn: (a, b) => b.date - a.date
        },
        default: {
            fn: (a, b) => a
        }
    
    },
    {
        name:'Status',
        up: {
            fn: ((a, b) => a.status.localeCompare(b.status))
        },
        down: {
            fn: ((a, b) => b.status.localeCompare(a.status))
        },
        default: {
            fn: (a, b) => a
        }
    
    },
];


export const APITableData = {
    headers:['Id', 'Type', 'Status'],
    data:[
        {
            id: '1',
            type: 'GET',
            status:'Success',
        },
        {
            id: '2',
            type: 'POST',
            status:'Success',
        },
        {
            id: '3',
            type: 'GET',
            status:'Failed',
        },
    ] 
};