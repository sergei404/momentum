const todoList = document.querySelector(".todo-list");
const input = document.getElementById("todo");
const span = document.getElementById("todo-error");
const btn = document.getElementById("btn-delete");

const createTodo = (item) => {
  return `<li class="todo-item" data-key={item.id}>
      <input type="checkbox">
      <h4 class="todo-item__title">${item.name}</h4>
      <button class="todo-item__btn" data-key={item.id}>❌</button>
</li>`;
};

input.addEventListener("keypress", (evt) => {
  const isEnterKey = evt.key.toLowerCase() === "enter";
  if (!evt.target.value.trim() && isEnterKey) {
    span.textContent = "Пустое значение, введите что то...";
    return;
  }
  span.textContent = "";
  if (isEnterKey) {
    todoList.insertAdjacentHTML(
      "beforeend",
      createTodo({
        id: Math.random().toString().slice(2),
        name: evt.target.value,
      })
    );
    evt.target.value = "";
  }
});

todoList.addEventListener("click", (evt) => {
  if (evt.target instanceof HTMLButtonElement) {
    evt.target.parentElement.remove();
  }
});

btn.addEventListener("click", () => {
  [...todoList.children].forEach((el) => {
    if (el.children[0].checked) {
      el.remove();
    }
  });
});
