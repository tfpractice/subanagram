import anagramica from 'anagramica';
import { combine, combineLen, } from './combinations';

const word = JSON.stringify(process.argv[2]) || 'isolated';
const length = process.argv[3] || 6;

export const find = string =>
 new Promise((resolve, reject) => {
   anagramica.best(string, (error, response) => {
     if (error) {
       throw error;
     }
     resolve(response.best);
   });
 });
 
const best = ({ best, }) => best;
const all = ({ all, }) => all;
const map = fn => arr => arr.map(fn);
const filter = fn => arr => arr.filter(fn);
const flatBin = (a = [], b = []) => [ ...a, ...b, ];
const flatten = a => [ ...a, ].reduce(flatBin,[]);
const hasLength = len => e => e.length === len;

export const findByLen = (len = 4) => str =>
Promise.all(combineLen(len)(str).map(find))
  .then(flatten).then(filter(hasLength(len)));

findByLen(length)(word).then(res => console.log(res,length,word,res.length, process.argv));
