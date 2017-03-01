export const has = chr => str => new Set(str).has(chr);
export const xHas = chr => str => !has(chr)(str);
export const idx = chr => str => str.indexOf(chr);
export const comma = str => has(',')(str);
