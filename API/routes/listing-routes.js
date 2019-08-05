//Router
const express = require('express');
const router = express.Router();

//Services
const LS = require("../services/listing-service");
const listingService = new LS();

router.get("/", (req, res) => {
    listingService.getListings()
    .then(result => {
        res.send(result);
    }).catch(err => {
        res.status(400).json({ err: err.message });
    });
});

router.post("/id", (req, res) => {
    listingService.getListingById(req.body)
    .then(result => {
        res.send(result);
    }).catch(err => {
        res.status(400).json({ err: err.message });
    })
})

router.post("/name", (req, res) => {
    listingService.getListingByName(req.body)
    .then(result => {
        res.send(result);
    }).catch(err => {
        res.status(400).json({ err: err.message });
    })
})

router.post("/provider", (req, res) => {
    listingService.getListingsByProvider(req.body)
    .then(result => {
        res.send(result);
    }).catch(err => {
        res.status(400).json({ err: err.message });
    })
})

router.post('/create', (req, res) => {
    listingService.createListing(req.body)
    .then(result => {
        res.send(result);
    }).catch(err => {
        res.status(400).json({ err: err.message });
    });
});

router.post('/delete', (req, res) => {
    listingService.deleteListing(req.body.id)
    .then(result => {
        res.send(result);
    }).catch(err => {
        res.status(400).json({ err: err.message });
    })
})

module.exports = router;