const comma = str => new Set((str).split('')).has(',');

export const lower = str => str.toLowerCase();

export const alpha = str => lower(str).split(/\W+/);

export const alphStr = str => lower(str).replace(/\W+/g,'');

export const chars = str => alphStr(str).split('');

export const charSet = str => [ ...new Set(alphStr(str)), ];
export const cSet = str => [ ...new Set(alphStr(str)), ];

export const split = str => comma(str) ? alpha(str) : chars(str);
export const strSet = str => [ ...new Set(split(str)), ];
export const uniq = str => [ ...new Set(split(str)), ];

export const sort = str => split(str).sort();
export const sortSet = str => sort(uniq(str).join());
