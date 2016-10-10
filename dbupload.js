var API_KEY = 'de11f06ed43f5fb59a36472754dae2f5';

var gb = require('geckoboard')(API_KEY);

var exData = {"base":"USD","date":"2016-10-10","rates":{"AUD":1.3163,"BGN":1.7525,"BRL":3.2156,"CAD":1.3253,"CHF":0.98208,"CNY":6.707,"CZK":24.212,"DKK":6.6675,"GBP":0.80708,
"HKD":7.7588,"HRK":6.7249,"HUF":272.98,"IDR":12977.0,"ILS":3.7896,"INR":66.517,"JPY":103.4,
"KRW":1111.6,"MXN":18.942,"MYR":4.1535,"NOK":8.1047,"NZD":1.4021,"PHP":48.411,"PLN":3.837,
"RON":4.0354,"RUB":62.435,"SEK":8.6575,"SGD":1.3743,"THB":35.1,"TRY":3.0706,"ZAR":13.849,
"EUR":0.89606}};

var testDB = {
	id: "rates.db",
	fields: {
		country: {
			type : 'string',
			name : 'Country',
		},

		money: {
			type: 'money',
			name: 'Cash',
			currency_code: 'USD',
		},

		data: {
			type: 'date',
			name: 'Date',
		}
	}
};

var modify = function( database, action, data ){
  if( action == 'PUT') {

    exchangeData = [];

    for( var key in data.rates ){
      exchangeData.push({ data: data['date'], money: Math.round(data.rates[key]*100), country: key});
    }

    // console.log(JSON.stringify(exchangeData));
    database.put(


      exchangeData,

      function (err) {
        if (err) {
          console.error(err);
          return;
        }

        console.log('Dataset created and data added');
        exchangeData = [];
      }
    );

  }

  else if (action == "POST") {

    // DO this

  }

  else if (action == "DELETE")
  {
    // DO this
  }
}

gb.datasets.findOrCreate( testDB,
  function (err, dataset) {
    if (err) {
      console.error(err);
      return;
    }

    console.log("Databse created or found");
    modify( dataset, 'PUT', exData);
  }
);
