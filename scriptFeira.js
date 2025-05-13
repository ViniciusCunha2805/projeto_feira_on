function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "close_white_36dp.svg";
    }
}

$("#button").click(function() {
    $('html, body').animate({
      scrollTop: $("#anchor").offset().top
    }, 2000);
  }); 

  $("#button2").click(function() {
    $('html, body').animate({
      scrollTop: $("#anchor2").offset().top
    }, 2000);
  });