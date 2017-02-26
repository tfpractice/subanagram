export const split = string => string.split('');

export const prefix = a => b => a.concat(b);
export const prefixAll = str => b => split(str).map(prefix(b));

export const prefixBin = (p = '', a = '') => prefix(a)(ap);

// export const prefixAll = string;
