import axios from "axios";
import {Dispatch} from "redux";
import {
    ItemsAction,
    ItemsActionTypes,
    TSetCurrentPageAction,
    TSetFilterConditionAction,
    TSetFilterFieldAction,
    TSetFilterValueAction,
    TSetSortFieldAction,
    TSetSortReverseAction
} from "../../types/redux";
import {ItemKeys, TItem} from "../../types"
import {getDate} from "../../utils";
import {SERVER_URL} from "../constants";

export const fetchItems = () => {
    return async (dispatch: Dispatch<ItemsAction>) => {
        const response = await axios.get(SERVER_URL);
        const data: TItem[] = response.data.map((item: TItem) => ({...item, date: (getDate(item.date))}));
        dispatch({type: ItemsActionTypes.FETCH_ITEMS, payload: data})
    }
}

export const setCurrentPageActionCreator = (page: number): TSetCurrentPageAction => {
    return {type: ItemsActionTypes.SET_CURRENT_PAGE, payload: page}
}

export const setFilterConditionActionCreator = (condition: string): TSetFilterConditionAction => {
    return {type: ItemsActionTypes.SET_FILTER_CONDITION, payload: condition}
}

export const setFilterFieldActionCreator = (field: ItemKeys): TSetFilterFieldAction => {
    return {type: ItemsActionTypes.SET_FILTER_FIELD, payload: field}
}

export const setFilterValueActionCreator = (value: string): TSetFilterValueAction => {
    return {type: ItemsActionTypes.SET_FILTER_VALUE, payload: value}
}

export const setSortFieldActionCreator = (field: ItemKeys): TSetSortFieldAction => {
    return {type: ItemsActionTypes.SET_SORT_FIELD, payload: field}
}

export const setSortReverseActionCreator = (reverse: boolean): TSetSortReverseAction => {
    return {type: ItemsActionTypes.SET_SORT_REVERSE, payload: reverse}
}