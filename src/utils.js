export const equiv = a => b => b === a;
export const isNot = a => b => b !== a;
export const join = arr => arr.join('');
export const split = str => str.toLowerCase().split('');
export const splice = id => str => join(split(str).splice(id, 1));

export const sort = str => join(split(str).sort());
export const has = chr => str => new Set(split(str)).has(chr);

export const hasSize = len => str => str.length === len;
export const exceeds = min => str => str.length > min;
export const exclude = x => str => join(split(str).filter(isNot(x)));
export const idx = chr => str => str.indexOf(chr);

export const drop = c => str => has(c)(str) ? splice(idx(c)(str))(str) : str;
