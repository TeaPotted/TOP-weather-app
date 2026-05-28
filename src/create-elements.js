// function for creating an element
function createElem(elem, cls, textContent) {
  const el = document.createElement(elem);
  // only add a class if cls has a value
  cls ? el.classList.add(cls) : null;
  el.textContent = textContent;
  return el;
}

export { createElem };
