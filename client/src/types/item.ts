export interface ItemType {
    id: number,
    title: string,
    quantity: number,
    distance: number,
    date: string // TODO: date typing
}

export enum ItemsActionTypes {
    FETCH_ITEMS = "FETCH_ITEMS"
}

export interface FetchItemsAction {
    type: ItemsActionTypes.FETCH_ITEMS,
    payload: ItemType[]
}

export type ItemsAction = FetchItemsAction;

export interface ItemsState {
    allItems: ItemType[],
    itemsToShow: ItemType[]
}
