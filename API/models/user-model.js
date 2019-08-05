var mysqlConn = require("../database/database");

var User = function (user) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.cellPhone = user.cellPhone;
    this.email = user.email;
    this.password = user.password;
    this.role = user.role;
    this.date_created = new Date();
};

User.createUser = function (newUser, result) {
    mysqlConn.query("INSERT INTO User set ?", newUser, function (err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

User.getAllUsers = function (result) {
    mysqlConn.query("Select * from User", function (err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        } 
    });
};

User.findUserByEmail = (email, result) => {
    mysqlConn.query("Select * from User where email = ?", email, (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

User.findUserById = (id, result) => {
    mysqlConn.query("Select * from User where id = ?", id, (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

module.exports = User;