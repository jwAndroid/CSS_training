const loading = async () => {
  const results = JSON.parse(localStorage.getItem('results'));

  console.log(results);

  // Thread sleep 이랑 똑같음.

  setTimeout(() => {
    location.href = 'result.html';
  }, 1000);

};

loading();
