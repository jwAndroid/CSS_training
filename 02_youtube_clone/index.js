const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  //moreBtn을 클릭했을때 class="moreBtn clicked" 로 주겠다.
  title.classList.toggle('clamp');
  //moreBtn을 클릭했을때 class="title clamp" 로 주겠다.
});
