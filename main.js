

var catchBox = document.getElementById('catchBox');
var svg = document.querySelector("#catchBox svg")
var fruit = document.getElementById('fruit');





var windowWidht = window.innerWidth;
var windowHeight = window.innerHeight;

svg.style.height = window.innerHeight / 2.5

var catchBoxWidth = catchBox.clientWidth
var catchBoxHeight = catchBox.clientHeight

var offsetTop = catchBox.offsetTop


var moveDown = -120;
var LeftPoz = Math.floor(Math.random() * 95);
var LeftPoz2 = Math.floor(Math.random() * 95);
fruit.style.left = LeftPoz + '%';


var Cocktail = 83;

setInterval(function(){

	
	if (moveDown > offsetTop && moveDown < offsetTop + 50) {
		if (LeftPoz == y || LeftPoz == y + 1 

			|| LeftPoz == y + 2 || LeftPoz == y + 3
			|| LeftPoz == y + 4 
			|| LeftPoz == y - 1 || LeftPoz == y - 2
			|| LeftPoz == y - 3 || LeftPoz == y - 4
		
			) {
			audio.play()
			document.getElementsByClassName('bottle-fill')[0].style.y = Cocktail + 'px';	
			Cocktail -= 5;
			fruit.style.display = 'none';
				 moveDown = -100;
				fruit.style.top = LeftPoz + '-50px';

			setTimeout (function(){
				LeftPoz = Math.floor(Math.random() * 95);
				LeftPoz2 = Math.floor(Math.random() * 95);
		
				fruit.style.display = 'block';
			},300)
			return;
		
		}
	}

	if (moveDown > offsetTop + 20) {
		fruit.style.display = 'none';
				 moveDown = 0;

				 setTimeout (function(){
				LeftPoz = Math.floor(Math.random() * 95);
				LeftPoz2 = Math.floor(Math.random() * 95);
		
				fruit.style.display = 'block';
			},300)
	}

	

	
	



	fruit.style.top = moveDown + 'px';
	fruit.style.left = LeftPoz + '%';
	moveDown += 10;



},100)


var y;
window.addEventListener('mousemove',function(event){

	var x = Math.floor(event.clientX / windowWidht * 100);
	y =  Math.floor(event.clientX / windowWidht * 100);

	console.log()
	catchBox.style.left = x + '%';





	
})



var audio = new Audio("img/Pouring.mp3" );