if (window.PokemonApp === undefined) { //creating an object called PokemonApp.Everything that happens will take place here
	window.PokemonApp = {};
}

PokemonApp.init = function () {  //code that happens in every page in this function
	console.log("Pokemon App ONLINE!");
};

$(document).on("ready", function () {  //once the page is done loading this stuff will kick off
	//3rd party setup code here.  Selectors go here, button clicks, etc
	PokemonApp.init();
});