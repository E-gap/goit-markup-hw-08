/* //console.log(document);

const body = document.body;
//console.log(body); 

const list = body.firstElementChild;
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

const listItems = list.children;
console.log(listItems);  */

/* const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
console.log(listWithId); */

/* const listWithClass = document.querySelector('.menu');
console.log(listWithClass); */

//const menuItemsByTagName = document.querySelectorAll("li");
//console.log(menuItemsByTagName);

//const menuItemsByClass = document.querySelectorAll(".menu-item");
//console.log(menuItemsByClass);

//const firstMenuItem = document.querySelector(".menu-item");
//firstMenuItem.style.color = 'tomato';
//console.log(firstMenuItem);



//const message = document.querySelector("#message");
//console.log(message.value); // Default textarea message

//===================================================
//const activeLink = document.querySelector(".btn.active");
//console.log(activeLink.href); // https://s.codepen.io/about

//===================================================
/* const image = document.querySelector(".image");
console.log(image.src); // https://placeimg.com/640/480/animals
image.src = 'https://placeimg.com/640/480/tech';
console.log(image.src); */

/* const image = document.querySelector(".image");

console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

console.log(image.hasAttribute("src")); // true

console.log(image.getAttribute("alt")); // "Lake and clouds"

image.setAttribute("alt", "Amazing nature");

console.log(image.getAttribute("alt")); // Amazing nature */

/* const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

console.log(saveBtn.dataset.action); //save
console.log(closeBtn.dataset.action); //close */

/* const dishes = document.querySelectorAll(".dishes > li");
dishes.forEach((dish) => {
  console.log(dish.dataset.id);
}); */

/* const heading = document.createElement("h1");
console.log(heading); // <h1></h1>

heading.textContent = "This is a heading";
console.log(heading); // <h1>This is a heading</h1>

const image = document.createElement("img");
image.src = "https://placeimg.com/640/480/nature";
image.alt = "Nature";
console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

const diiv = document.createElement("div");
console.log(diiv); */

/* const list = document.querySelector(".usernames");

// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list.prepend(firstItem);

// Adds a title before the list
const title = document.createElement("h2");
title.textContent = "USERNAMES";
list.before(title);

// Adds a paragraph after the list
const text = document.createElement("p");
text.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
list.after(text); */

//const article = document.querySelector(".article");
//console.log(article.innerHTML);

//const title = document.querySelector(".article .title");
//console.log(title.innerHTML);

//const text = document.querySelector(".article .text");
//console.log(text.innerHTML);

//const link = document.querySelector(".article .link");
//console.log(link.innerHTML);

/* 
const singleBtn = document.querySelector("#single");

const handleClick = () => {
  console.log("click event listener callback");
};

singleBtn.addEventListener("click", handleClick);

// ===============================================
const multiBtn = document.querySelector("#multiple");

const firstCallback = () => {
  console.log("First callback!");
};
const secondCallback = () => {
  console.log("Second callback!");
};
const thirdCallback = () => {
  console.log("Third callback!");
};

multiBtn.addEventListener("click", firstCallback);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", thirdCallback); */

{/* <button class="btn" data-action="add">Add Listener</button>
<button class="btn" data-action="remove">Remove Listener</button>
<hr>
<button id="btn" class="btn">Click me</button> */}
/* 
const addListenerBtn = document.querySelector('[data-action="add"]');
const removeListenerBtn = document.querySelector('[data-action="remove"]');
const btn = document.querySelector("#btn");

const handleClick = () => {
  console.log("click event listener callback");
};

addListenerBtn.addEventListener("click", () => {
  btn.addEventListener("click", handleClick);
  console.log("click event listener was added to btn");
});

removeListenerBtn.addEventListener("click", () => {
  btn.removeEventListener("click", handleClick);
  console.log("click event listener was removed from btn");
}); */

/* const button = document.querySelector(".btn");

const handleClick = (event) => {
  console.log("event: ", event);
  console.log("event type: ", event.type);
  console.log("currentTarget: ", event.currentTarget);
};

button.addEventListener("click", handleClick); */

/* const form = document.querySelector(".register-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { username, password }
  } = event.currentTarget;
  console.log(username.value, password.value);
}); */

/* document.addEventListener("keydown", event => {
  console.log("Keydown: ", event);
});

document.addEventListener("keyup", event => {
  console.log("Keyup: ", event);
}); */

/* document.addEventListener("keydown", event => {
  console.log("key: ", event.key);
  console.log("code: ", event.code);
}); */

/* const clearLogBtn = document.querySelector('[data-action="clear"]');
const logList = document.querySelector(".log-list");
let keypressCounter = 1;

document.addEventListener("keydown", logMessage);
document.addEventListener("keyup", logMessage);
clearLogBtn.addEventListener("click", reset);

function logMessage({ type, key, code }) {
  const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>Event</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

  logList.insertAdjacentHTML("afterbegin", markup);

  if (type === "keyup") {
    incrementKeypressCounter();
  }
}

function reset() {
  keypressCounter = 1;
  logList.innerHTML = "";
}

function incrementKeypressCounter() {
  keypressCounter += 1;
} */

/* document.addEventListener("keydown", event => {
  event.preventDefault();

  if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
    console.log("«Ctrl + s» or «Command + s» combo");
  }
}); */

/* const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { login, password }
  } = event.currentTarget;

  if (login.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  event.currentTarget.reset();
} */

const button = document.querySelector(".btn");

const handleClick = (event) => {
  console.log("event: ", event);
  console.log("event type: ", event.type);
  console.log("currentTarget: ", event.currentTarget);
};

button.addEventListener("click", handleClick);