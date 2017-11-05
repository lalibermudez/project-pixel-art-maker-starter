// Select color input
// Select size input
let gridHeight, gridWidth;

$('#input_height').keyup(function () {
	gridHeight = $(this).val();
	$(this).attr('value', gridHeight);
});

$('#input_width').keyup(function () {
	gridWidth = $(this).val();
	$(this).attr('value', gridWidth);
});


// When size is submitted by the user, call makeGrid()


$('#sizePicker').submit(function makeGrid() {


// Your code goes here!


});
