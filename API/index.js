//Express
const express = require('express');
const app = express();

//cors
const cors = require('cors');
app.use(cors());

//Parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Importing Routers
const userRouter = require("./routes/user-routes");
const authRouter = require("./routes/auth-routes");
const listingRouter = require("./routes/listing-routes");
const bookingRouter = require("./routes/booking-routes");

//Testing Middleware
app.use((req, res, next) => {
    console.log("Request sent in:");
    console.log(req.body);
    next();
});

//Routing Middleware
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listings", listingRouter);
app.use("/api/bookings", bookingRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log('Server running on port ' + PORT));