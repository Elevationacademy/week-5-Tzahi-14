import {countries} from './countries.js';
import css from './style.css';

// import { myCountries } from './countries';

countries.forEach(e => {
    $("body").append(`<div>${e}</div>`)
});