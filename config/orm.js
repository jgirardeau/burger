var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function(tableInput, cb) {
        console.log("ORM SELECT ALL")
        var queryString = "SELECT * FROM ??;";
        console.log("query:", queryString, tableInput)
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log("RESULT", result);
            cb(result)
        });
    },
    insertOne: function(tableInput, tableNames, tableValues) {
        var queryString = "INSERT INTO ?? (??) VALUES (??);"
        console.log(queryString);
        connection.query(queryString, [tableInput, tableNames, tableValues], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(tableInput, tableNames, tableValues) {
            var queryString = "INSERT INTO ?? (??) VALUES (??);"
            console.log(queryString);
            connection.query(queryString, [tableInput, tableNames, tableValues], function(err, result) {
                if (err) throw err;
                console.log(result);
            });
        }
        // updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        //     var queryString =
        //         "UPDATE ?? SET ??=? WHERE ??=?";
        //     connection.query(
        //         // queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
        //         // function(err, result) {
        //         //     if (err) throw err;
        //         //     console.log(result);
        //         // }
        //     );
        // }
}

module.exports = orm;