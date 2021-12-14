let travelDatePicker = new Date()
// How to handle save trips actions, it sends travel data to the server and receives place info, weather info and the image of the traveling destination.
function handleSubmit(event) {
    event.preventDefault();
    let travelPlace = document.getElementById('place').value;
    travelPlace = encodeURI(travelPlace);
    const travelDate = getDate()
    console.log(travelPlace);
    postData('/travelPlace', { travelPlace: travelPlace, travelDate: travelDatePicker })
        .then(function (data) {
            updateUI(data);

        })
}

// Used to post data to the Node server 
async function postData(url = '', data = {}) {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

// Used for export so as to be used in the index.js for webpack
function init() {
    const button = document.getElementById('submit');
    button.addEventListener('click', handleSubmit);

}

// Update the UI for updating travel details on the page.
function updateUI(data) {
    const d = new Date(data.currentWeatherData.valid_date);
    const month = d.toLocaleString('default', { month: 'long' })
    let newDate = d.getDate() + '.' + month + '.' + d.getFullYear();
    const heroImage = document.getElementById('main-img');
    if ((data.pixabayImage !== null) || (data.pixabayImage !== undefined)) {
        heroImage.src = data.pixabayImage;
    }

    var outStr = `The place you entered is: ${data.geonames[0].name}.\nThe country code is: ${data.geonames[0].countryCode}.\nThe country name is: ${data.geonames[0].countryName}.\nThe latitude of the place is: ${data.geonames[0].lat}\nThe longitude of the place is: ${data.geonames[0].lng}.\nThe temperature is: ${data.currentWeatherData.temp}.\nThe date of the weather forecast is: ${newDate}.`
    // alert(outStr);
    const date_diff = `\nYour travel date of ${travelDatePicker} is ${data.travelDaysAhead} days ahead.`
    document.querySelector('.upcoming-trip-details').textContent = outStr + date_diff;
    const myTrips = document.getElementById('all-trips-details');
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = `Yout trip to ${data.geonames[0].name}`;
    details.append(summary);
    const paragraph = document.createElement('p');
    paragraph.textContent = outStr;
    details.append(paragraph);
    details.classList.add("all-trips");
    myTrips.prepend(details);
    const p = document.createElement('p');
}

// Get date from the input type date
function getDate() {
    const datePicker = document.getElementById('travel-date');
    datePicker.addEventListener('change', function () {
        let input = this.value;
        const dateEntered = new Date(input);
        console.log(input); //e.g. 2015-11-13
        // console.log(dateEntered);
        travelDatePicker = dateEntered;
    })
}

// Extra functionality of removing trips from the page.
function removeTrip(event) {
    event.preventDefault();
    const removeTripButton = document.getElementById('reset');
    const myTrips = document.getElementById('all-trips-details');
    const text = 'Sorry no recent trips';
    removeTripButton.addEventListener('click', function () {
        document.querySelector('.upcoming-trip-details').textContent = '';
        myTrips.firstElementChild.remove();
    })

}
export { handleSubmit, postData, init, getDate, removeTrip }

