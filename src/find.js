import anagramica from 'anagramica';
import { exceeds, } from './utils';
import { combine, combineLen,combineMin, } from './combinations';

const best = ({ best, }) => best;
const all = ({ all, }) => all;
const map = fn => arr => arr.map(fn);
const filter = fn => arr => arr.filter(fn);
const flatBin = (a = [], b = []) => [ ...a, ...b, ];
const flatten = a => [ ...a, ].reduce(flatBin,[]);
const hasLength = len => e => e.length === len;

export const find = string =>
 new Promise((resolve, reject) => {
   anagramica.best(string, (error, response) => {
     if (error) {
       throw error;
     }
     resolve(response.best);
   });
 });
 
export const findByLen = (len = 4) => str =>
 Promise.all(combineLen(len)(str).map(find))
   .then(flatten).then(filter(hasLength(len)));
   
export const findAll = str =>
Promise.all(combineMin(2)(str).map(find))
  .then(flatten).then(filter(exceeds(3)));
