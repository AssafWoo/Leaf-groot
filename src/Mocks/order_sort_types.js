export const orderSortTypes = [
    {
        name:'Name',
        up: {
            fn: ((a, b) => a.name.localeCompare(b.name))
        },
        down: {
            fn: ((a, b) => b.name.localeCompare(a.name))       
        },
        default: {
            class: 'sort',
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
    {
        name:'Type',
        up: {
            fn: ((a, b) => a.type.localeCompare(b.type))
        },
        down: {
            fn: ((a, b) => b.type.localeCompare(a.type))
        },
        default: {
            fn: (a, b) => a
        }
    
    },
    {
        name:'Mass(Tonne)',
        up: {
            fn: (a, b) => a.mass - b.mass
        },
        down: {
            fn: (a, b) => b.mass - a.mass
        },
        default: {
            fn: (a, b) => a
        }
    
    },
    {
        name:'Total($)',
        up: {
            fn: (a, b) => a.total - b.total
        },
        down: {
            fn: (a, b) => b.total - a.total
        },
        default: {
            fn: (a, b) => a
        }
    }
];


// const sortingFunction = (valueToSort, sortMethod) => {
//     if(sortMethod === 'up') {
//         return ((a, b) => a.valueToSort.localeCompare(b.valueToSort))
//     }
//     if(sortMethod === 'down') {
//         return ((a, b) => b.valueToSort.localeCompare(a.valueToSort))
//     }
//     return (a, b) => a

// }

export const dashboardContentTableData = {
    headers:['Name', 'Status', 'Type', 'Mass(Tonne)', 'Total($)', 'Date', 'Details'],
    data:[
        {
            name: 'Amazon Tribe',
            status:'Success',
            orders:'',
            type: 'Forestation',
            mass:'170',
            total: '2',
            date:'10/5/21',
            details: '...',
        },
        {
            name: 'AA',
            status:'Success',
            orders:'',
            type: 'Water',
            mass:'190',
            total: '1',
            date:'10/5/21',
            details: '...',
        },
        {
            name: 'Indian waterfall',
            status:'Success',
            orders:'',
            type: 'Forestation',
            mass:'124',
            total: '5',
            date:'14/4/21',
            details: '...',
        },
        {
            name: 'Solar panels in Argentina',
            status:'Failed',
            orders:'',
            type: 'Forestation',
            mass:'168',
            total: '16',
            date:'12/4/21',
            details: '...',
        },
    ] 
};