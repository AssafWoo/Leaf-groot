import { useEffect, useState } from "react";

const sortTypes = [
    {
        name:'Name',
        up: {
            class: 'sort-up',
            fn: ((a, b) => a.name.localeCompare(b.name))
        },
        down: {
            class: 'sort-down',
            fn: ((a, b) => b.name.localeCompare(a.name))       
        },
        default: {
            class: 'sort',
            fn: ((a, b) => a.firstname.localeCompare(b.firstname))
        }
    },
    {
        name:'Status',
        up: {
            class: 'sort-up',
            fn: ((a, b) => a.status.localeCompare(b.status))       
        },
        down: {
            class: 'sort-down',
            fn: ((a, b) => b.status.localeCompare(a.status))
        },
        default: {
            class: 'sort',
            fn: ((a, b) => a.status.localeCompare(b.status))
        }
    
    },
    {
        name:'Type',
        up: {
            class: 'sort-up',
            fn: ((a, b) => a.type.localeCompare(b.type))
        },
        down: {
            class: 'sort-down',
            fn: ((a, b) => b.type.localeCompare(a.type))
        },
        default: {
            class: 'sort',
            fn: ((a, b) => a.type.localeCompare(b.type))
        }
    
    },
    {
        name:'Mass(Tonne)',
        up: {
            class: 'sort-up',
            fn: (a, b) => a.mass - b.mass
        },
        down: {
            class: 'sort-down',
            fn: (a, b) => b.mass - a.mass
        },
        default: {
            class: 'sort',
            fn: (a, b) => a
        }
    
    },
    {
        name:'Total($)',
        up: {
            class: 'sort-up',
            fn: (a, b) => a.total - b.total
        },
        down: {
            class: 'sort-down',
            fn: (a, b) => b.total - a.total
        },
        default: {
            class: 'sort',
            fn: (a, b) => a
        }
    }
];


const useSortedElementIndex = (header, dataArray, sortType) => {
    let index;
    index = sortTypes.findIndex(obj => obj.name === header);
    if(index < 0) index = 0;
    const newDataArray = dataArray?.data?.sort(sortTypes[index][sortType].fn);
    return newDataArray;
}

export default useSortedElementIndex;