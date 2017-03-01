export const equiv = a => b => b === a;
export const isNot = a => b => b !== a;

export const hasSize = len => str => str.length === len;
export const exceeds = min => str => str.length > min;

export const join = arr => arr.join('');
export const cJoin = arr => arr.join();
export const lower = str => str.toLowerCase();

export const hasComma = str => new Set(str.split('')).has(',');
export const splAlph = str => lower(str).split(/[^0-9a-z?]+/);
export const splEach = str => lower(str).split('');
export const split = str => hasComma(str) ? splAlph(str) : splEach(str);
export const sort = str => join(split(str).sort());
export const splort = str => split(sort(str));
export const strSet = str => [ ...new Set(split(str)), ].join();

export const splice = id => str => join(split(str).splice(id, 1));
export const exclude = x => str => join(split(str).filter(isNot(x)));

export const cat = c0 => c1 => c0.concat(c1);
export const catBin = (c0, c1) => cat(c0)(c1);
export const splat = c0 => c1 => split(c0).map(cat(c1)).join();
export const splatBin = (c0 ,c1) => splat(c0)(splat(c0)(c1));

export const rep = chr => [ chr, chr, ].join();
export const repeat = (x = 1) => chr => join(Array(x).fill(lower(chr)));
export const genRep = (s, x) => exceeds(x - 1)(split(s)) ? split(strSet(s)) 
  : genRep(cat(rep(s))(s),x);
  
export const genReps = x => s => split(genRep(s,x));

export const limit = x => chr => str => exclude(chr)(str).concat(repeat(x)(chr));
export const has = chr => str => new Set(split(str)).has(chr);

export const idx = chr => str => str.indexOf(chr);

export const drop = c => str => str.replace(c, '');
export const splDrop = c => str => split(drop(c)(str)).join();

export const flatBin = (a = [],b = []) => [ ...a,...b, ];
export const chars = str => [ ...new Set(split(join(split(str)))), ];
export const freq = str => c => split(str).filter(equiv(c)).length;
export const genFreq = str => c => genRep(c, freq(str)(c));

export const fMap = str => chars(str).map(genFreq(str)).reduce(flatBin,[]);
export const allFreq = str => fMap(str).join();
