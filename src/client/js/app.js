function handleSubmit(event) {
    event.preventDefault();
    let travelPlace = document.getElementById('place').value;
    travelPlace = encodeURI(travelPlace);
    console.log(travelPlace);
    postData('/travelPlace', { travelPlace: travelPlace })
        .then(function (data) {
            updateUI(data);

        })
}

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

function init() {
    const button = document.getElementById('submit');
    button.addEventListener('click', handleSubmit);

}

function updateUI(data) {
    const d = new Date(data.currentWeatherData.valid_date);
    const month = d.toLocaleString('default', { month: 'long' })
    let newDate = d.getDate() + '.' + month + '.' + d.getFullYear();
    const heroImage = document.getElementById('main-img');
    heroImage.src = data.pixabayImage;
    var outStr = `The place you entered is: ${data.geonames[0].name}.\nThe country code is: ${data.geonames[0].countryCode}.\nThe country name is: ${data.geonames[0].countryName}.\nThe latitude of the place is: ${data.geonames[0].lat}\nThe longitude of the place is: ${data.geonames[0].lng}.\nThe temperature is: ${data.currentWeatherData.temp}.\nThe date of the weather forecast is: ${newDate}.`
    // alert(outStr);
    document.querySelector('.upcoming-trip-details').textContent = outStr;
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

function getDate() {
    let dateEntered = new Date()
    const datePicker = document.getElementById('travel-date');
    datePicker.addEventListener('change', function () {
        let input = this.value;
        dateEntered = new Date(input);
        console.log(input); //e.g. 2015-11-13
        console.log(dateEntered);
    })
    return dateEntered;
}

function removeTrip(event) {
    event.preventDefault();
    const removeTripButton = document.getElementById('reset');
    const myTrips = document.getElementById('all-trips-details');
    removeTripButton.addEventListener('click', function(){
        myTrips.firstElementChild.remove();
    })

}
export { handleSubmit, postData, init, getDate, removeTrip }

