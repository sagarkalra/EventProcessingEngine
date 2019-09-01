const eventManager = require("../utility/EventManager");
const constants = require("../../config/constants");

exports.createWallet = (req, res) => {
    // Mock payload from request
    const payload = {
        mobile: req.body.mobile,
        email: req.body.email || "",
        balance: 0
    };
    // TODO: Code to create wallet data in Database

    const response = {
        status: true,
        statusCode: "success",
        message: "Wallet created successfully",
    };
    res.status(200).json(response);
};

exports.topupWallet = (req, res) => {
    const payload = {
        mobile: req.params.mobile,
        amount: req.body.amount || 0, //req.body.amount
        type: req.body.type || 'TOPUP' // one of TOPUP or CASHBACK
    };
    if(payload.amount === 0) {
        res.status(400).json({
            status: false,
            statusCode: "error",
            message: "Please add some money to the wallet"
        })
    }
    console.log(req.params.mobile, req.body);
    //TODO: Code to add money to the wallet

    // Asynchronously handling tasks
    if(payload.type === 'TOPUP') {
        eventManager.emit(constants.events.sendTopupSuccessEmail, payload);
        eventManager.emit(constants.events.sendCashback, payload);
    } else {
        // Could be different events to handle cashbacks
    }
    console.log('[topupWallet]', 'events emitted');

    const response = {
        status: true,
        statusCode: "success",
        message: "Successfully added money to wallet",
    };
    res.status(200).json(response);
};