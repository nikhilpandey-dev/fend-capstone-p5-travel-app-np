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
app.use(express.urlencoded({ extended: true }));
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

console.log("Geoname username:", process.env.GEONAME_USERNAME);
console.log("Weatherbit API:", process.env.WEATHERBIT_API_KEY);
/* 
    Helper Functions
 */
function createGeonameURL(place) {
    // http://api.geonames.org/searchJSON?q=gorakhpur&maxRows=10&username=nikhilpandey4

    // const travelPlace = encodeURIComponent(place);
    console.log('Travel place is: ', place);
    const username = process.env.GEONAME_USERNAME;
    const url = `http://api.geonames.org/searchJSON?q=`+place+`&maxRows=1&username=${username}`
    return url;
}

function getWeatherBitDataURL(lat, lon) {
    const baseURL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
    const latitude = `&lat=${lat}`;
    const longitude = `&lon=${lon}`;
    const apiKEY = process.env.WEATHERBIT_API_KEY;
    const key = `&key=${apiKEY}`;
    const frequency = `&include=minutely`;
    const url = `${baseURL}${latitude}${longitude}${key}`
    return url;
}
let travelPlaceData = {};
async function getTravelPlace(req, res) {
    console.log('The data code send by you is: ');
    console.log(req.body);
    try {
        const travelPlace = req.body.travelPlace;
        const url = createGeonameURL(travelPlace);
        const response = await axios.get(url);
        
        travelPlaceData = {
            details: response.data.totalResultsCount,
            geonames: response.data.geonames
        }
        console.log("Geonames data is:\n", travelPlaceData.geonames);
        const lat = travelPlaceData.geonames[0].lat;
        const lon = travelPlaceData.geonames[0].lng
        const weatherBitURL = getWeatherBitDataURL(lat, lon);
        const weatherBitResponse = await axios.get(weatherBitURL);
        console.log("Weather bit data for the current date is: ", weatherBitResponse.data.data[0]);
        const date = new Date(weatherBitResponse.data.data[0].valid_date);
        console.log("Date is:", date);
        travelPlaceData['currentWeatherData'] = weatherBitResponse.data.data[0];
        res.send(travelPlaceData);

    } catch (error) {
        console.log("Error: ", error);
    }
}


app.post('/travelPlace', getTravelPlace);