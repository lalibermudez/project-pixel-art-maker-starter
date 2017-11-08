// Select color input

let color = $('#colorPicker').val();

$('#colorPicker').change(function colorSelect() {
	color = $(this).val();
	$(this).attr('value', color);
});

// Select size input

let gridHeight, gridWidth;

$('#input_height').change(function () {
	gridHeight = $(this).val();
	$(this).attr('value', gridHeight);
});

$('#input_width').change(function () {
	gridWidth = $(this).val();
	$(this).attr('value', gridWidth);
});


// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function makeGrid() {
	$('tr').remove();
	for (let i = 1; i <= gridHeight; i++) {
		$('table').append('<tr></tr>');
	};
	for (let j = 1; j <= gridWidth; j++) {
		$('tr').append('<td></td>');
	};
	return false;
});

// When cells are click change to selected color

$('td').click(function () {
	$(this).css('background-color', color);
});
