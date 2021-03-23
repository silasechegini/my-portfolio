var express = require('express');
var UserData = require('./userData');

var router = express.Router();

router.get('/retrieve', (req, res) => {
    // console.log("this is a get");
    UserData.retrieveAll((err, data) => {
        if (err)
            return res.json(err);
        return res.json(data);
    });
});

router.post('/submit', (req, res) => {
    var data = JSON.stringify(req.body);
    // console.log("request body: ", data);
    UserData.insert(data, (err, result) => {
        if (err)
            return res.json(err);
        return res.json(result);
    });
});

module.exports = router;