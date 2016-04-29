// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

PokemonApp.Pokemon = function (pokemonUri) {  //class setup
	this.id = PokemonApp.Pokemon.idFromUri(pokemonUri);
};


PokemonApp.Pokemon.prototype.render = function () {  //prototype setup for class
	console.log("Rendering pokemon: #" + this.id); //console.log to check wiring

	var self = this;

	$.ajax({
		url: '/api/pokemon/' + this.id,
		success: function (response) {	
			self.info=response;

			// console.log("Pokemon name: " + self.info.name);
			// console.log("Pokemon number: " + self.info.pkdx_id);
			// console.log("Pokemon height: " + self.info.height);
			// console.log("Pokemon weight: " + self.info.weight);

			console.log("Pokemon info:");
			//console.log(self.info);
			//console.log(self.info.descriptions);


			$('.js-pkmn-name').text(self.info.name);
			$('.js-pkmn-number').text(self.info.pkdx_id);
			$('.js-pkmn-height').text(self.info.height);
			$('.js-pkmn-weight').text(self.info.weight);
			$('.js-pkmn-hp').text(self.info.hp);
			$('.js-pkmn-atk').text(self.info.attack);
			$('.js-pkmn-dfs').text(self.info.defense);
			pkmnImage(self.info);
			pkmnDescription(self.info);

			$('.js-pokemon-modal').modal('show');  //show modal
		},

		error: function (error){
			console.log("womp womp");
			console.log(error.responseJSON);
		}
	})
};

// ---------------------------------------------------------


PokemonApp.Pokemon.idFromUri = function (pokemonUri) {
	var uriSegments = pokemonUri.split("/");
	var secondLast = uriSegments.length - 2;
	return uriSegments[secondLast];
}

// ---------------------------------------------------------

$(document).on('ready', function() {

	$('.js-show-pokemon').on('click', function (event) {
		var $button = $(event.currentTarget);
		var pokemonUri = $button.data('pokemon-uri');

		var pokemon = new PokemonApp.Pokemon(pokemonUri);  //instance of the component class for the one pokemon that was just clicked and render it
		pokemon.render();
	});
});