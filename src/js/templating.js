import meals from '../menu.json';

import menuTemplate from '../templates/menu-items.hbs';

const menuRef = document.querySelector('.js-menu');

const markup = menuTemplate(meals);

menuRef.insertAdjacentHTML('beforeend', markup);
