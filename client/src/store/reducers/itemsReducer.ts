import {ItemsAction, ItemsActionTypes, TItemsState} from "../../types/redux";
import {ItemKeys} from "../../types";
import {FILTER_CONDITIONS} from "../constants";

const initState: TItemsState = {
    allItems: [],
    filteredItems: [],
    sortedItems: [],
    currentPage: 1,
    filterField: ItemKeys.title,
    filterCondition: Object.keys(FILTER_CONDITIONS)[0],
    filterValue: "",
    sortField: null,
    sortReverse: false
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
        case ItemsActionTypes.SET_FILTER_FIELD:
            return state = {...state, filterField: action.payload};
        case ItemsActionTypes.SET_FILTER_CONDITION:
            return state = {...state, filterCondition: action.payload};
        case ItemsActionTypes.SET_FILTER_VALUE:
            return state = {...state, filterValue: action.payload};
        case ItemsActionTypes.SET_SORT_FIELD:
            return state = {...state, sortField: action.payload};
        case ItemsActionTypes.SET_SORT_REVERSE:
            return state = {...state, sortReverse: action.payload};

        default:
            return state;
    }
}
