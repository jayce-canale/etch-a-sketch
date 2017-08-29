$(document).ready(function(){
	initGrid(3);
	hover();
	newGrid();
});

function initGrid(numberOfSquares){
	var gridSquare = $('.gridSquare');
	var container = $('.container');
	var gridSquareSize = 500 / numberOfSquares;
	var area = numberOfSquares * numberOfSquares;
	
	gridSquare.height(gridSquareSize);
	gridSquare.width(gridSquareSize);

	for (var i = 1; i < area; i++){
		gridSquare.clone().appendTo(container);
	}
}

function newGrid(){
	$("#button").click(function(){
		var input = prompt("Enter number of Squares");
		$('.container').empty();
		$('.container').append("<div class = gridSquare> </div>");		
		initGrid(input);
		hover();
	});
}

function hover(){
	$('.gridSquare').hover(function(){
		$(this).css("background-color", "#9d9dfb");
	})
}




