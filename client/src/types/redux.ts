import { TItem } from ".";

export enum ItemsActionTypes {
    FETCH_ITEMS = "FETCH_ITEMS",
    SET_FILTERED_ITEMS = "SET_FILTERED_ITEMS",
    SET_SORTED_ITEMS = "SET_SORTED_ITEMS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
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

export type ItemsAction = TFetchItemsAction | TSetFilteredItemsAction | TSetSortedItemsAction | TSetCurrentPageAction;

export interface TItemsState {
    allItems: TItem[],
    filteredItems: TItem[],
    sortedItems: TItem[],
    currentPage: number
}
