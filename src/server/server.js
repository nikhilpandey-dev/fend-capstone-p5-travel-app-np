/* 
    Configure dot env
 */
const dotenv = require('dotenv');
dotenv.config();

/* 
    Express to run server and routes
 */
const express = require('express');
const cors = require('cors');
// Start up an instance of the app
const app = express();

// Setup axios for asyns JS on the server side
let axios = require('axios');

/* Since body parser is deprecated and hence am not using it! Also I'm using express 4.17.1 and as per the documentation
"If you are using Express 4.16+ you don't have to import body-parser anymore"
Source: https://stackoverflow.com/questions/66525078/bodyparser-is-deprecated */
/* Dependencies */
/* Middleware*/
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Cors for cross origin allowance
app.use(cors());
app.use(express.static('dist'))
// designates what port the app will listen to for incoming requests
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
const port = 8081;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
    console.log('Your Groname username is');
    console.log(process.env.GEONAME_USERNAME);
})

/*
    Console logs
 */

    // console.log(process.env.GEONAME_USERNAME);
/* 
    Helper Functions
 */
function createGeonameURL(place) {
    // http://api.geonames.org/searchJSON?q=gorakhpur&maxRows=10&username=nikhilpandey4
    const baseURL = 'http://api.geonames.org/searchJSON?q';
    const travelPlace = encodeURIComponent(place);
    const maxRows = '&maxRows=10'
    const usernameString = '&username='
    const username = process.env.GEONAME_USERNAME;
    const url = `${baseURL}${travelPlace}${maxRows}${usernameString}${username}`;
    return url;
}