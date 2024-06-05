const express = require('express');
const router = express.Router();
const messagesController = require("../controllers/messagesController")


//-------------------------EVENTS ROUTES-------------------------

// -----Get ALL Messages (GET):-----
router.get("/", messagesController.fetchAllMessages)


// -----Get specific Message by ID (GET):-----
router.get("/:id", messagesController.fetchMessage)

// -----Create a Message (POST):-----
router.post("/", messagesController.createMessage)


// -----Update a specific Message (PUT):-----
router.put("/:id", messagesController.updateMessage)


// -----Delete a specific Message (DELETE):-----
router.delete("/:id", messagesController.deleteMessage)

module.exports = router;