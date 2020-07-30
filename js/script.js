//burger
const btnBurger = document.getElementById('hamburger');

btnBurger.addEventListener('click', function() {
	if (document.body.classList.contains("hamburger-active")) {
		closeBurger ();
	} else {
		openBurger ();
	}
})

function closeBurger () {
	document.body.classList.remove('hamburger-active');
}

function openBurger () {
	document.body.classList.add('hamburger-active');
}
//End burger


let elements = $('.modal-overlay, .modal');

$('.open-modal').click(function(){
	elements.addClass('active');
});

$('.close-modal').click(function(){
	elements.removeClass('active');
});
$(document).click(function (e) {
	if ($(e.target).is('.modal-overlay, .modal')) {
		elements.removeClass('active');
	}
});

let elements2 = $('.modal-overlay2, .modal2');

$('.open-modal2').click(function(){
	elements2.addClass('active');
});

$('.close-modal2').click(function(){
	elements2.removeClass('active');
});
$(document).click(function (e) {
	if ($(e.target).is('.modal-overlay2, .modal2')) {
		elements2.removeClass('active');
	}
});


