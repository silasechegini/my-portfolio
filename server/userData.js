const db = require('./database');

class UserData {
    static retrieveAll(callback) {
        db.query('SELECT firstname, lastname, email, country, zipcode, city_name from formdata', (err, res) => {
            if (err.error)
                return callback(err);
            callback(res);
        });
    }

    static insert(Data, callback) {
        let data = JSON.parse(Data);

        db.query('INSERT INTO formdata (firstname,lastname,email,country,zipcode,city_name,google,twitter,linkdin,facebook,comm) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
            [data.firstName, data.lastName, data.email, data.country, data.zipCode, data.cityName, data.google, data.twitter, data.linkedin, data.facebook, data.comments], (err, res) => {
                if (err.error)
                    return callback(err);
                callback(res);
            });
    }
}

module.exports = UserData;