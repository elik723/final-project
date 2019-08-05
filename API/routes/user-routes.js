//Router
const express = require('express');
const router = express.Router();

//Services
const US = require("../services/user-service");
const userService = new US();

router.get("/", (req, res) => {
    userService.getUsers()
    .then(result => {
        res.send(result);
    }).catch(err => {
        res.status(400).json({ err: err.message });
    });
});

router.post("/id", (req, res) => {
    userService.getUserById(req.body)
    .then(result => {
        res.send(result);
    }).catch(err => {
        res.status(400).json({ err: err.message });
    })
})

router.post("/email", (req, res) => {
    userService.getUserByEmail(req.body)
    .then(result => {
        res.send(result);
    }).catch(err => {
        res.status(400).json({ err: err.message });
    })
})

router.post('/create', (req, res) => {
    userService.createUser(req.body)
    .then(result => {
        res.send(result);
    }).catch(err => {
        res.status(400).json({ err: err.message });
    });
});

module.exports = router;

