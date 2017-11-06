// Select color input

let color = $('#colorPicker').val();

$('#colorPicker').change(function colorChange() {
	color = $(this).val();
});

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
	$('tr').remove();
	for (let i = 1; i <= gridHeight; i++) {
		$('table').append('<tr></tr>');
	};
	for (let j = 1; j <= gridWidth; j++) {
		$('tr').append('<td></td>');
	};
	return false;
});
