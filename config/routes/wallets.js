const express = require('express');
const router = express.Router();
const WalletController = require('../../app/controller/WalletController');


/**
 * Create a new Wallet
 */
router.post('/', WalletController.createWallet);

/**
 * Add money to Wallet
 */
router.post('/:mobile/topup', WalletController.topupWallet);


module.exports = router;
