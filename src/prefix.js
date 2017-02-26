export const split = string => string.split('');
export const prefix = str => p => str.concat(p);
export const prefixBin = (a,b) => prefix(b)(a);
export const prefixMap = arr => p => [ ...arr, ].map(prefix(p));
export const prefixAll = str => p => prefixMap(split(str))(p);
export const prefixMapBin = (arr, p) => prefixMap(arr)(p);
export const prefixes = arr => (...prefs) => prefs.reduce(concatPrefBin, arr);
