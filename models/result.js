"use strict";

let db = require('./database');


let findAll = (req, res, next) => {

    let sql = "SELECT * from items";

    db.query(sql, [id])
        .then(product => res.json(product[0]))
        .catch(next);
};


exports.findAll = findAll;
