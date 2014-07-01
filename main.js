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

		// Create actions container
		var actionsContainer = $('<span class="actions">');
		// Append the actions container to the list item
		actionsContainer.appendTo(newListItem)

		// Add the delete action button
		actionsContainer.append(
			'<button class="delete">Delete</button>'
		)

		// Now add this item to the list
		newListItem.appendTo('#games-ul');

		// Attach the new display object to current game object in array
		gamesList[i].display = newListItem;

		// Attach vew to list (uses an object literal that jQ attaches to DOM elements)
		newListItem.data('listIndex', i);
	};

}

	// Cache input selectors
	var titleField = $(this).find('[name=title]')
	var descriptionField = $(this).find('[name=description')

// Handle new game submissions via form
var newGameSubmit = function(e) {
	// prevent form from submitting which allows us to handle the functionality with JS
	e.preventDefault();



	// Grab the game title
	var gameTitle = $(this).find('[name=title]').val()

	// Grab game description
	var gameDescription = $(this).find('[name=description]').val()

	// Create a new game object
	var newGameItem = {
		title: gameTitle,
		description: gameDescription
	}

	// ... and push the item to the global list
	gamesList.push(newGameItem)

	// After we update the list, re-render it
	renderList();
}

	// Remove a game from the ul and form the list
	var deleteGame = function (e){
		// Find the closest (going up the DOM) <li> to the delete button that was clicked
		var gameDisplay = $(this).closest('li')

		// THIS USES THE INDEX-RELATIONSHIP SYSTEM
	
	// // Find the index in the <ul> of this specific <li>
	// var gameIndex = gameDisplay.index();

	// // Remove that specific index from the running list
	// gamesList.splice(gameIndex, 1);

	// // Remove the game display from the ul
	// gameDisplay.remove();


	// Another way to do it

	// // Loop through the list of games
	// for (var i = 0; i < gamesList.length; i++) {
	// 	// Check to see if the DOM element matches what gameDisplay's DOM element is
	// 	if(gamesList[i].display.get(0) === gameDisplay.get(0)){
	// 		// Reomve the accociated display
	// 		gamesList[i].display.remove();
	// 		// splice the tiem from the list
	// 		gamesList.splice(i, 1)

	// 		// end the loop
	// 		break;
	// 	} 
	// };

	// pull the index back out from the data object
	var listIndex = gameDisplay.data('listIndex')
	// access that item from the gameslist by index
	var listItem = gamesList[listIndex]
	// remove the associated display element
	listItem.display.remove()
	// splic that index from the full list
	gamesList.splice(listIndex, 1);


}

// Wait for jQ to be ready...
$(document).on('ready', function() {
  
	// Kick off the rendering of preset list
	renderList();

	// Clear form
	titleField.val('')
	descriptionField.val('');



	// Listen for submission of new game form by passing a reference ot our event handler
	// 
	$('#new-game').on('submit', newGameSubmit);

	// Listen for (delegated) clicks on delete buttons
	$(document).on('click', '.delete', deleteGame)

});