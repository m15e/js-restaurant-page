const helpr = (() => {
  const addChildren = (parent, items) => {
    items.forEach(el => {
      parent.appendChild(el)
    })
  }

  const textEl = (elType, elText) => {
    const res = document.createElement(elType)
    res.innerHTML = elText

    return res
  }

  return { addChildren, textEl }
})();

export { helpr }