export const split = string => string.split('');
export const prefix = str => p => str.concat(p);
export const prefixMap = arr => p => [ ...arr, ].map(prefix(p));
export const prefixAll = str => p => prefixMap(split(str))(p);

// split(str).map(prefix(b));
export const prefixBin = (a,b) => prefix(b)(a);
export const prefixes = arr => (...prefs) => prefs.reduce(prefixBin, arr);

// export const prefixAll = string;
