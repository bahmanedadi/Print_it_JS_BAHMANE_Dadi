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

/* ajout d'un event listener gauche*/
leftArrow.addEventListener("click", function gauche() {
	alert("click gauche")
})
/* ajout d'un event listener droite*/
rightArrow.addEventListener("click", function droite() {
	console.log("click droite")
})

/*Ajout des bullet points sur la partie basse du slider.*/
for (let i = 0; i < 4; i++) {
	/* 1 creation d'une nouvelle div*/
	const nouvelDiv = document.createElement("div");
	/* 2 Ajout de  la classe "dot" à l'élément div */
	nouvelDiv.className = "dot";
	/* 3 Sélection de l'élément avec la classe "dots" et ajout de l'élément div comme enfant */
	document.querySelector(".dots").appendChild(nouvelDiv);
}



