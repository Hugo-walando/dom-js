export const createElement = (tagName, attributes = {}) => {
  const element = document.createElement(tagName);
  for (const [attribute, value] of Object.entries(attributes)) {
    element.setAttributs(attribute, value);
  }
  return element;
};
