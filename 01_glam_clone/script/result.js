const resultContainer = document.querySelector(".result-container");
const correctContainer = document.querySelector(".correct-container");
const point = document.querySelector(".contents");

const resultPoints = 0;
const arr = [];
const correctArr = ["1", "2", "3", "4", "5", "6", "7", "8"];

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
  point.innerHTML = resultPoints + "점";

  compareCorrect(correctArr, arr);

  console.log("정답 어레이 " + correctArr);
  console.log("쓴거 " + arr);
};

// const a = ["1", "2", "3", "4", "5"];
// const b = ["2", "4", "5", "7", "8"];

const compareCorrect = (correctArr, arr) => {
  // a.map((x, index) => {
  //   b.map((y, index) => {
  //     if (x[index] == y[index]) {
  //       console.log(`${x[index]}`);
  //     }
  //   });
  // });
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
