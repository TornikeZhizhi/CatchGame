

var catchBox = document.getElementById('catchBox');
var svg = document.querySelector("#catchBox svg")
var fruit = document.getElementById('fruit');





var windowWidht = window.innerWidth;
var windowHeight = window.innerHeight;

svg.style.height = window.innerHeight / 2.5

var catchBoxWidth = catchBox.clientWidth
var catchBoxHeight = catchBox.clientHeight

var offsetTop = catchBox.offsetTop


var moveDown = 0;
var LeftPoz = Math.floor(Math.random() * 95);
fruit.style.left = LeftPoz + '%';



setInterval(function(){


	if (moveDown > offsetTop) {
		if (LeftPoz == y || LeftPoz == y + 1 

			|| LeftPoz == y + 2 || LeftPoz == y + 3
			|| LeftPoz == y + 4 || LeftPoz == y + 5
			|| LeftPoz == y - 1 || LeftPoz == y - 2
			|| LeftPoz == y - 3 || LeftPoz == y - 4
			|| LeftPoz == y - 5
			) {
			
			
		
		}
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