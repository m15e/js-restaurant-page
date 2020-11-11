import { helpr } from './helpers.js'

const loadAbout = () => {
  const display = document.querySelector('.display')
  display.setAttribute('class', 'display menu-display')
  display.innerHTML = ''

  const topRow = helpr.classyDiv('row')
  const aboutTop = helpr.classyDiv('about-top content-box')
  const aboutTopTitle = helpr.textEl('h3', 'About')
  const aboutTopText = helpr.textEl('p',
    'A family owned bistro that has been run by Alberto Pinotti\'s descendents for nearly 9 generations.<br> We serve simple bistro classics made from the finest ingredients.')

  helpr.addChildren(aboutTop, [aboutTopTitle, aboutTopText])

  topRow.appendChild(aboutTop)
  display.appendChild(topRow)
}

export { loadAbout }