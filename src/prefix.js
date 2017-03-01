import { drop, split,splort, } from './utils';

export const prefix = p => chr => p.toLowerCase().concat(chr.toLowerCase());

export const exPref = p => chr => prefix(p)(drop(p)(chr));

// export const limPref = lim => p => chr => prefix(p)(drop(p)(chr));

export const prefixBin = (a,b) => prefix(b)(a);

export const prefixMap = arr => p => [ ...arr, ].map(exPref(p));
export const prefMap = arr => p => [ ...arr, ].map(prefix(p));
export const dropMap = arr => p => [ ...arr, ].map(prefix(p));
export const prefixAll = str => p => [ ...new Set(prefixMap(split(exPref(p)(str)))(p)), ];

export const prefixMapBin = (arr, p) => [ ...new Set(arr.concat(prefixMap(arr)(p))), ];
export const prefixMapAll = (arr, p) => arr.concat(prefixMap(arr)(p));
export const prefAllBin = (str , p) => {
  const res = (prefixMapBin(split(str),p)).join();
  
  console.log('str', str);
  console.log('pref', p);

  // console.log('res',res);
  return res;
};

export const prefixes = arr => (...prefs) => prefs.reduce(prefixMapBin, arr);
export const prefStr = str => (...prefs) => prefs.reduce(prefAllBin, str);
export const selfPerm = str => prefStr(str)(...splort(str));
export const autoPrefix = str => prefixes(split(str))(...split(str));
