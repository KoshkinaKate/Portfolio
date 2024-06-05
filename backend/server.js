require("dotenv").config(); // Allows .env

const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require("cors");

// Pulls Mongoose connection into main application
const connectToDb = require("./config/connectToDb");

const app = express();

const PORT = process.env.PORT || 3000; 

// ---------Importing our Route documents--------------
const messagesRoutes = require('./routes/messagesRoutes');

// --------------Middlewares--------------
app.use(express.json()); // Express doesn't naturally convert our data to json
app.use(cookieParser());
app.use(cors());


connectToDb();


// ------------------------- USE OUR ROUTES -------------------------
app.use("/messages", messagesRoutes);



// -------------------------------- [Database Connection]------------------------------
app.listen(PORT, () => {
  console.log(`Express Server Listening on port ${PORT}`);
});
