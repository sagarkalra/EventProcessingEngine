const eventManager = require("../utility/EventManager");
const constants = require("../../config/constants");

exports.createUser = (req, res) => {
    // Mock payload from request
    const payload = {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
    };
    // TODO: Code to save user data in Database
    // Asynchronously handling tasks
    eventManager.emit(constants.events.sendWelcomeEmail, payload);
    eventManager.emit(constants.events.createWallet, payload);
    eventManager.emit(constants.events.sendPromotionSMS, payload);
    console.log('[createUser]', 'events emitted');
    const response = {
        status: true,
        statusCode: "success",
        message: "User saved successfully"
    };
    res.status(200).json(response);
};