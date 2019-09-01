const EventEmitter = require('events');
const axios = require('axios');
const constants = require('../../config/constants');


class EventManager extends EventEmitter {}

const eventManager = new EventManager();

eventManager.on('SEND_WELCOME_EMAIL', (data) => {
    // Call an API to send email
    // setTimeout to emulate API call latency
    setTimeout(() => {
        console.log('Sent Welcome Email', data);
    }, 500);
});

eventManager.on('CREATE_WALLET', (data) => {
    // Call a method to create wallet (say with Mobile Number)
    axios.post(
        `${constants.baseURL}api/v1/wallets`,
        {
            mobile: data.mobile,
            balance: data.balance || 0
        }
    ).then((response) => {
        console.log('wallet created', response.data);
    }).catch(err => {
        console.log('Wallet not created', err);
    });
});

eventManager.on('SEND_PROMOTION_SMS', (data) => {
    // Call an API to send SMS
    // setTimeout to emulate API call latency
    setTimeout(() => {
        console.log('Sent Promotional SMS', data);
    }, 500);
});

eventManager.on('SEND_TOPUP_SUCCESS_EMAIL', (data) => {
    // Call an API to send email
    // setTimeout to emulate API call latency
    setTimeout(() => {
        console.log('Sent Topup Success Email', data);
    }, 500);
});

eventManager.on('SEND_CASHBACK', (data) => {
    // Call a method to randomly decide cashback and send to wallet
    const cashback = decideCashback(data.amount);
    console.log('cashback', cashback);
    axios.post(
        `${constants.baseURL}api/v1/wallets/${data.mobile}/topup`,
        {
            mobile: data.mobile,
            amount: cashback,
            type: 'CASHBACK'
        }
    ).then((response) => {
        console.log('Cashback credited to wallet', response.data);
    }).catch(err => {
        console.log('Cashback credited to wallet', err);
    });
});

const decideCashback = (rechargeAmount) => {
    // simple random function for now
    // random integer between 1 and the amount added in wallet
    return Math.floor(Math.random() * (rechargeAmount));
};


module.exports = eventManager;
