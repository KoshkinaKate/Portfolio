const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true, // Makes this email field mandatory
        trim: true, // Removes whitespace from the email
        validate: {
            validator: function(v) {
                return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    body: {
        type: String,
        required: true, 
        trim: true 
    }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;

