var planetBtn = document.getElementById("showPlanets");
var planetCards = document.getElementById("planetHolder");

var planets = [
    {
        name:"Mercury",
        url: ""
    },
    {
        name:"Venus",
        url: ""
    },
    {
        name:"Earth",
        url: ""
    },
    {
        name:"Mars",
        url: ""
    },
    {
        name:"Jupiter",
        url: ""
    },
    {
        name:"Saturn",
        url: ""
    },
    {
        name:"Uranus",
        url: ""
    },
    {
        name:"Neptune",
        url: ""
    }
];

function writeToDom() {
	planetCards.innerHTML = "";
	for (var i = 0; i < planets.length; i++) {
		var planetList = "";
		planetList += `<div class="planetBox", id="planetBox-${i+1}">`;
	  	planetList += `<div class="planetName"> ${planets[i].name} <br>`;
	  	planetList += `</div>`;
		planetCards.innerHTML += planetList;
	}
}
planetBtn.addEventListener("click",writeToDom);