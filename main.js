const grid = document.querySelector(".main__flex");
const graph = document.querySelector(".main__graph");

// Create an async function to load the data
async function loadGraphData() {
  try {
    const response = await fetch("data.json");

    const arr = await response.json();
    console.log(arr);
    const maxAmount = Math.max(...arr.map((item) => item.amount));

    const graphElements = document.querySelectorAll(".main__graph");

    // Iteration over the graph elements and setting their heights dynamically
    graphElements.forEach((element, index) => {
      // Calculating the height as a percentage of the max amount
      const heightPercentage = (arr[index].amount / maxAmount) * 100;

      // Setting the height of the element (e.g., max height is 20rem)
      element.style.height = `${(heightPercentage * 20) / 100}rem`;

      //  Adding text showing the amount
      const valueElement = element.querySelector(".main__graph__value");
      if (valueElement) {
        valueElement.textContent = `$${arr[index].amount.toFixed(2)}`;
      }
    });
  } catch (error) {
    // Handle any errors that occur during fetch
    console.error("Error fetching data:", error);
  }
}
loadGraphData();

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
