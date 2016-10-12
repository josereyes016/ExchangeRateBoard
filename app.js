var API_KEY = 'APIKEY';

var gb = require('geckoboard')(API_KEY);
var request = require('ajax-request');
var dataManip = require('./rates');
var help = require('./helpers');

var ratesDB = {
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

/*
**	Grab data from API and submit it to ratesDB
*/

var exRateApp = function() {

	request('http://api.fixer.io/latest?base=USD', function(err, res, body) {
	  if(err) {
	    console.error(err);
	    return false;
	  }

		// Convert JSON to Object Array
	  var newRates = dataManip.createEXData(JSON.parse(body));

		gb.datasets.findOrCreate( ratesDB,
		  function (err, dataset) {
		    if (err) {
		      console.error(err);
		      return;
		    }

		    console.log("Database created or found");

				// Send data over to the dataset
		    help.modify( dataset, 'PUSH', newRates);
		  }
		);
	});
};

// Send info once
exRateApp();

// POST the new exchange rates every ~25 hours
setInterval(exRateApp, 2147483647);
