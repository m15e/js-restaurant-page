import { helpr } from './helpers';

const loadContact = () => {
  const display = document.querySelector('.display');
  display.setAttribute('class', 'display menu-display');
  display.innerHTML = '';

  const topRow = helpr.classyDiv('row');
  const contactTop = helpr.classyDiv('contact-top content-box');
  const contactTopTitle = helpr.textEl('h3', 'Contact');
  const contactTopText = helpr.textEl('p',
    'For Reservations please call +82 912 29 11, it is advisable to reseve at least 1-3 days in advance.');

  helpr.addChildren(contactTop, [contactTopTitle, contactTopText]);

  helpr.addChildren(topRow, [contactTop]);

  const bottomRow = helpr.classyDiv('row');

  const address = helpr.classyDiv('is-half address content-box');
  const addressTitle = helpr.textEl('h4', 'Address');
  const addressText = helpr.textEl('p',
    '12 Acacia Street<br>San Domingo Valley<br>12011 Playa City<br>Palau');

  helpr.addChildren(address, [addressTitle, addressText]);

  helpr.addChildren(bottomRow, [address]);

  helpr.addChildren(display, [topRow, bottomRow]);
};

export { loadContact };