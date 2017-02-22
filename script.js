var planetBtn = document.getElementById("showPlanets");
var planetCards = document.getElementById("planetHolder");


var planets = [
    {
        name:"Mercury",
        url: "https://www.nasa.gov/sites/default/files/mercury_1.jpg"
    },
    {
        name:"Venus",
        url: "http://cdn.nextgov.com/media/img/upload/2014/12/23/122314venusNG/nextgov-medium.jpg"
    },
    {
        name:"Earth",
        url: "https://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg"
    },
    {
        name:"Mars",
        url: "https://www.nasa.gov/sites/default/files/thumbnails/image/mars_2.jpg"
    },
    {
        name:"Jupiter",
        url: "https://www.nasa.gov/sites/default/files/jupiter_1_0.jpg"
    },
    {
        name:"Saturn",
        url: "http://photojournal.jpl.nasa.gov/jpeg/PIA01364.jpg"
    },
    {
        name:"Uranus",
        url: "https://spaceplace.nasa.gov/review/all-about-uranus/uranus2.en.jpg"
    },
    {
        name:"Neptune",
        url: "https://www.nasa.gov/sites/default/files/thumbnails/imageneptune_full.jpg"
    }
];

function writeToDom() {
	planetCards.innerHTML = "";
	for (var i = 0; i < planets.length; i++) {
		var planetList = "";
		planetList += `<div class="planetBox", id="planetBox-${i}">`;
	  	planetList += `<div class="planetName hidden"> ${planets[i].name}`;
	  	planetList += `</div>`;
	  	planetList += `<img class="planetImage" src="${planets[i].url}">`
		planetCards.innerHTML += planetList;
	}
}

function showMeTheMoney(event) {
	if(event.target.className === 'planetImage') {
		console.log("event worked", event);
		console.log("uniqueID", event.target.parentNode.id);
		console.log("text?", event.target.previousSibling); //console the event out
		event.target.previousSibling.classList.remove("hidden");
	}
}

planetBtn.addEventListener("mouseenter", writeToDom);
document.body.addEventListener("click", showMeTheMoney);

//Make planet names disapper
//Make planets disapper (Maybe with a click event?)