import { comma, } from './has';

export const lower = str => str.toLowerCase();

export const alpha = str => lower(str).split(/[^0-9a-z?]+/);

export const alphStr = str => lower(str).replace(/[^0-9a-z?]+/g,'');

export const chars = str => alphStr(str).split('');

export const charSet = str => [ ...new Set(chars(str)), ];

export const split = str => comma(str) ? alpha(str) : chars(str);

export const exclude = chr => str => split(str).filter(xEq(chr)).join();
