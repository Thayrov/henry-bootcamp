const traverseDomAndCollectElements = (matchFunc, startEl) => {
  let resultSet = [];
  if (typeof startEl === 'undefined') startEl = document.body;
  if (matchFunc(startEl)) resultSet.push(startEl);
  Array.from(startEl.children).forEach(childEl => {
    let childResults = traverseDomAndCollectElements(matchFunc, childEl);
    resultSet = [...resultSet, ...childResults];
  });
  return resultSet;
};

/* const traverseDomAndCollectElements = (matchFunc, startEl) => {
  let resultSet = [];
  if (typeof startEl === 'undefined') {
    startEl = document.body;
    if (matchFunc(startEl)) resultSet.push(startEl);
  }
  let i = startEl.children.length - 1;
  while (i >= 0) {
    let current = startEl.children[i];
    if (matchFunc(current)) resultSet.push(current);
    let childResults = traverseDomAndCollectElements(matchFunc, current);
    resultSet = [...resultSet, ...childResults];
    i--;
  }
  return resultSet;
}; */

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

const selectorTypeMatcher = selector => {
  if (selector.includes('>')) return 'child';
  if (selector.includes(' ')) return 'descendant';
  if (selector.startsWith('#')) return 'id';
  if (selector.startsWith('.')) return 'class';
  if (selector.includes('.')) return 'tag.class';
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parámetro y devuelve true/false dependiendo si el elemento
// matchea el selector.

const matchFunctionMaker = selector => {
  let selectorType = selectorTypeMatcher(selector);
  let matchFunction;

  if (selectorType === 'id') matchFunction = el => el.id === selector.slice(1);

  if (selectorType === 'class') matchFunction = el => el.classList.contains(selector.slice(1));

  if (selectorType === 'tag.class') {
    let parts = selector.split('.');
    matchFunction = el =>
      el.tagName.toLowerCase() === parts[0].toLowerCase() && el.classList.contains(parts[1]);
  }

  if (selectorType === 'tag')
    matchFunction = el => el.tagName.toLowerCase() === selector.toLowerCase();

  if (selectorType === 'child') {
    let parts = selector.split('>').map(s => s.trim());
    matchFunction = el =>
      el.parentElement && $(parts[0]).includes(el.parentElement) && el.matches(parts[1]);
  }

  if (selectorType === 'descendant') {
    let parts = selector.split(' ').map(s => s.trim());
    matchFunction = el => {
      let ancestor = el.parentElement;
      while (ancestor !== null) {
        if (ancestor.matches(parts[0])) return $(parts[1]).includes(el);
        ancestor = ancestor.parentElement;
      }
      return false;
    };
  }

  return matchFunction;
};

const $ = selector => {
  let elements;
  let selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
