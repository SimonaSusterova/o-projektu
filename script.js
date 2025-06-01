
//rotace kostky
  const iceImage = document.querySelector('.ice');

  setInterval(() => {
    iceImage.classList.add('rotate-once');

  
    setTimeout(() => {
      iceImage.classList.remove('rotate-once');
    }, 1000); 
  }, 5000);
  
