var mysqlConn = require("../database/database");

var Listing = function (listing) {
    this.id = listing.id;
    this.description = listing.description;
    this.name = listing.name;
    this.pricePerNight = listing.pricePerNight;
    this.rating = listing.rating;
    this.serviceProviderID = listing.serviceProviderID;
}

Listing.createListing = function (newListing, result) {
    mysqlConn.query("INSERT INTO Listing set ?", newListing, function (err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Listing.getAllListings = function (result) {
    mysqlConn.query("Select * from Listing", function (err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        } 
    });
};

Listing.findListingByName = (name, result) => {
    mysqlConn.query("Select * from Listing where name = ?", name, (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Listing.findListingById = (id, result) => {
    mysqlConn.query("Select * from Listing where id = ?", id, (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Listing.findListingByProvider = (id, result) => {
    mysqlConn.query("Select * from Listing where serviceProviderID = ?", id, (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    })
}

Listing.removeById = (id, result) => {
    mysqlConn.query("DELETE from Listing where id = ?", id, (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    })
}

module.exports = Listing;