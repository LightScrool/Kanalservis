import {ItemsAction, ItemsActionTypes, TItemsState} from "../../types/redux";

const initState: TItemsState = {
    allItems: [],
    filteredItems: [],
    sortedItems: [],
    currentPage: 1
}

export const itemsReducer = (state: TItemsState = initState, action: ItemsAction): TItemsState => {
    switch (action.type) {
        case ItemsActionTypes.FETCH_ITEMS:
            return state = {...state, allItems: action.payload};
        case ItemsActionTypes.SET_FILTERED_ITEMS:
            return state = {...state, filteredItems: action.payload};
        case ItemsActionTypes.SET_SORTED_ITEMS:
            return state = {...state, sortedItems: action.payload};
        case ItemsActionTypes.SET_CURRENT_PAGE:
            return state = {...state, currentPage: action.payload};
        default:
            return state;
    }
}
