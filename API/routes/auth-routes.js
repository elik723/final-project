//Express
const express = require('express');
const router = express.Router();

//Models
const user = require("../models/user-model")

//Services
const AuthService = require("../services/auth-service");
const authService = new AuthService();

router.post("/login", (req, res) => {
    authService.login(req.body)
    .then(user => {
        res.send(user);
    }).catch(err => {
        res.status(400).json({ err: err.message });
    }); 
});

router.post("/register", (req, res) => {
    authService.register(req.body)
    .then(user => {
        res.send(user)
    }).catch(err => {
        console.log("a");
        res.status(400).json({ err: err.message })
    })
})

module.exports = router;