const todoList = document.querySelector('.todolist');
const addBtn = document.querySelector('.add-btn');
const inputField = document.querySelector('.input-field');
const delBtn = document.querySelector('.del-btn');

addBtn.addEventListener('click', (e) => {
  let itemValue = inputField.value;
  todoList.innerHTML += `
    <div class="flex justify-between m-2">
        <div>${itemValue}</div>
        <button class="bg-red-500 px-2 py-1 text-white rounded-md del-btn">P</button>
    </div>
  `;
});

delBtn.addEventListener('click', (e) => {
  e.currentTarget.parentNode.remove();
  //   e.currentTarget.parent.remove();
});
