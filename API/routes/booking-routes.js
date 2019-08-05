//Router
const express = require('express');
const router = express.Router();

//Services
const BS = require("../services/booking-service");
const bookingService = new BS();

router.get("/", (req, res) => {
    bookingService.getBookings()
    .then(result => {
        res.send(result);
    }).catch(err => {
        res.status(400).json({ err: err.message });
    });
});

router.post("/providerId", (req, res) => {
    bookingService.getBookingByProviderId(req.body)
    .then(result => {
        res.send(result);
    }).catch(err => {
        res.status(400).json({ err: err.message });
    })
})

router.post("/listingId", (req, res) => {
    bookingService.getBookingByListingId(req.body)
    .then(result => {
        res.send(result);
    }).catch(err => {
        res.status(400).json({ err: err.message });
    })
})

router.post('/create', (req, res) => {
    bookingService.createBooking(req.body)
    .then(result => {
        res.send(result);
    }).catch(err => {
        res.status(400).json({ err: err.message });
    });
});

router.post("/consumerId", (req, res) => {
    bookingService.getBookingByConsumerId(req.body)
    .then(result => {
        res.send(result);
    }).catch(err => {
        res.status(400).json({ err: err.message });
    })
})

module.exports = router;