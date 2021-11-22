# Project: FEND Capstone - Travel App

## Project Introduction

### Project Summary
> This project aims to give you the opportunity to put all of the skills you have learned into one project to build your own custom travel app. Due to the nature of this course, it is very JavaScript heavy, but it is still epected you create clean and appealing HTML/CSS. You will also be targeting DOM, working with objects, and **retrieving data from 3 APIs in which one of those is reliant on another to work**. Finally, this is all going to be done in a Webpack environment, using an express server, and wrapped up with service workers.
> 
- For this project refactor and test as much as possible while you are building. You should figure for every piece of functionality you add, you will likely spend just as much time testing and refactoring your code.
> If it takes you 5 hours to figure out the logic, it should likely take you another 5 hours determining that you wrote the best code possible. As your skills improve, this process will feel more natural. Make sure to remove any debugging code from your final submission.

### What You Will Build

> You will be building a travel application It's common to pull basic data from an API, but many applications don;t just pull the weather, they pull in multiple types of data, from different sources and occasionally one API will be required to get data from another API.


This project will include a simple form where:
- you enter the location you are traveling to and the date you are leaving.
- If the trip is within a week, you will get the current weather forecast. If the trip is in future, you will get a predicted forecast. <br>The OpenWeather API is fantastic but it doesn't let you get future data for free and it's not that flexible with what information you enter; we are going to use Weatherbit API for you to see how another API accomplishes the same goals. Weatherbit API has one problem, it only takes in coordinates for weather data -- it's that specific. So we'll need to get those coordinates from the Geonames API. Once we have all of this data, we'll want to display am image of the location entered; for this we will be using the Pixabay API. Thus we will be using three (3) APIs
    1. Weatherbit API for weather data
    1. Geonames API for coordinates, which will be fed into the Weatherbit API for getting the weather data of the place.
    1. Pixabay API for getting the image of the place, we are visitng.

This may not sound like a lot, but there is a fair amount of moving piece that rely on each other to work. You'll need to plan out the logic of what you are trying to accomplish before you begin developing. There are a lot of paths, you can take, and what you choose to display and how you display it is sonewhat flexible. It is highly recommended that after you meet the minimum requirements in the rubric, you continue debugging the UX and improve the project.

### What will I learn?

At this point, you have learned all of the technical skills necessary to complete this project. You will likely stumble along the way and find that there are some pieces you didn’t encounter in the past projects.

> Remember, if you get stuck, you should always look things up. Sometimes just articulating the problem renders a solution.

The following are just some of the questions that you'll be experience along the way:
- What's the ideal workflow?
- How many files do I need?
- How do I convert one project into another?
- Should I redo the HTML/CSS or go straight to the JavaScript?
- How many JavaScript functions do I need?
- Should my functions be this many lines of code?
- Is readability or performance more important?

There’s no single correct answer to each question. While building this project, working with peers, and getting feedback from the project reviewer -- you will naturally develop your own answers to these questions!

## Getting Started

### Introduction
This project requires you to build out a travel app that, at a minimum:
- obtains a desired trip location & 
- date from the user, and
- displays weather and
- an image of the location using information obtained from the external APIs.

Given that this is the Capstone project, it's highly encouraged for you to go above and beyond, adding additional functionality and customization to truly stand out with a project you are proud to have at the top of your portfolio!

## Project rubric

our project will be evaluated by a Udacity code reviewer according to the Travel Planner App [project rubric](https://review.udacity.com/#!/rubrics/3636/view). Please review for detailed project requirements.

### Development Environment and Architecture
|Criteria| Meets Specification|
|:------:|:------------------:|
|Architecture|The project should have a structure like the one shown below. All files shown must be present (Webpack may be split into multiple config files, and names may differ) and the app must successfully render a home page with clear design and functionality added when index.html is loaded in the browser. The project should not contain errors in the browser console.<br>

```bash
- Root:
  - `package.json`
  - `readme.md`
  - `webpack.config.js`
  - src folder
    - server folder
      - `server.js` (name will vary)
    - client folder
      - `index.js`
      - html/views folder
        - `index.html`
      - js folder
        - `app.js` (name will vary)
      - styles folder
        - `style.scss` (name will vary - may be broke into partials)
```
|
|Criteria| Meets Specification|
|:------:|:------------------:|
|Webpack| Webpack config should contain at least 3 scripts, express server, build and test. Additionally, dev server may be included.|
|Testing| Check if Jest has been installed and npm run test script is implemented to run Jest.<br>There should be at least one test for the express server.<br>There should be at least one test for the application javascript client.|

|Criteria| Meets Specification|
|:------:|:------------------:|
|Offline capabilities|The project must have service workers installed.|


### HTML & CSS

|Criteria| Meets Specification|
|:------:|:------------------:|
|Usability| - All features are usable across modern desktop and phone browsers.<br> - Ensure the HTML elements, eg. texts and buttons, are proportionate and readable in small screen devices.|
|Styling |Styling is set up in a logical way. All interactive elements have hover states.|
|HTML Structure| HTML structure should be indented properly with classes and ID’s that make sense.|
|Visual Design| The design should clearly be different from the design used in projects 3 and 4.|

### API & JS Integration

|Criteria| Meets Specification|
|:------:|:------------------:|
|Server <br> `src > server > server.js`|`server.js` file should be taken directly from passed project 3 with the addition of added member: value pairs and the required API keys.|
|index.js <br> `src > client > index.js`| - At least one function should be imported.<br> - At least one event listener should be imported. <br> - (styles referenced in html/css)|
|app.js<br> `src > client > js > app.js`| 1. There should be URLS and API Keys for at least 3 APIs, including Geonames, Weatherbit, and Pixabay. You can feel free to use more than 3 APIs.<br>2. There should be a primary object with placeholder member value pairs.<br> 3. There should be a primary function that is exported to `index.js` (`index.js` file should import the functions from other files).|


### Suggestions to Make Your Project Stand Out!
At least one of these is required, but the rest are great additional ways to further customize and improve your project!

- Add end date and display length of trip.
- Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).
- Allow user to add multiple destinations on the same trip.
    - Pull in weather for additional locations.
- Allow the user to add hotel and/or flight data.
    - Multiple places to stay? Multiple flights?
- Integrate the REST Countries API to pull in data for the country being visited.
- Allow the user to remove the trip.
- Use [Local Storage](https://www.taniarascia.com/how-to-use-local-storage-with-javascript/) to save the data so that when they close, then revisit the page, their information is still there.
- Instead of just pulling a single day forecast, pull the forecast for multiple days.
- Incorporate icons into forecast.
- Allow user to Print their trip and/or export to PDF.
- Allow the user to add a todo list and/or packing list for their trip.
- Allow the user to add additional trips (this may take some heavy reworking, but is worth the challenge).
  - Automatically sort additional trips by countdown.
  - Move expired trips to bottom/have their style change so it’s clear it’s expired.

## Get the Starter Code
![Project Mockup as per Udacity Website](./images/travel-app-project-mockup.png)

### Before you begin

Before moving forward, reacquaint yourself with project 3 & 4. After, ask yourself:
- What is the [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)?
- What are [events](https://developer.mozilla.org/en-US/docs/Web/API/Event)?
  - How do we [listen for events](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)?
- How can we [access elements within the DOM](https://www.w3schools.com/js/js_htmldom_elements.asp)?
- We can also access elements with [`getElementsByClassName()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName). What does this method return, and how do you use it?
- Every element has an [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) property that represents the markup of the element's content. How can you leverage this property to get and set content?
- What is the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and how can we use it to get data?
- What are [callback functions](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) and how do we use them appropriately?
- What is [asynchronous javascript](https://developers.google.com/web/fundamentals/primers/async-functions)?
- How/Why do we use [Express](https://expressjs.com/)?
- How/Why do we use [Webpack](https://webpack.js.org/)?
- How/Why do we use [service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)?
- How to set up Unit Testing using [Jest](https://jestjs.io/) framework? You can review P4 ("Evaluate a News Article with NLP) project instructions Stage 4 to install Jest and create unit tests.