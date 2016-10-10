/*
**  Converts JSON from http://api.fixer.io to an Object array to insert in dataset
**  rawData: JSON of exchange rates
**  returns: An array of Objects that include date, money, country
*/

var createEXData = function ( rawData ){

  exchangeData = [];

  for( var key in rawData.rates ){
    exchangeData.push({ data: rawData['date'], money: Math.round(rawData.rates[key]*100), country: key});
  }

  return exchangeData;

}

module.exports = {
  createEXData: createEXData
};
