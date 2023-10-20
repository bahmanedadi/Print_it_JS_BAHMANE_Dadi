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

/* définition des constantes */

let index = 0;
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const lastSlide = slides.length - 1;
const imageSlide = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const baseUrl = "./assets/images/slideshow/";


/*Ajout des bullet points sur la partie basse du slider.*/

for (let i = 0; i < slides.length; i++) {
	
	const nouveauDiv = document.createElement("div");
	nouveauDiv.className = "dot";
	document.querySelector(".dots").appendChild(nouveauDiv);
}

/* recuperer tous les elements dots et appliquerla classe dot_selected */
const allDots = document.querySelectorAll(".dot");

function updateSlide(direction) {
	allDots[index].classList.remove("dot_selected");

	if (direction === "gauche") {
		if (index === 0) {
			index = lastSlide;
		} else {
			index --;
		}

	} else if (direction === "droite") {
		if (index === lastSlide) {
			index = 0;
		} else {
			index ++;
		}
	}

	allDots[index].classList.add("dot_selected");
	imageSlide.src = baseUrl + slides[index].image;
	tagLine.innerHTML = slides[index].tagLine;
}

leftArrow.addEventListener("click", function () {
	updateSlide("gauche");
});

rightArrow.addEventListener("click", function () {
	updateSlide("droite");
});
