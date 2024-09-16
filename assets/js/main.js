let aud = document.getElementById('audio'); // Elemento de audio
  let toggleButton = document.getElementById('sonido'); // Elemento que dispara el sonido

  function play() {
    aud.play(); // Reproduce el audio
  }
  
  // Añade el event listener al div con el id 'sonido'
  toggleButton.addEventListener('click', () => {
    play(); // Ejecuta la función play() al hacer clic
  });

  let btn = document.getElementById('btn');


  btn.addEventListener('click', () => {
   btn.classList.add('hinge animated')
  })
