var config = {
    "connectionString": "mongodb://localhost:27017/local",
    "apiUrl": "http://localhost:3000",
    "secret": "fgSDGgArFGaYJR!FRIJ@#EFW",
    "tokenExpireMinutes": "1h", // mezz'ora. Per un'ora: "1h"
    "validationSecret": "dTGs6£(bj!vETH)ZQ.6ujbrGEG",
    "validationTokenExpiringTime": "2d", // il token di conferma email scade dopo 2 giorni
    "resetPasswordTokenExpiringTime":"1d",
    "resetPasswordSecret":"btWywbBdsV£%G&v!!R_fGg!"
};


module.exports = config;