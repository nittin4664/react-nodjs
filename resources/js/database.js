var pgp = require('pg-promise')();

var cn = {
    host: 'localhost',
    port: 5432,
    database: 'testdb',
    user: 'testuser',
    password: 'testuserpassword'
};

var db = pgp(cn);

exports.query = function(queryString){
    return db.query(queryString).then(function(d){
                                        return d;},
                                      function(error){
                                        console.log(error);
                                        return [];});
};
