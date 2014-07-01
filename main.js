// Create the base gamesList array
var gamesList = [];

// Push in a couple preliminary items
gamesList.push({
	title: 'Braid',
	description: 'Like mario with time manipulation.'
})

gamesList.push({
	title: 'Donkey Kong',
	description: 'Like mario with a gorilla'
})

// Utility functions

/**
 * This should clear current view and and update with the gamesList items
 */
var renderList = function(){
	// Empty any items from view
	$('#games-ul').empty();

	//Loop through and render each game
	for (var i = 0; i < gamesList.length; i++) {
		// Create a new DOM list element
		var newListItem = $('<li>');
		// Append an h4 with the current game's title
		newListItem.append('<h4>'+ gamesList[i].title + '</h4>')
		// Append a <p> with current game's description
		newListItem.append(
			'<p>' + gamesList[i].description + '<p>'
		)

		// Now add this item to the list
		newListItem.appendTo('#games-ul');
	};

}

// Wait for jQ to be ready...
$(document).on('ready', function() {
  
	// Kick off the rendering of preset list
	renderList();


});