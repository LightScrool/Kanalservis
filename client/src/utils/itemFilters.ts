import {ItemKeys, TItem} from "../types";
import {checkDateFormat, dateCompareMore} from "./index";

/* Возвращает новый массив: allItems отфильтрованный так, что
* все элементы по полю filterField больше, чем value*/
export const itemFilterMore = (allItems: TItem[], filterField: ItemKeys, value: string) => {
    if (filterField === ItemKeys.distance || filterField === ItemKeys.quantity) {
        if (isNaN(Number(value))) return [];

        return allItems.filter((item) => item[filterField] > Number(value))
    }

    if (filterField === ItemKeys.date) {
        if (!checkDateFormat(value)) return [];

        return allItems.filter((item) => dateCompareMore(item.date, value))
    }

    return allItems.filter((item) => String(item[filterField]).toLowerCase() > value);
}

/* Возвращает новый массив: allItems отфильтрованный так, что
* все элементы по полю filterField меньше, чем value*/
export const itemFilterLess = (allItems: TItem[], filterField: ItemKeys, value: string) => {
    if (filterField === ItemKeys.distance || filterField === ItemKeys.quantity) {
        if (isNaN(Number(value))) return [];

        return allItems.filter((item) => item[filterField] < Number(value))
    }

    if (filterField === ItemKeys.date) {
        if (!checkDateFormat(value)) return [];

        return allItems.filter((item) => !dateCompareMore(item.date, value) && item.date !== value)
    }

    return allItems.filter((item) => String(item[filterField]).toLowerCase() < value);
}