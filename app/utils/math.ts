// Функции будут доступны в js ts и vue файлах
// round(10.12312)
/*
round rounds to 2 decimal places
*/
export const round = (num: string | number | undefined | null): string => {
    if (!num) return "";

    return `${Math.round(Number(num) * 100) / 100}`;
};
