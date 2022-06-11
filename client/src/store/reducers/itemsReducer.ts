import {ItemsAction, ItemsActionTypes, ItemsState} from "../../types/item";

const initState: ItemsState = {
    allItems: [],
    itemsToShow: []
}

export const itemsReducer = (state: ItemsState = initState, action: ItemsAction): ItemsState => {
    switch (action.type) {
        case ItemsActionTypes.FETCH_ITEMS:
            return state = {...state, allItems: action.payload};
        default:
            return state;
    }
}
