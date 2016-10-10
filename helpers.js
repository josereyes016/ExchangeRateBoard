/*
**  Modifies a database using three actions PUT (REWIRTE), PUSH (APPEND), or DELETE
**  database: An object that represents the dataset that will be modified
**  action: A string that can be "PUT", "PUSH", or "DELETE"
**  data: An array of objects to be inserted into specified dataset
**  returns: A true is the action was complete or false is an error occured
*/
var modify = function( database, action, data ){

  if( action == 'PUT') {

    database.put( data,

      function (err) {
        if (err) {
          console.error(err);
          return false;
        }

        console.log('Data Overwritten');
      }
    );

  }

  else if (action == "POST") {

    database.push( data,

      function (err) {
        if (err) {
          console.error(err);
          return false;
        }

        console.log('Data added');
        exchangeData = [];
      }

    );
  }

  else if (action == "DELETE")
  {
    // TODO
    return false;
  }

  return false;
}

module.exports = {
  modify: modify
};
