/* const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", () => {
  alert("Parent click handler");
});

child.addEventListener("click", () => {
  alert("Child click handler");
});

descendant.addEventListener("click", () => {
  alert("Descendant click handler");
}); */

/* const parent = document.querySelector("#parent");

parent.addEventListener("click", (event) => {
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
}); */


/* const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", () => {
  alert(
    "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
  );
});

child.addEventListener("click", () => {
  alert(
    "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
  );
});

descendant.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("Descendant click handler");
}); */



/* const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
} */

// Some helper functions to render palette items
/* createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRangomColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
    return Math.round(Math.random() * 256)
        .toString(16)
        .padStart(2, "0");
} */

/* const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");


createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRangomColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}

colorPalette.addEventListener("click", selectColor);

function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
} */

/* const result = _.add(2, 3);
console.log(result); // 5 */


/* console.log(localStorage);

localStorage.setItem('avto', "bmw");

console.log(localStorage.getItem('avto')); */