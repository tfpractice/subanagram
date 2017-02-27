export const equiv = a => b => b === a;
export const isNot = a => b => b !== a;
export const join = arr => arr.join('');
export const lower = str => str.toLowerCase();
export const hasComma = str => new Set(str.split('')).has(',');
export const alphaSplit = str => lower(str).split(/[^0-9a-z?]+/).sort();
export const split = str => hasComma(str) ? alphaSplit(str) : lower(str).split('').sort();
export const splice = id => str => join(split(str).splice(id, 1));

export const sort = str => join(split(str).sort());
export const has = chr => str => new Set(split(str)).has(chr);

export const hasSize = len => str => str.length === len;
export const exceeds = min => str => str.length > min;
export const exclude = x => str => join(split(str).filter(isNot(x)));
export const idx = chr => str => str.indexOf(chr);

export const drop = c => str => str.replace(c, '');
