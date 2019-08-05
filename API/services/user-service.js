var User = require("../models/user-model");

module.exports = class UserService {
    constructor() {}

    getUsers() {
        return new Promise((resolve, reject) => {
            User.getAllUsers((err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    getUserById(idJson) {
        return new Promise((resolve, reject) => {
            User.findUserById(idJson.id, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    getUserByEmail(emailJson) {
        return new Promise((resolve, reject) => {
            User.findUserByEmail(emailJson.email, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            })
        })
    }

    createUser(newUser) {
        return new Promise((resolve, reject) => {
            User.findUserByEmail(newUser.email, (err, res) => {
                if (err) {
                    reject(err);
                }
                if (res.length < 1) {
                    User.createUser(newUser, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(res);
                    });
                } else {
                    reject("Email address already in use");
                }
            })
        })
    }
}