const grid = document.querySelector(".main__grid");
const graph = document.querySelector(".main__graph");

function hiddenEl(e) {
  e.preventDefault();
  const clicked = e.target;

  const graph = clicked.closest(".main__graph");

  if (!graph) return;

  const graphValue = graph.querySelector(".main__graph__value");

  if (graphValue) {
    graphValue.classList.toggle("hidden");
  }
}

grid.addEventListener("mouseover", function (e) {
  hiddenEl(e);
});

grid.addEventListener("mouseout", function (e) {
  hiddenEl(e);
});
