const US = require("./user-service");
const userService = new US();

//Bcryptjs
var bcrypt = require("bcryptjs");

module.exports = class AuthService {
    constructor() {}

    register(newUser) {
        return new Promise((resolve, reject) => {
            userService.getUsers()
            .then(result => {
                const existingUsers = result.filter(user => {
                    return newUser.email === user.email;
                });
                if (existingUsers.length == 1) {
                    console.log("b");
                    reject("Email address already in use");
                } else {
                    userService.createUser(newUser)
                    .then(user => {
                        resolve(user);
                    }).catch(err => {
                        console.log("c");
                        reject(err);
                    })
                }
            }).catch(err => {
                console.log("d");
                reject(err);
            });
        })
    }

    login(user) {
        return new Promise((resolve, reject) => {
            userService.getUsers()
            .then(result => {
                result.forEach(existingUser => {
                    if (user.email === existingUser.email) {
                        if (user.password === existingUser.password) {
                            resolve(existingUser);
                        } else {
                            reject("Incorrect password");
                        }
                    }
                });
                reject("Incorrect email");
            }).catch(err => {
                reject(err);
            })
        })
    }
}