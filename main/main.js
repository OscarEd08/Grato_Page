//Desactiva el menu si se presiona la tecla Escape
function disableMenu(menu, toggle){
  $(document).on('keydown', function(event) {
      if (event.key == "Escape") {
          menu.removeClass("nav-menu_visible");
          toggle.removeClass("clicked");
      }
  });
}
//Es el codigo que tenías en tu js para que el boton toggle funcione, pero alguito más simple
function toggleMenu(){
  const toggle = $(".nav-toggle") 
  const menu = $(".nav-menu");
  toggle.click( () => {
      if(toggle.hasClass("clicked")){
          menu.removeClass("nav-menu_visible");
          toggle.removeClass("clicked");
      }else {
          menu.addClass("nav-menu_visible");
          toggle.addClass("clicked");
          disableMenu(menu,toggle);            }
      }
  )
}

//Esto es como el main de C++ 
$(document).ready(function(){
  toggleMenu();
});

/*//Formulario funcional
const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#trick');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  const form = new FormData(this);
  $buttonMailto.setAttribute('href',`mailto: jj-0808@hotmail.com?subject=nombre ${form.get('name')} correo ${form.get('email')}&body=${form.get('message')}`);
  $buttonMailto.click();
}*/

