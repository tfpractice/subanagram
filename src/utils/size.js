
export const size = str => `${str}`.length;
export const hasSize = len => str => size(str) === len;
export const exceeds = min => str => str.length > min;
export const under = min => str => str.length < min;
