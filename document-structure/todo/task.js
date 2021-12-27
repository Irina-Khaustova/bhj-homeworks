const tasksList = document.querySelector(".tasks__list");
const inputMessage = document.querySelector(".tasks__input");

let creatingMessage = function (e) {
    console.log(inputMessage.value)
    
    if (e.key === 'Enter' && inputMessage.value) {

  let newMessage = document.createElement('div');
  newMessage.classList.add("task");
  console.log(newMessage)
  newMessage.innerHTML = `<div class="task__title">${inputMessage.value}</div>
<a href="#" class="task__remove">&times;</a>
</div>`


//tasksList.innerHTML += newMessage;
body.appendChild(newMessage);

}
}
inputMessage.addEventListener("keyup", creatingMessage);
console.log(tasksList)
