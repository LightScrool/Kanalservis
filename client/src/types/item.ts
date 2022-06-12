export interface ItemType {
    id: number,
    title: string,
    quantity: number,
    distance: number,
    date: string
}

export enum ItemsActionTypes {
    FETCH_ITEMS = "FETCH_ITEMS",
    SET_ITEMS_TO_SHOW = "SET_ITEMS_TO_SHOW"
}

export interface FetchItemsAction {
    type: ItemsActionTypes.FETCH_ITEMS,
    payload: ItemType[]
}

export interface SetItemsToShowAction {
    type: ItemsActionTypes.SET_ITEMS_TO_SHOW,
    payload: ItemType[]
}

export type ItemsAction = FetchItemsAction | SetItemsToShowAction;

export interface ItemsState {
    allItems: ItemType[],
    itemsToShow: ItemType[]
}
