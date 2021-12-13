function handleSubmit(event) {
    event.preventDefault();
    let travelPlace = document.getElementById('place').value;
    travelPlace = encodeURI(travelPlace);
    console.log(travelPlace);
    postData('/travelPlace', { travelPlace: travelPlace })
        .then(function (data) {
            console.log('The data returned is: ');
            console.log(data);
            alert(data.details);
            const d = new Date(data.currentWeatherData.valid_date);
            const month = d.toLocaleString('default', { month: 'long' })
            let newDate = d.getDate()+'.'+ month + '.' + d.getFullYear();
            var outStr = `The place you entered is: ${data.geonames[0].name}.\nThe country code is: ${data.geonames[0].countryCode}.\nThe country name is: ${data.geonames[0].countryName}.\nThe latitude of the place is: ${data.geonames[0].lat}\nThe longitude of the place is: ${data.geonames[0].lng}.\nThe temperature is: ${data.currentWeatherData.temp}.\nThe date of the weather forecast is: ${newDate}.`
            // alert(outStr);
            document.querySelector('.upcoming-trip-details').textContent = outStr;
            
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

export { handleSubmit, postData, init }

