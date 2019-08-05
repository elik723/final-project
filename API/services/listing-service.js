var Listing = require("../models/listing-model");

module.exports = class ListingService {
    constructor() {}

    getListings() {
        return new Promise((resolve, reject) => {
            Listing.getAllListings((err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            })
        })
    }

    getListingById(idJson) {
        return new Promise((resolve, reject) => {
            Listing.findListingById(idJson.id, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    getListingByName(nameJson) {
        return new Promise((resolve, reject) => {
            Listing.findListingByName(nameJson.email, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            })
        })
    }

    getListingsByProvider(idJson) {
        return new Promise((resolve, reject) => {
            Listing.findListingByProvider(idJson.id, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            })
        })
    }

    createListing(newListing) {
        return new Promise((resolve, reject) => {
            Listing.findListingByName(newListing.name, (err, res) => {
                if (err) {
                    reject(err);
                }
                if (res.length < 1) {
                    Listing.createListing(newListing, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(res);
                    });
                } else {
                    reject("Listing name already in use");
                }
            })
        })
    }

    deleteListing(id) {
        return new Promise((resolve, reject) => {
            Listing.removeById(id, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            })
        })
    }
}