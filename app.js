var API_KEY = 'de11f06ed43f5fb59a36472754dae2f5';

var gb = require('geckoboard')(API_KEY);

console.log(gb);

var testDB = {
	id: "test.db",
	fields: {
		f1 : {
			type : 'number',
			name : 'Random Number',
		},

		f2: {
			type: 'money',
			name: 'Cash',
			currency_code: 'USD',
		},

		f3: {
			type: 'date',
			name: 'Date',
		}
	}
};

var dbConn = function( err, database) {
	if(err) {
		console.error(err);
		return;
	}

	console.log(database + ' Created!');
};

gb.datasets.findOrCreate( testDB, dbConn);
