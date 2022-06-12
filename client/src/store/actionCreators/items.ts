import axios from "axios";
import {Dispatch} from "redux";
import {
    ItemsAction,
    ItemsActionTypes,
    TSetCurrentPageAction,
    TSetFilteredItemsAction,
    TSetSortedItemsAction
} from "../../types/redux";
import {ItemType} from "../../types"
import {getDate} from "../../utils";

const URL = "http://localhost:8080/api";

export const fetchItems = () => {
    return async (dispatch: Dispatch<ItemsAction>) => {
        const response = await axios.get(URL);
        const data: ItemType[] = response.data.map((item: ItemType) => ({...item, date: (getDate(item.date))}));
        dispatch({type: ItemsActionTypes.FETCH_ITEMS, payload: data})
    }
}

export const setFilteredItemsActionCreator = (items: ItemType[]): TSetFilteredItemsAction => {
    return {type: ItemsActionTypes.SET_FILTERED_ITEMS, payload: items}
}

export const setSortedItemsActionCreator = (items: ItemType[]): TSetSortedItemsAction => {
    return {type: ItemsActionTypes.SET_SORTED_ITEMS, payload: items}
}

export const setCurrentPageActionCreator = (page: number): TSetCurrentPageAction => {
    return {type: ItemsActionTypes.SET_CURRENT_PAGE, payload: page}
}