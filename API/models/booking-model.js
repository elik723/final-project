var mysqlConn = require("../database/database");

var Booking = function (booking) {
    this.id = booking.id;
    this.consumerId = booking.consumerId;
    this.providerId = booking.providerId;
    this.startDate = booking.startDate;
    this.endDate = booking.endDate;
    this.listingId = booking.listingId;
}

Booking.createBooking = function (newBooking, result) {
    mysqlConn.query("INSERT INTO Booking set ?", newBooking, function (err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Booking.getAllBookings = function (result) {
    mysqlConn.query("Select * from Booking", function (err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        } 
    });
};

Booking.findBookingByProviderId = (providerId, result) => {
    mysqlConn.query("Select * from Booking where providerId = ?", providerId, (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Booking.findBookingByListingId = (listingId, result) => {
    mysqlConn.query("Select * from Booking where listingId = ?", listingId, (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Booking.findBookingByConsumerId = (consumerId, result) => {
    mysqlConn.query("Select * from Booking where consumerId = ?", consumerId, (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

module.exports = Booking;