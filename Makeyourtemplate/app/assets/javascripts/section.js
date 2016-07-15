// when you click on div render section options
$(document).ready(function() {
	$( "#textinput" ).hide();
	$( "#text" ).click(function() {
		$( "#textinput" ).show();
	});

//     $( "#text" ).click(function() {
//         var styles = $(this).data("css")
//
//       console.log($(this));
//         ( $("#text-choices").html(styles));
//     });
//
// });

var color;

// get color from user
function colorInput() {
	var color = document.getElementById("colorblock").style.backgroundColor;
	document.getElementById('giveColor').style.color = color;
	console.log(color);


	var test = ".text h1 {color:" + color + "}";
	console.log(test);
	return color;
}


// ajax
