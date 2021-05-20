import { APISortTypes } from '../Mocks/api_sort_types';
import {orderSortTypes} from '../Mocks/order_sort_types';


const useSortedArray = (header, dataArray, sortType, tableType) => {
    let index;
    if(tableType === 'Orders') {
        index = orderSortTypes.findIndex(obj => obj.name === header);
        if(index < 0) index = 0;
        return dataArray?.data?.sort(orderSortTypes[index][sortType].fn);
    } else {
        index = APISortTypes.findIndex(obj => obj.name === header);
        if(index < 0) index = 0;
        return dataArray?.data?.sort(APISortTypes[index][sortType].fn);
    }
}

export default useSortedArray;