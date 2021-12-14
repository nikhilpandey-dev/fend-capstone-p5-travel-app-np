import './styles/style.scss';
import { handleSubmit } from './js/app';
import { postData } from './js/app';
import { init } from './js/app';
import { getDate } from './js/app'
import { removeTrip } from './js/app';
console.log('Hurray, we made image loading!');

export {
    init
}

// Call init on DOMContentLoaded event.
window.addEventListener('DOMContentLoaded', init);

window.addEventListener('DOMContentLoaded', getDate);

window.addEventListener('DOMContentLoaded', removeTrip);