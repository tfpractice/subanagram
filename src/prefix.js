export const split = string => string.split('');
export const prefix = str => p => str.concat(p);
export const prefixBin = (a,b) => prefix(b)(a);
export const prefixMap = arr => p => [ ...arr, ].map(prefix(p));
export const prefixAll = str => p => prefixMap(split(str))(p);
export const prefixMapBin = (arr, p) => [ ...new Set((arr).concat(prefixMap(arr)(p))), ];
export const prefixes = arr => (...prefs) => prefs.reduce(prefixMapBin, arr);
export const selfPrefix = str => prefixes(split(str))(...split(str));
export const combinations = str => prefixes(split(str))(...split(str));
