import anagramica from 'anagramica';

export const find = string =>
 new Promise((resolve, reject) => {
   anagramica.all(string, (error, response) => {
     if (error) {
       throw error;
     }
     resolve(response);
   });
 });

find('bread').then(console.log);
