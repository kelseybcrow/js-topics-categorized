import { Rating } from './rating';

const rating1 = new Rating('Barbie movie', 4);
const rating2 = new Rating('Billie Eilish music', 5);

document.getElementById('rating').appendChild(rating1.element);
document.getElementById('rating').appendChild(rating2.element);
