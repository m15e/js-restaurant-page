import { helpr } from './helpers.js'

const initPage = () => {
  const contentDiv = document.querySelector('#content')

  // use JS to add navigation to div#content

  const navTabs = document.createElement('div')
  navTabs.setAttribute('class', 'nav-tabs');
  const navList = document.createElement('ul')

  const addLink = (linkTo) => {
    const li = document.createElement('li')
    const link = document.createElement('a')
    link.setAttribute('class', linkTo)
    link.setAttribute('href', `#${linkTo}`)
    link.innerHTML = `${linkTo}`
    li.appendChild(link)
    return li
  }

  // const helpr.textEl = (elType, elText) => {
  //   const res = document.createElement(elType)
  //   res.innerHTML = elText

  //   return res
  // }

  const classyDiv = (className) => {
    const res = document.createElement('div')
    res.setAttribute('class', className)

    return res
  }

  const menuLink = addLink('menu')
  const aboutLink = addLink('about')
  const reserveLink = addLink('reserve')

  helpr.addChildren(navList, [menuLink, aboutLink, reserveLink])

  const logoImg = document.createElement('img')
  logoImg.setAttribute('src', '../src/img/logo.png')

  helpr.addChildren(navTabs, [logoImg, navList])

  contentDiv.appendChild(navTabs)

  // use JS to add display-content to div#content

  const display = classyDiv('display')

  const topRow = classyDiv('row')
  const specials = classyDiv('specials')
  const specialsTitle = helpr.textEl('h3', 'Fried Chilli Chicken')
  const specialsText = helpr.textEl('p', 'More Chicken Flavour.')

  helpr.addChildren(specials, [specialsTitle, specialsText])

  topRow.appendChild(specials)


  const bottomRow = classyDiv('row')

  const snacks = classyDiv('is-half snacks')
  const snacksTitle = helpr.textEl('h4', 'Snacks')
  const snacksText = helpr.textEl('p', 'Snacks sooo goood.')

  helpr.addChildren(snacks, [snacksTitle, snacksText])


  const takeOut = classyDiv('is-half take-out')
  const takeOutTitle = helpr.textEl('h4', 'Take-out')
  const takeOutText = helpr.textEl('p', 'Try our take-out.')

  helpr.addChildren(takeOut, [takeOutTitle, takeOutText])
  helpr.addChildren(bottomRow, [snacks, takeOut])

  helpr.addChildren(display, [topRow, bottomRow])


  contentDiv.appendChild(display)

}

export { initPage };