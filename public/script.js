const body = document.body;

const url = "http://localhost:3000/chat";

const messagesBody = document.getElementById("messages");

const fetchData = async () => {
  const response = await fetch(url);
  const messages = await response.json();
  // messagesBody.append(messages.message[0].name);
  const messagesList = messages.message.map((item) => {
    return `<h2 class="name">${item.name}</h2> <p class="message">${item.message}</p>`;
  });
  messagesBody.innerHTML = messagesList;
};
setInterval(() => {
  fetchData();
}, 1000);

let nameHolder = document.getElementById("name");
let message = document.getElementById("message");

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

function submit() {
  postData(url, { name: nameHolder.value, message: message.value }).then(
    (data) => {}
  );
}
