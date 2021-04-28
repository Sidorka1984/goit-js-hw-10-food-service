import template from '../templates/templates.hbs';
import menuElement from '../menu.json';
const menu = document.querySelector('.js-menu');
menu.insertAdjacentHTML('beforeend', template(menuElement));