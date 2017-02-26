export const sort = str => split(str).sort().join('');
export const hasSize = len => str => str.length === len;
export const exceeds = min => str => str.length > min;
export const split = string => string.toLowerCase().split('');
