import axios from "axios";
import {Dispatch} from "redux";
import {ItemsAction, ItemsActionTypes} from "../../types/item";

const URL = "http://localhost:8080/api";

export const fetchItems = () => {
    return async (dispatch: Dispatch<ItemsAction>) => {
        const response = await axios.get(URL);
        dispatch({type: ItemsActionTypes.FETCH_ITEMS, payload: response.data})
    }
}