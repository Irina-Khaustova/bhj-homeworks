const banner = document.querySelector(".chat-widget__side");
const sendMessage = document.getElementById("chat-widget__input");
const messages = document.querySelector(".chat-widget__messages");
const robotAnswers = [
  'Ответим вам через 10 лет',
  'Все операторы сейчас заняты',
  'Ничем не можем вам помочь',
  'До свидания',
  'Мы ничего не будем вам продавать'
]

banner.onclick = function () {
    document.querySelector(".chat-widget").classList.add("chat-widget_active");
};
let timer;
  

sendMessage.addEventListener("keyup", (e) => {
  //let timer;
  clearInterval(timer);
  timer = setInterval(() => {
    if (document.querySelector(".chat-widget").classList.contains("chat-widget_active")) {
  messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${`${(new Date).getHours()}:${(new Date).getMinutes()}`}</div>
      <div class="message__text">Вы ещё здесь?</div>
    </div>
  `;

  messages.scrollIntoView(false)
    }
   }, 10000)

    console.log(e.key)
  let answer = Math.floor(Math.random () * (robotAnswers.length));
    if (e.key === 'Enter' && sendMessage.value) {
      messages.innerHTML += `
        <div class="message">
          <div class="message__time">${`${(new Date).getHours()}:${(new Date).getMinutes()}`}</div>
          <div class="message__text"> ${sendMessage.value} </div>
        </div>
      `;
      sendMessage.value = '';
      messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${`${(new Date).getHours()}:${(new Date).getMinutes()}`}</div>
          <div class="message__text"> ${robotAnswers[answer]} </div>
        </div>
      `;
      messages.scrollIntoView(false);
    }
})