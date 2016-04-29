
function pkmnDescription (pokemonObject) {
	console.log(pokemonObject);
	console.log(pokemonObject.descriptions);  //tests
	console.log(pokemonObject.descriptions[0].resource_uri); //tests

		pokemonObject.descriptions.forEach(function (descriptionObject) {
			var cropped = descriptionObject.resource_uri.substring(20);
			console.log(cropped); //test
			var finalCropped = cropped.split('/');
			console.log(finalCropped);
	});
};