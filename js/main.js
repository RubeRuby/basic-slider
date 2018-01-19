var sliderImages =
	[
		{
			text: 'This is the first image',
			image: 'img/home1.jpg',
		},
		{
			text: 'This is the second image',
			image: 'img/home2.jpg',
		},
		{
			text: 'This is the third image',
			image: 'img/home3.jpg',
		},
		{
			text: 'This is the fourth image',
			image: 'img/home4.jpg',
		}
	];

var counter = -1;

(function(){
	var divs = document.getElementsByClassName('slider-div');
	var next = document.getElementsByClassName('arrow-right')[0];
	var previous = document.getElementsByClassName('arrow-left')[0];

	for(var x = 0; x < divs.length; x++) {
		divs[x].style.backgroundImage = 'url('+ sliderImages[x].image +')';
		if(divs[x].childNodes[1].tagName === 'DIV') {
			divs[x].childNodes[1].childNodes[1].innerHTML = sliderImages[x].text;
		}
		counter++;
	}

	next.addEventListener("mouseover", function(){
		next.style.opacity = 1;
	});

	next.addEventListener("mouseout", function(){
		next.style.opacity = 0;
	});

	previous.addEventListener("mouseover", function(){
		previous.style.opacity = 1;
	});

	previous.addEventListener("mouseout", function(){
		previous.style.opacity = 0;
	});

	next.addEventListener("click", function(){
		nextSlide();
	});

	previous.addEventListener("click", function(){
		previousSlide();
	});
})();

var left = document.getElementsByClassName('left-image')[0];
var middle = document.getElementsByClassName('middle-image')[0];
var right = document.getElementsByClassName('right-image')[0];

function nextSlide() {
	counter++;

	left.style.backgroundImage = middle.style.backgroundImage;
	middle.style.backgroundImage = right.style.backgroundImage;
	middle.childNodes[1].childNodes[1].innerHTML = sliderImages[counter-1].text;

	if(counter > sliderImages.length-1) {
		counter = 0;
	}
	right.style.backgroundImage = 'url('+ sliderImages[counter].image +')';
}

function previousSlide() {
	counter--;

	right.style.backgroundImage = middle.style.backgroundImage;
	middle.style.backgroundImage = left.style.backgroundImage;
	middle.childNodes[1].childNodes[1].innerHTML = sliderImages[counter+1].text;

	if(counter < 0) {
		counter = sliderImages.length-1;
	}
	left.style.backgroundImage = 'url('+ sliderImages[counter].image +')';
}