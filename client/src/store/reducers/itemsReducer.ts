import {ItemsAction, ItemsActionTypes, ItemsState} from "../../types/item";

const initState: ItemsState = {
    allItems: [],
    itemsToShow: []
}

export const itemsReducer = (state: ItemsState = initState, action: ItemsAction): ItemsState => {
    switch (action.type) {
        case ItemsActionTypes.FETCH_ITEMS:
            return state = {...state, allItems: action.payload};
        case ItemsActionTypes.SET_ITEMS_TO_SHOW:
            return state = {...state, itemsToShow: action.payload};
        default:
            return state;
    }
}
