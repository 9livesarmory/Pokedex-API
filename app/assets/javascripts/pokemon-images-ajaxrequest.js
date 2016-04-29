//function for ajax call to get pokemon images



function pkmnImage(pokemonObject) {  //function to get pkmn images per id
	imageUrlResult = pokemonObject.sprites[0].resource_uri; //gets partial image url from object
	console.log(imageUrlResult);
	//console.log("wat");

		$.ajax({  //ajax request to http://pokeapi.co + imageUrlResult
				url: "http://pokeapi.co" + imageUrlResult,

				success: function (response) {
					self.imageinfo=response;
					//console.log(self.imageinfo);
					var image = "http://pokeapi.co" + self.imageinfo.image;
					$('.js-pkmn-image').html(`<img src="${image}">`);
				},

				error: function (error) {
					console.log("oops, image error");
					console.log(error.responseJSON);
				}
			});	
		 //you CANT return.  YOU NEED TO USE A CALLBACK SETUP IF YOU WANT TO DO IT THAT WAY 
};


