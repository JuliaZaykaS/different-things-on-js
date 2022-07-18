const items = document.querySelectorAll(".item");
const placeholders = document.querySelectorAll(".placeholder");
let item;

items.forEach((el) => el.addEventListener("dragstart", dragstart));
items.forEach((el) => el.addEventListener("dragend", dragend));
[...placeholders].forEach((el) => {
  el.addEventListener("dragover", dragover);
  el.addEventListener("dragenter", dragenter);
  el.addEventListener("dragleave", dragleave);
  el.addEventListener("drop", drop);
});

function dragstart(e) {
  e.target.classList.add("hold");
  item = e.target;
  setTimeout(() => e.target.classList.add("hide"), 0);
}
function dragend(e) {
  e.target.classList.remove("hold", "hide");
}

function dragover(e) {
  e.preventDefault();
}
function dragenter(e) {
  e.target.classList.add("hovered");
}
function dragleave(e) {
  e.target.classList.remove("hovered");
}
function drop(e) {
  if (e.target.classList.contains("item")) {
    e.target.parentElement.append(item);
  } else e.target.append(item);
  e.target.classList.remove("hovered");
}
