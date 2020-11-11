import { helpr } from './helpers.js'

const loadMenu = () => {
  const display = document.querySelector('.display')
  display.setAttribute('class', 'display menu-display')
  display.innerHTML = '';
  console.log('menu')

  const topRow = helpr.classyDiv('row')
  const menuTop = helpr.classyDiv('menu-top content-box')
  const menuTopTitle = helpr.textEl('h3', 'Menu')
  const menuTopText = helpr.textEl('p',
    'Tomato Soup<br>Steak Frites<br>Pizza Mozerella<br>Spaghetti Carbonara')

  helpr.addChildren(menuTop, [menuTopTitle, menuTopText])
  topRow.appendChild(menuTop)

  const bottomRow = helpr.classyDiv('row')

  const chefs = helpr.classyDiv('is-half chefs content-box')
  const chefsTitle = helpr.textEl('h4', 'Chef\'s special')
  const chefsText = helpr.textEl('p',
    'Ravioli a la Buffetta<br>Prociutto Vongole<br>Salmon Galette<br>Ratatouille')

  helpr.addChildren(chefs, [chefsTitle, chefsText])

  const kids = helpr.classyDiv('is-half kids content-box')
  const kidsTitle = helpr.textEl('h4', 'Kid\'s Menu')
  const kidsText = helpr.textEl('p',
    'Hot Dog<br>Speghetti Bolognese<br>Sliders<br>Ice Cream')

  helpr.addChildren(kids, [kidsTitle, kidsText])
  helpr.addChildren(bottomRow, [chefs, kids])



  helpr.addChildren(display, [topRow, bottomRow])

}

export { loadMenu }