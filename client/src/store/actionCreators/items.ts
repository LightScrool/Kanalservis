import axios from "axios";
import {Dispatch} from "redux";
import {ItemsAction, ItemsActionTypes, ItemType, SetItemsToShowAction} from "../../types/item";
import {getDate} from "../../utils";

const URL = "http://localhost:8080/api";

export const fetchItems = () => {
    return async (dispatch: Dispatch<ItemsAction>) => {
        const response = await axios.get(URL);
        const data: ItemType[] = response.data.map((item: ItemType) => ({...item, date: (getDate(item.date))}));
        dispatch({type: ItemsActionTypes.FETCH_ITEMS, payload: data})
    }
}

export const setItemsToShowAction = (items: ItemType[]): SetItemsToShowAction => {
    return {type: ItemsActionTypes.SET_ITEMS_TO_SHOW, payload: items}
}