console.log('Hello');
//1. Find the arrow in the header section
//2. Click on the arrow in the header section
$('.arrow-btn').click( function(){
	console.log('click on an arrow?');
//3. Find the section we are trying to move to
//4. Calculate that sections doistance from the top
var introDistance = $('.intro').offset().top;

//console.log(introDistance);

//5. Animate the window down to the distance we calculated
$('html, body').animate({
		scrollTop: introDistance
	});
});