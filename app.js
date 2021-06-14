const item = document.querySelector(".item");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

function dragstart(event) {
  setTimeout(() => event.target.classList.add("hide"), 0);
  console.log("dragstart");
}
function dragend(event) {
  event.target.classList.remove("hide");
  console.log(event.target);
}

const blocks = document.querySelectorAll(".blocks");

blocks.forEach((block) => {
  block.addEventListener("dragenter", (e) => e.target.classList.add("hovered"));
  block.addEventListener("dragover", (e) => e.preventDefault());
  block.addEventListener("drop", (e) => e.target.append(item));
  block.addEventListener("dragleave", (e) =>
    e.target.classList.remove("hovered")
  );
});
