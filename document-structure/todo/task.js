const tasksList = document.querySelector(".tasks__list");
const inputMessage = document.querySelector(".tasks__input");
const form = document.querySelector(".tasks__control");
const addButton = document.querySelector(".tasks__add");

let creating = function () {

  if (inputMessage.value) {
    let newMessage = document.createElement('div');
    newMessage.classList.add("task");
    newMessage.innerHTML = `<div class="task__title">${inputMessage.value}</div>
    <a href="#" class="task__remove">&times;</a>
    </div>`

  tasksList.appendChild(newMessage);

  newMessage.querySelector(".task__remove").addEventListener("click", (e) => {
    newMessage.remove();
  }); 
  };
}

let creatingMessage = function (e) {
    
    if (e.key === 'Enter') {
      creating;
    };
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

inputMessage.addEventListener("keyup", creatingMessage);
addButton.addEventListener("click", creating);

