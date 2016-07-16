// when you click on div render section options
$(document).ready(function() {
	$( "#textinput" ).hide();
	$( "#text" ).click(function() {
		$( "#textinput" ).show();
	});
});

// BENBENBENBENBEN
//     $( "#text" ).click(function() {
//         var styles = $(this).data("css")
//
//       console.log($(this));
//         ( $("#text-choices").html(styles));
//     });
//
// });




// TEXT
var text_h1_color;

function textinput_h1_color() {
	var text_h1_color = document.getElementById("textinput_h1_color").style.backgroundColor;
	console.log(text_h1_color);
	return text_h1_color;
}

var text_h1_backgroundcolor;

function textinput_h1_backgroundcolor() {
	var text_h1_backgroundcolor = document.getElementById("textinput_h1_backgroundcolor").style.backgroundColor;
	console.log(text_h1_backgroundcolor);
	return text_h1_backgroundcolor;
}



var test = ".text h1 {color:" + text_h1_color + " background-color:" + text_h1_backgroundcolor + "} ";

console.log(test);

// ajax
