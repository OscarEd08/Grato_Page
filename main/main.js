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



function handleMobile(){
  if($(window).width() <= 600){
    $(".bar-decoration").removeClass("w3-border-right");
    $(".bar-decoration").removeClass("w3-section");
    $(".bar-container").removeClass("w3-padding-16");
    $(".frase-home").removeClass("w3-animate-right");
    $(".frase-home").removeClass("w3-xlarge");
    $(".remove-icon").css("display","none");
    $(".about-us").css("padding-right","0px");
    $(".about-us").css("padding-left","0px");
    
  }
}

//Esto es como el main de C++ 
$(document).ready(function(){
  toggleMenu();
  handleMobile();
});


