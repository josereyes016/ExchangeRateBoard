/*
**  Converts JSON from http://api.fixer.io to an Object array to insert in dataset
**  rawData: JSON of exchange rates
**  returns: An array of Objects that include date, money, country
*/

var createEXData = function ( rawData ) {

  var exchangeData = [];

  for( var key in rawData['rates']) {
    exchangeData.push( { data: rawData['date'],
                         money: Math.round(rawData.rates[key]*100),
                         country: key
                       }
                     );
  }

  // console.log(exchangeData);
  return exchangeData;
};

module.exports = {
  createEXData: createEXData
};
