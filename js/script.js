
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector('#logo img').style.width = '120px';
      document.querySelector('#logo img').style.height = '60px';
      document.querySelector('#logo img').style.padding = '10px';
      document.querySelector('.header a').style.fontSize = '0px';
  } else {
    document.querySelector('#logo img').style.width = '200px';
    document.querySelector('#logo img').style.height = '100px';
    document.querySelector('#logo img').style.padding = '5px';
    document.querySelector('.header a').style.fontSize = '20px';
  }
}

$(document).ready(function(){
	$('.mobile_header_button').click(function(){
		$(this).toggleClass('mobile_header_button_open');
  	$('.mobile_header').toggleClass('mobile_visible');
  	$('.mobile_menu').toggleClass('mobile_header_visible');
  	$('.mobile_menu a').toggleClass('mobile_menu_visible');
	});
});
