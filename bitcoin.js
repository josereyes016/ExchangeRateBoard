var request = require('ajax-request');

// request('https://blockchain.info/ticker', function(err, res, body) {
//   if(err){
//     console.error(err);
//     return false;
//   }
//   // console.log(res);
//   console.log(body);
// });

request('http://api.fixer.io/latest?base=USD', function(err, res, body) {
  if(err) {
    console.error(err);
    return false;
  }

  console.log(body);
});
