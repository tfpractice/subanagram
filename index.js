const anagramica = require('anagramica');
 
anagramica.all('bread', (error, response) => {
  if (error) {
    throw error;
  }
 
  console.log(response);

  //= > { 
  //= >   'all': [ 
  //= >     'bared', 
  //= >     'beard', 
  //= >     'bread', 
  //= >     'debar' 
  //= >   ] 
  //= > } 
});
