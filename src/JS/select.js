import countries from '../countries.json';
import Choices from 'choices.js';
const selectCountry = document.querySelector('#selectCountries');

const data = countries
  .map(countries => {
    `<option class="input__option select" value="${countries.countryCode[0]}">${countries.country}</option>`;
    return `<option class="input__option select" value="${countries.countryCode}">${countries.country}</option>`;
  })
  .join('');
selectCountry.insertAdjacentHTML('beforeend', data);

// const element = document.querySelector('.header__form--input1');
// const markup = countries
//   .map(country => `<option value="${country.countryCode}">${country.country}</option>`)
//   .join('');
// element.insertAdjacentHTML('beforeend', markup);
// const choices = new Choices(element, {
//   searchEnabled: true,
// });
