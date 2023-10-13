const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const tagLine = document.querySelector("#banner p");
const imageSlide = document.querySelector(".banner-img");
const baseUrl = "./assets/images/slideshow/";
const lastSlide = slides.length - 1;
const firstSlide = slides.length + 1;


/*Ajout des bullet points sur la partie basse du slider.*/
for (let i = 0; i < 4; i++) {
	/* 1 creation d'une nouvelle div*/
	const nouvelDiv = document.createElement("div");
	/* 2 Ajout de  la classe "dot" à l'élément div */
	nouvelDiv.className = "dot";
	/* 3 Sélection de l'élément avec la classe "dots" et ajout de l'élément div comme enfant */
	document.querySelector(".dots").appendChild(nouvelDiv);
}
let index = 0;

/* recuperer tous les elements dots et appliquerla classe dot_selected */
const allDots = document.querySelectorAll(".dot");
allDots[index].classList.add("dot_selected");

leftArrow.addEventListener("click", function gauche() {
	allDots[index].classList.remove("dot_selected");
	if (index == 0) {
		index = lastSlide;
	}
	else {
		index--;
	}

	allDots[index].classList.add("dot_selected");
	imageSlide.src = baseUrl + slides[index].image;
	tagLine.innerHTML = slides[index].tagLine;
});

rightArrow.addEventListener("click", function droite() {
	allDots[index].classList.remove("dot_selected");
	if (index === lastSlide) {
		index = 0;
	}
	else {
		index++;
	}

	allDots[index].classList.add("dot_selected");
	imageSlide.src = baseUrl + slides[index].image;
	tagLine.innerHTML = slides[index].tagLine;

});
