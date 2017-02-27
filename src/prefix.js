import { drop,exceeds, exclude,isNot,split, } from './utils';

export const prefix = p => str => p.toLowerCase().concat(str.toLowerCase());

export const exPref = p => str => prefix(p)(drop(p)(str));

export const prefixBin = (a,b) => prefix(b)(a);

export const prefixMap = arr => p => [ ...arr, ].map(exPref(p));

export const prefixAll = str => p => prefixMap(split(str))(p);

export const prefixMapBin = (arr, p) => [ ...new Set(arr.concat(prefixMap(arr)(p))), ];

export const prefixes = arr => (...prefs) => prefs.reduce(prefixMapBin, arr);

export const autoPrefix = str => prefixes(split(str))(...split(str));
