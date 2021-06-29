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

function disableBorderRight(){
  var viewportWidth = $(window).width();
  const bar = $(".bar-decoration");
  if(viewportWidth <= 600){
    console.log("uwu");
    bar.removeClass("w3-border-right");
  }
}

//Esto es como el main de C++ 
$(document).ready(function(){
  toggleMenu();
  disableBorderRight();
});


