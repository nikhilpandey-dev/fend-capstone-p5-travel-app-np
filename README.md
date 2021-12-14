# Travel Application
> **This is a travel weather application developed as the Capstone project for the Udacity Front End Developer Nano-degree.** This project requires us to build out a travel app that, at a minimum, obtains a desired trip location & date from the user, and displays weather and an image of the location using information obtained from external APIs. 

## Technologies utilized in this project include:

  - HTML MarkUp
  - CSS Grid and Flexbox for responsive styling
  - Vanilla JS for Front-End Interactivity
  - Node JS back-end
  - Express JS Framework for routing 
  - Webpack as a build tool and asset bundler
  - Jest for testing purpose

## API's used in the project:
  - GeoNames - for city co-ordinates
  - Weatherbit - for weather forecasts
  - Pixabay - for city images

> For all the above we need to register with the respective API provider and het a username/ API Key from them.

## The high-level logic of this application is as follows:
- The user enters a city name, and the travel date of their trip in a form
- Data is sent to the backend Node server for processing.
   1. The first fetch request is made to the GeoNames API, to get the co-ordinates of the city the user selected
   1.Once GeoNames Data is returned, the second fetch request is made to the WeatherBit API, to get the weather forecast using the co-oridnates returned from GeoNames.
   1. Once GeoNames Data is returned, the second fetch request is made to the WeatherBit API, to get the weather forecast using the co-oridnates returned from GeoNames.
   2. Once WeatherBit Data is returned, the final fetch request is made to the Pixabay API using the city name the user selected
- The results returned from the API Calls are displayed to the user in a div giving details of the place, weather of the place as of the current date and the travel days from today.
- Also these details are saved in Your Trips section, where the last entered trip is displayed first.
- The user also has the ability to remove the trips.

## Extra Work (as given in the Project Rubric where at least one of them is required)
- Allow the user to remove the trip.

## How to use this repo:

1. Check if you have node and npm installed , if not then install them first
1. Download the file from this GitHub repo and cd into the root folder for this app.
1. Install Node packages using
- Npm Install
```bash
npm install
```
- Build the Porject using
```bash
npm run build-prod
```
- Start the server
```bash
npm run start
```
## Author
**Nikhil Pandey**