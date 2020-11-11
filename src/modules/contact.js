import { helpr } from './helpers.js'

const loadContact = () => {
  const display = document.querySelector('.display')
  display.setAttribute('class', 'display menu-display')
  display.innerHTML = '';

  const topRow = helpr.classyDiv('row')
  const contactTop = helpr.classyDiv('contact-top content-box')
  const contactTopTitle = helpr.textEl('h3', 'Contact')
  const contactTopText = helpr.textEl('p',
    'For Reservations please call +82 912 29 11, it is advisable to reseve at least 1-3 days in advance.')

  helpr.addChildren(contactTop, [contactTopTitle, contactTopText])

  helpr.addChildren(topRow, [contactTop])

  const bottomRow = helpr.classyDiv('row')




  helpr.addChildren(display, [topRow, bottomRow])
}

export { loadContact }