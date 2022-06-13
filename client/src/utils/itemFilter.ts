import {ItemKeys, TItem} from "../types";
import {checkDateFormat, getDateFromString, getStringFromDate} from "./index";

/* Возвращает новый массив: allItems отфильтрованный так, что
* все элементы по полю filterField преобразованные к строке, содержат в себе value*/
export const itemFilterContains = (allItems: TItem[], filterField: ItemKeys, value: string): TItem[] =>{
    if (filterField === ItemKeys.date) {
        return allItems.filter((item) => getStringFromDate(item[filterField]).includes(value));
    }
    return allItems.filter((item) => String(item[filterField]).toLowerCase().includes(value));
}

/* Возвращает новый массив: allItems отфильтрованный так, что
* все элементы по полю filterField преобразованные к строке равняются value*/
export const itemFilterEquals = (allItems: TItem[], filterField: ItemKeys, value: string): TItem[] =>{
    if (filterField === ItemKeys.date) {
        if (!checkDateFormat(value)) return [];
        return allItems.filter((item) => getStringFromDate(item[filterField]) === value);
    }
    return allItems.filter((item) => String(item[filterField]).toLowerCase() === value);
}

/* Возвращает новый массив: allItems отфильтрованный так, что
* все элементы по полю filterField больше, чем value*/
export const itemFilterMore = (allItems: TItem[], filterField: ItemKeys, value: string): TItem[] => {
    if (filterField === ItemKeys.distance || filterField === ItemKeys.quantity) {
        if (isNaN(Number(value))) return [];
        return allItems.filter((item) => item[filterField] > Number(value))
    }

    if (filterField === ItemKeys.date) {
        if (!checkDateFormat(value)) return [];
        return allItems.filter((item) => {
            return Number(item.date) > Number(getDateFromString(value));
        });
    }

    return allItems.filter((item) => String(item[filterField]).toLowerCase() > value);
}

/* Возвращает новый массив: allItems отфильтрованный так, что
* все элементы по полю filterField меньше, чем value*/
export const itemFilterLess = (allItems: TItem[], filterField: ItemKeys, value: string): TItem[] => {
    if (filterField === ItemKeys.distance || filterField === ItemKeys.quantity) {
        if (isNaN(Number(value))) return [];
        return allItems.filter((item) => item[filterField] < Number(value));
    }

    if (filterField === ItemKeys.date) {
        if (!checkDateFormat(value)) return [];
        return allItems.filter((item) => Number(item.date) < Number(getDateFromString(value)));
    }

    return allItems.filter((item) => String(item[filterField]).toLowerCase() < value);
}

const itemFilter = (filterCondition: string, allItems: TItem[], filterField: ItemKeys, value: string): TItem[] => {
    switch (filterCondition) {
        case "equal":
            return itemFilterEquals(allItems, filterField, value);

        case "contains":
            return itemFilterContains(allItems, filterField, value);

        case "more":
            return itemFilterMore(allItems, filterField, value);

        case "less":
            return itemFilterLess(allItems, filterField, value);

        default:
            console.error('Неверное поле для фильтрации!')
            return allItems;
    }
}

export default itemFilter;
