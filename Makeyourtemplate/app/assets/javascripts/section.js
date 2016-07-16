
// when you click on div render section options
// TEXT SECTION
$(document).ready(function() {
	$( "#text_h1input" ).hide();
	$( "#text_pinput" ).hide();
	$( "#text" ).click(function() {
		// innerHTML: document.getElementById $( "text_generator")
		$( "#text_h1input" ).show();
		$( "#text_pinput" ).show();
	});
});

function text_select_h1() {
	// this...?
	// keep selected until click on other or reload
}


var text_h1_color;

function textinput_h1_color() {
    var text_h1_color = document.getElementById("textinput_h1_color").style.backgroundColor;
    console.log(text_h1_color);
    return text_h1_color;
}

var text_h1_fontFamily;

function textinput_h1_fontFamily() {
    var text_h1_fontfamily = document.getElementById("textinput_h1_fontfamily").style.fontFamily;
    console.log(text_h1_fontfamily);
    return text_h1_fontfamily;
}


var test = ".text h1 {color:" + text_h1_color + " fontFamily:" + text_h1_fontfamily + "} ";

console.log(test);

// SUBMITBUTTON
function submitUserInput() {
	// send user data to database
	// update section.css_rules
	 location.reload();
}

//
// BENBENBENBENBEN
//     $( "#text" ).click(function() {
//         var styles = $(this).data("css")
//
//       console.log($(this));
//         ( $("#text_generator").html(styles));
//     });
//
// });
