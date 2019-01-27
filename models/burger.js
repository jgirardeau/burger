var orm = require("../config/orm.js");


var burger = {
    selectAll: function(cb) {
        console.log("burger select all");
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function(burger_name, cb) {
        console.log("burger select one")
        orm.insertOne("burgers", "burger_name", burger_name, function(res) {
            cb(res);
        });
    },
    updateOne: function(burger_name, cb) {
        orm.updateOne("burgers", "burger_name", burger_name, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;