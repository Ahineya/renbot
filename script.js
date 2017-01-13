var phrases = ["Писюн",
"Сюка",
"Да неужели",
"Не гони",
"Да ладно",
"Спасибо",
":3",
"Хех",
"Хе-хе",
"Вот это хохотач",
"Да?",
"Ого",
"Я пытаюсь общаться"];

function getPhrase() {
    return phrases[Math.floor(Math.random() * 12)];
}

function sendKeyMessage(e) {
    if (e.keyCode === 13) {
        sendMessage();
    }
}

function sendMessage() {
    var input = document.querySelector("input");
    var message = input.value;

    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = "<strong>Вы:</strong> " + message;

    var renMessageElement = document.createElement("div");
    renMessageElement.classList.add("message");
    renMessageElement.innerHTML = "<strong>Рен Газар:</strong> " + getPhrase();

    var chat = document.querySelector(".chat");
    chat.appendChild(messageElement);
    chat.appendChild(renMessageElement);
    chat.scrollTo(0, chat.scrollHeight);
    input.value = "";

}

window.onload = function() {
    document.querySelector("input").focus();
    document.querySelector(".send").addEventListener("click", sendMessage);
    document.querySelector("input").addEventListener("keydown", sendKeyMessage);
}