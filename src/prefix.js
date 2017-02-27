import { drop,exceeds, exclude,isNot,join,split, } from './utils';

export const prefix = p => str => p.toLowerCase().concat(str.toLowerCase());

export const exPref = p => str => prefix(p)(drop(p)(str));

export const prefixBin = (a,b) => prefix(b)(a);

export const prefixMap = arr => p => [ ...arr, ].map(exPref(p));
export const prefMap = arr => p => [ ...arr, ].map(prefix(p));

export const prefixAll = str => p => prefMap(split(drop(p)(str)))(p);
export const prefAllBin = (str , p) => 
[ ...new Set(split(str).concat(prefixAll(str)(p))), ].join();

export const prefixMapBin = (arr, p) => [ ...new Set(arr.concat(prefixMap(arr)(p))), ];
export const prefixMapBin2 = (arr, p) => arr.concat(prefixMap(arr)(p));
export const prefixMapAll = (arr, p) => arr.concat(prefixMap(arr)(p));

// [ ...new Set(arr.concat(prefixMap(arr)(p))), ];

export const prefixes = arr => (...prefs) => prefs.reduce(prefixMapBin, arr);
export const prefStr = str => (...prefs) => prefs.reduce(prefAllBin, split(str).join());

export const autoPrefix = str => prefixes(split(str))(...split(str));
