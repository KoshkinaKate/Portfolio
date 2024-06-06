require('dotenv').config(); // Allows .env

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const nodemailer = require('nodemailer'); //for form to get emails
const connectToDb = require('./config/connectToDb'); // Pulls Mongoose connection into main application

const app = express();
const PORT = process.env.PORT || 3000;

// ---------Importing our Route documents--------------
const messagesRoutes = require('./routes/messagesRoutes');

// --------------Middlewares--------------
app.use(express.json()); // Express doesn't naturally convert our data to json
app.use(cookieParser());
app.use(cors());

connectToDb();

// -----------------------Nodemailer setup
const transporter = nodemailer.createTransport({ //Configures the email transport using Gmail and authentication credentials from environment variables.
  service: 'gmail', // Use Gmail as the email service
  auth: {
    user: process.env.EMAIL_USER, //email
    pass: process.env.EMAIL_PASS, //password
  },
});
//--------------------------- Endpoint to handle contact form submissions
app.post('/messages', (req, res) => {
  const { name, email, message } = req.body; // Destructure name, email, and message from request body

  console.log('Received contact form data:', { name, email, message }); 
 //-------------------------- Email options
  const mailOptions = {
    from: email, // Sender's email
    to: process.env.RECEIVER_EMAIL,
    subject: 'Contact Form Message',
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // Email content, name can be deleted (left just as option)
  };

  console.log('Attempting to send email with the following options:', mailOptions);
    // ------------------------Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending message');
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).send('Message sent successfully');
    }
  });
});

// ------------------------- USE OUR ROUTES -------------------------
app.use('/messages', messagesRoutes);


// -------------------------------- [Database Connection]------------------------------
app.listen(PORT, () => {
  console.log(`Express Server Listening on port ${PORT}`);
});

