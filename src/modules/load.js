const initPage = () => {
  const contentDiv = document.querySelector('#content')

  // use JS to add navigation to div#content

  const navTabs = document.createElement('div')
  navTabs.setAttribute('class', 'nav-tabs');
  const navList = document.createElement('ul')

  const addChildren = (parent, items) => {
    items.forEach(el => {
      parent.appendChild(el)
    })
  }

  const addLink = (linkTo) => {
    const li = document.createElement('li')
    const link = document.createElement('a')
    link.setAttribute('class', linkTo)
    link.setAttribute('href', `#${linkTo}`)
    link.innerHTML = `${linkTo}`
    li.appendChild(link)
    return li
  }

  const textEl = (elType, elText) => {
    const res = document.createElement(elType)
    res.innerHTML = elText

    return res
  }

  const classyDiv = (className) => {
    const res = document.createElement('div')
    res.setAttribute('class', className)

    return res
  }

  const menuLink = addLink('menu')
  const aboutLink = addLink('about')
  const reserveLink = addLink('reserve')

  addChildren(navList, [menuLink, aboutLink, reserveLink])

  const logoImg = document.createElement('img')
  logoImg.setAttribute('src', '../src/img/logo.png')

  addChildren(navTabs, [logoImg, navList])

  contentDiv.appendChild(navTabs)

  // use JS to add display-content to div#content

  const display = classyDiv('display')

  const topRow = classyDiv('row')
  const specials = classyDiv('specials')
  const specialsTitle = textEl('h3', 'Fried Chilli Chicken')
  const specialsText = textEl('p', 'More Chicken Flavour.')

  addChildren(specials, [specialsTitle, specialsText])

  topRow.appendChild(specials)


  const bottomRow = classyDiv('row')

  const snacks = classyDiv('is-half snacks')
  const snacksTitle = textEl('h4', 'Snacks')
  const snacksText = textEl('p', 'Snacks sooo goood.')

  addChildren(snacks, [snacksTitle, snacksText])


  const takeOut = classyDiv('is-half take-out')
  const takeOutTitle = textEl('h4', 'Take-out')
  const takeOutText = textEl('p', 'Try our take-out.')

  addChildren(takeOut, [takeOutTitle, takeOutText])
  addChildren(bottomRow, [snacks, takeOut])

  addChildren(display, [topRow, bottomRow])


  contentDiv.appendChild(display)

}

export { initPage };