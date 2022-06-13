import {ItemKeys, TItem} from ".";

export enum ItemsActionTypes {
    FETCH_ITEMS = "FETCH_ITEMS",
    SET_FILTERED_ITEMS = "SET_FILTERED_ITEMS",
    SET_SORTED_ITEMS = "SET_SORTED_ITEMS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_FILTER_FIELD = "SET_FILTER_FIELD",
    SET_FILTER_CONDITION = "SET_FILTER_CONDITION",
    SET_FILTER_VALUE = "SET_FILTER_VALUE",
    SET_SORT_FIELD = "SET_SORT_FIELD",
    SET_SORT_REVERSE = "SET_SORT_REVERSE",
}

export interface TFetchItemsAction {
    type: ItemsActionTypes.FETCH_ITEMS,
    payload: TItem[]
}

export interface TSetFilteredItemsAction {
    type: ItemsActionTypes.SET_FILTERED_ITEMS,
    payload: TItem[]
}

export interface TSetSortedItemsAction {
    type: ItemsActionTypes.SET_SORTED_ITEMS,
    payload: TItem[]
}

export interface TSetCurrentPageAction {
    type: ItemsActionTypes.SET_CURRENT_PAGE,
    payload: number
}

export interface TSetFilterConditionAction {
    type: ItemsActionTypes.SET_FILTER_CONDITION,
    payload: string
}

export interface TSetFilterFieldAction {
    type: ItemsActionTypes.SET_FILTER_FIELD,
    payload: ItemKeys
}

export interface TSetFilterValueAction {
    type: ItemsActionTypes.SET_FILTER_VALUE,
    payload: string
}

export interface TSetSortFieldAction {
    type: ItemsActionTypes.SET_SORT_FIELD,
    payload: ItemKeys | null
}

export interface TSetSortReverseAction {
    type: ItemsActionTypes.SET_SORT_REVERSE,
    payload: boolean
}

export type ItemsAction = TFetchItemsAction
    | TSetFilteredItemsAction
    | TSetSortedItemsAction
    | TSetCurrentPageAction
    | TSetFilterConditionAction
    | TSetFilterFieldAction
    | TSetFilterValueAction
    | TSetSortFieldAction
    | TSetSortReverseAction;

export interface TItemsState {
    allItems: TItem[],
    filteredItems: TItem[],
    sortedItems: TItem[],
    currentPage: number,
    filterField: ItemKeys,
    filterCondition: string
    filterValue: string,
    sortField: ItemKeys | null,
    sortReverse: boolean
}
