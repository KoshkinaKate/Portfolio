const Message = require('../models/message')

// Methods are referenced in our main server.js file

// -----Get ALL messages (GET):
const fetchAllMessages = async (req, res) => {

    //1. Get all messages from the DB:
    const messages = await Message.find();

    //2. Send the messages back as a response: in json format
    res.json({messages: messages})
}

// -----Get specific messages by ID (GET):
const fetchMessage = async (req, res) => {

    //1. Get our ID off the URL:
    const messageID = req.params.id

    //2. Find the specific message using that ID:
    const message = await Message.findById(messageID)

    //3. Send response with that message as the payload
    res.json({message: message})
}


// -----Create a message (POST):
const createMessage = async (req, res) => {
    console.log(`BODY: ${req.body}`)
    //1. Get data from req.body:

    // const title = req.body.title
    // const body = req.body.body
    const { email, body } = req.body //This is the same as writing the 2 lines above,it destrcutures
    
    //2. Create the message:
    const message = await Message.create({
        email,
        body,
    })
    
    //3. Respond with new copy of message
    res.json({message: message})
}


// -----Update a specific message
const updateMessage = async (req, res) => {

    //1. Get the ID off the URL:
    const messageId = req.params.id

    //2. Get the data off the ID:
    const {email, body} = req.body

    //3. Find and update message:
        const updatedMessage = await Message.findByIdAndUpdate(messageId, {
            email,
            body
        })

    //4. Retrieve updated message and send it as a response:
        res.json({message: updatedMessage})
}

// -----Delete a specific message:
const deleteMessage = async (req, res) => {

    //1. Get the ID off the URL:
    const messageId = req.params.id

    //2. Delete the record:
    const deletedMessage = await Message.findByIdAndDelete(messageId);

    //3. Send response:
    res.json({ message: "Message was deleted" });
}


module.exports = {
    fetchAllMessages,
    fetchMessage,
    createMessage,
    updateMessage,
    deleteMessage
}