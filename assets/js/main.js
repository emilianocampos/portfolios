let aud = document.getElementById('audio'); // Elemento de audio
  let toggleButton = document.getElementById('sonido'); // Elemento que dispara el sonido
let submit = document.getElementById('submit');

function onAlert() {
  // const Toast = Swal.mixin({
  //   toast: true,
  //   position: "top-end",
  //   showConfirmButton: false,
  //   timer: 3000,
  //   timerProgressBar: true,
  //   didOpen: (toast) => {
  //     toast.onmouseenter = Swal.stopTimer;
  //     toast.onmouseleave = Swal.resumeTimer;
  //   }
  // });
  // Toast.fire({
  //   icon: "success",
  //   title: "Signed in successfully"
  // });
alert('mesn')
}
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

  submit.addEventListener('click', () =>{alert('sad')})