const number = document.querySelector('.number');
const questionContainer = document.querySelector('.question-container');
const answerContainer = document.querySelector('.answer-container');
const counter = document.querySelector('.counter');
const progress = document.querySelector('.progress div');

const results = [];
let index = 0;

localStorage.removeItem('results');

number.innerHTML = `Q${index + 1}`;
counter.innerHTML = `${index + 1} / ${data.length}`;
progress.style.width = `${((index + 1) * 100) / data.length}%`;

const updateQuestion = () => {
  questionContainer.innerHTML = '';

  data[index].questions.forEach((question) => {
    const div = document.createElement('div');
    div.innerHTML = question;

    questionContainer.appendChild(div);
  });
};

const updateAnswer = () => {
  answerContainer.innerHTML = '';

  data[index].answers.forEach((answer, answerIndex) => {
    const div =  document.createElement('div');
    div.innerHTML = answer;

    div.addEventListener('click', () => {
      results.push({ index: answerIndex, answer });

      if (index < data.length - 1) {
        index = index + 1;

        number.innerHTML = `Q${index + 1}`;
        counter.innerHTML = `${index + 1} / ${data.length}`;
        progress.style.width = `${((index + 1) * 100) / data.length}%`;

        updateQuestion();
        updateAnswer();
        console.log('값은?' , '값은???????')
        
      } else {
        localStorage.setItem('results', JSON.stringify(results));
        location.href = 'loading.html'; // production
        console.log('값은?' , '값은???????')
      }
    });

    answerContainer.appendChild(div);
  });
};

updateQuestion();
updateAnswer();
