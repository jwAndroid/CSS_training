const count = document.querySelector('h2');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
// 아이디가 클래스로 되어있다면 '.minus' 점을 붙여서 연결해준다.

// plus.innerHTML = 200;
// minus.innerHTML = 300;
// count.innerHTML = 100;

plus.addEventListener('click', () => {
  const value = parseInt(count.innerHTML);
  count.innerHTML = value + 1;
});

minus.addEventListener('click', () => {
  const value = parseInt(count.innerHTML);
  count.innerHTML = value - 1;
});
