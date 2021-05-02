import { useEffect, useState } from "react";

const sortTypes = [
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


const useSortedElementIndex = (header) => {
    let index;
    index = sortTypes.findIndex(obj => obj.name === header);
    if(index < 0) return 0;
    return index;
}

export default useSortedElementIndex;