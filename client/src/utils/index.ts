/* Возвращает строку в формате DD.MM.YYYY из объекта Date*/
export const getStringFromDate = (date: Date): string => {
    const day = ('00' + String(date.getDate())).slice(-2);
    const month = ('00' + String(date.getMonth() + 1)).slice(-2);
    const year = ('0000' + String(date.getFullYear())).slice(-4);
    return `${day}.${month}.${year}`;
}

/* Возвращает объект Date из строки в формате DD.MM.YYYY */
export const getDateFromString = (str: string): Date => {
    const day = Number(str.slice(0, 2));
    const month = Number(str.slice(3, 5));
    const year = Number(str.slice(6));
    return new Date(year, month, day);
}

/* Возвращает массив с числами от start до end с шагом dif
* dif должен быть больше 0 */
export const getRange = (end: number, start: number = 0, dif: number = 1): number[] => {
    if (dif <= 0) throw Error("dif должен быть больше 0");

    const range = [];

    for (let i = start; i < end; i += dif) {
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
        && Number(date.slice(6)) >= 0
        && Number(date.slice(0, 2)) <= 31
        && Number(date.slice(3, 5)) <= 12;
}