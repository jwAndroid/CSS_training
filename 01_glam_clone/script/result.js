const button = document.querySelector(".button");
button.addEventListener("click", () => {
  location.href = "index.html";
});

const resultPoint = () => {
  const results = JSON.parse(localStorage.getItem("results"));

  console.log(results);
};

resultPoint();
