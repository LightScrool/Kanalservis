export enum ItemKeys {
    id = "id",
    title = "title",
    quantity = "quantity",
    distance = "distance",
    date = "date"
}

export interface TItem {
    id: number,
    title: string,
    quantity: number,
    distance: number,
    date: string
}
