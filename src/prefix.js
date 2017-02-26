export const exceeds = min => str => str.length > min;
export const isNot = a => b => b !== a;
export const split = str => str.toLowerCase().split('');
export const exclude = x => str => split(str).filter(isNot(x)).join('');

// export const removeChar = c=> str=> new Set(split(str).filter( => {})).delete(c)
export const prefix = p => str => p.toLowerCase().concat(str.toLowerCase());
export const exPref = p => str => prefix(p)(exclude(p)(str));

// excludeMap = arr
export const prefixBin = (a,b) => prefix(b)(a);

// export const prefixMap = arr => p => [ ...arr, ].map(prefix(p));

export const prefixMap = arr => p => [ ...arr, ].map(exPref(p));

export const prefixAll = str => p => prefixMap(split(str))(p);

export const prefixMapBin = (arr, p) => [ ...new Set((arr).concat(prefixMap(arr)(p))), ];

export const prefixes = arr => (...prefs) => prefs.reduce(prefixMapBin, arr);

export const autoPrefix = str => prefixes(split(str))(...split(str));

export const combinations = str => prefixes(split(str))(...split(str));
