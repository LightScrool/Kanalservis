import {TItem} from "./types";

/* Преобразовывает строку с датой из формата, который возвращает сервер в формат DD.MM.YYYY */
export const getDate = (dateTime: string): string => {
    const day = dateTime.slice(8, 10);
    const month = dateTime.slice(5, 7);
    const year = dateTime.slice(0, 4);
    return `${day}.${month}.${year}`;
}

/* Возвращает массив с числами от start до end с шагом dif
* dif должен быть больше 0 */
export const getRange = (end: number, start: number = 0, dif: number = 1): number[] => {
    if (dif <= 0) throw Error("dif должен быть больше 0");

    const range = [];

    for (let i = start; i < end; i += dif){
        range.push(i);
    }

    return range;
}

/* Возвращает true, если строка является датой в формате DD.MM.YYYY */
export const checkDateFormat = (date: string): boolean => {
    return date.length === 10
        && date[2] === '.'
        && date[5] === '.'
        && !isNaN(Number(date.slice(0, 2)))
        && !isNaN(Number(date.slice(3, 5)))
        && !isNaN(Number(date.slice(6)))
        && Number(date.slice(0, 2)) >= 0
        && Number(date.slice(3, 5)) >= 0
        && Number(date.slice(6, 9)) >= 0
        && Number(date.slice(0, 2)) <= 31
        && Number(date.slice(3, 5)) <= 12;
}

/* Возвращает true, если первая дата больше второй. В обратном случае - возвращает false */
export const dateCompareMore = (a: string, b: string): boolean => {
    if (a.slice(6) !== b.slice(6)) return Number(a.slice(6)) > Number(b.slice(6));
    if (a.slice(3, 5) !== b.slice(3, 5)) return Number(a.slice(3, 5)) > Number(b.slice(3, 5));
    return Number(a.slice(0, 2)) > Number(b.slice(0, 2));
}