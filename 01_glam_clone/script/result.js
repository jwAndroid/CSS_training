const resultContainer = document.querySelector(".result-container");
const point = document.querySelector(".contents");

const resultPoints = 0;

const button = document.querySelector(".button");
button.addEventListener("click", () => {
  location.href = "index.html";
});

const resultPoint = () => {
  const resultData = localStorage.getItem("results");
  const results = JSON.parse(resultData);

  console.log(results);

  resultContainer.innerHTML = results;
  point.innerHTML = resultPoints + "점";
};

resultPoint();
