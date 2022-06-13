export const getDate = (dateTime: string): string => {
    const day = dateTime.slice(8, 10);
    const month = dateTime.slice(5, 7);
    const year = dateTime.slice(0, 4);
    return `${day}.${month}.${year}`;
}

export const getRange = (end: number, start: number = 0, dif: number = 1): number[] => {
    const range = [];

    for (let i = start; i < end; i += dif){
        range.push(i);
    }

    return range;
}