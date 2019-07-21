

var catchBox = document.getElementById('catchBox');
var fruit = document.getElementById('fruit');




var windowWidht = window.innerWidth;
var windowHeight = window.innerHeight;


var catchBoxWidth = catchBox.clientWidth
var catchBoxHeight = catchBox.clientHeight

var offsetTop = catchBox.offsetTop


var moveDown = 0;
var LeftPoz = Math.floor(Math.random() * 95) + '%';
fruit.style.left = LeftPoz + '%';



setInterval(function(){

	if (moveDown > offsetTop) {


	}
	if (Number(LeftPoz) == y ) {
		console.log('aeee')
	}


	



	fruit.style.top = moveDown + 'px';
	fruit.style.left = LeftPoz ;
	moveDown += 10;



},100)


var y;
window.addEventListener('mousemove',function(event){

	var x = Math.floor(event.clientX / windowWidht * 100);
	y =  Math.floor(event.clientX / windowWidht * 100);

	
	catchBox.style.left = x + '%';





	
})