const resultContainer = document.querySelector(".result-container");
const correctContainer = document.querySelector(".correct-container");
const point = document.querySelector(".contents");
const message = document.querySelector(".pointMessage");

const resultPoints = 100;
const arr = [];
const correctArr = ["1", "2", "1", "2", "1", "2", "2", "2"];

const button = document.querySelector(".button");
button.addEventListener("click", () => {
  location.href = "index.html";
});

const resultPoint = () => {
  const results = JSON.parse(localStorage.getItem("results"));

  const resultMap = results.map((result) => {
    return arr.push(result.answer);
  });

  resultContainer.innerHTML = arr;
  correctContainer.innerHTML = correctArr;
  point.innerHTML = "점수 : " + resultPoints + " 점";

  if (resultPoints === 0) {
    message.innerHTML = "분발하세요!";
  } else if (resultPoints === 50) {
    message.innerHTML = "50점 이네요.";
  } else if (resultPoints === 100) {
    message.innerHTML = "축하합니다.";
  }

  compareCorrect(correctArr, arr);
};

const compareCorrect = (correctArr, arr) => {
  for (let i = 0; i < correctArr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (correctArr[i] == arr[j]) {
        // console.log(`${a[i]}`);
        console.log(a[i].length);
      }
    }
  }
};

resultPoint();
