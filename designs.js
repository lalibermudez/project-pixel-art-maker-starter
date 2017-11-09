// Select color input

let color = $('#colorPicker').val();

$('#colorPicker').change(function colorSelect() {
	color = $(this).val();
	$(this).attr('value', color);
});

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function makeGrid() {
	$('tr').remove();

	// Select size input
	let gridHeight = $('#input_height').val();
	let gridWidth = $('#input_width').val();

	for (let i = 1; i <= gridHeight; i++) {
		$('table').append('<tr></tr>');
	};
	for (let j = 1; j <= gridWidth; j++) {
		$('tr').append('<td></td>');
	};
	
	// When cells are clicked change to selected color
	$('td').click(function () {
		$(this).css('background-color', color);
	});

	event.preventDefault();
});


