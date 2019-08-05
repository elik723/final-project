var Booking = require("../models/booking-model");

module.exports = class BookingService {
    constructor() {}

    getBookings() {
        return new Promise((resolve, reject) => {
            Booking.getAllBookings((err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            })
        })
    }

    getBookingByProviderId(idJson) {
        return new Promise((resolve, reject) => {
            Booking.findBookingByProviderId(idJson.id, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    getBookingByListingId(idJson) {
        return new Promise((resolve, reject) => {
            Booking.findBookingByListingId(idJson.id, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            })
        })
    }

    getBookingByConsumerId(idJson) {
        return new Promise((resolve, reject) => {
            Booking.findBookingByConsumerId(idJson.id, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            })
        })
    }

    createBooking(newBooking) {
        return new Promise((resolve, reject) => {
            Booking.createBooking(newBooking, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res); 
            })
        })
    }
}