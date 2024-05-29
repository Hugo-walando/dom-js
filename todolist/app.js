import { fetchJSON } from './functions/api.js';
import { createElement } from './functions/dom.js';

const todoList = document.querySelector('.todolist');

try {
  const todos = await fetchJSON(
    'https://jsonplaceholder.typicode.com/todos?_limit=5',
  );
  console.log(todos);
} catch (e) {
  const div = createElement('div', {
    class: 'text-red-500',
  });
  div.innerText = 'Impossible de charger les éléments';
}
