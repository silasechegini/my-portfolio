const path = require('path');
const layout = require('express-layout');
const express = require('express');
var app = express();
const pg = require('pg');
const bodyParser = require('body-parser');

//set port
var port = process.env.PORT || 8080
// var connection = {connectionString: process.env.DATABASE_URL || "postgres://"};
const CONNECTIONSTRING = process.env.DATABASE_URL || 'postgresql://root:mrPRESIDENT_01@localhost:5432/userdata';
const SSL = process.env.NODE_ENV === 'production';
var connection = new pg.Client({
    connectionString: CONNECTIONSTRING,
    ssl: SSL
});


const middlewares = [
    layout(),
    express.static(path.join(__dirname)),
    bodyParser.urlencoded({ extended: true }),
];

app.use(middlewares);

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.use(express.static(__dirname));

//routes
app.get('/', function (req, res) {
    res.render("index");
});


app.post('/', function (req, res) {
    // Grab data from http request
    var data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        mail: req.body.mail,
        country: req.body.country,
        zipcode: req.body.zipcode,
        cityName: req.body.cityName,
        google: req.body.google,
        twitter: req.body.twitter,
        linkdin: req.body.linkdin,
        facebook: req.body.facebook,
        comm: req.body.comm
    };
    if (typeof data.google === 'undefined' || data.google === null) {
        data.google = 'NULL';
    }
    if (typeof data.twitter === 'undefined' || data.twitter === null) {
        data.twitter = 'NULL';
    }
    if (typeof data.linkdin === 'undefined' || data.linkdin === null) {
        data.linkdin = 'NULL';
    }
    if (typeof data.facebook === 'undefined' || data.facebook === null) {
        data.facebook = 'NULL';
    }
    // var pg = "INSERT INTO userdata(firstname, lastname, mail, country, zipcode, cityName, google, twitter, linkdin, facebook, comm) VALUES ('"+data.firstname+"', '"+data.lastname+"', '"+data.mail+"', '"+data.country+"', '"+data.zipcode+"', '"+data.cityName+"', '"+data.google+"', '"+data.twitter+"', '"+data.linkdin+"','"+data.facebook+"', '"+data.comm+"')";
    // connection.query(pg, function (err, result) {
    //     if (err) throw err;
    //     console.log("entries inserted");
    // });
    var pg = connection.query("INSERT INTO userdata(firstname, lastname, mail, country, zipcode, cityName, google, twitter, linkdin, facebook, comm) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)", [data.firstname, data.lastname, data.mail, data.country, data.zipcode, data.cityName, data.google, data.twitter, data.linkdin, data.facebook, data.comm])
        .then(() => {
            console.log("entries inserted");
        })
        .catch(error => {
            throw error;
        });
    res.sendFile("../Contact.js", { root: __dirname });
});

app.listen(port, function () {
    console.log("app running");
});
