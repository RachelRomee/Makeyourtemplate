
var text_db;
var text_h1_color = "";
var text_p_color = "";
var text_h1_font = "";
var text_p_font = "";

// when you click on div render section options
// TEXT SECTION
$(document).ready(function() {
	$( "#text_h1input" ).hide();
	$( "#text_pinput" ).hide();
	$( "#text" ).click(function() {
		var textpreview = document.getElementById("text").innerHTML;
		document.getElementById('text_generator').innerHTML = textpreview;
		$( "#text_h1input" ).show();
		$( "#text_pinput" ).show();
	});
});



// element select buttons
function element_select(el, id) {
	$('#'+id).addClass('activeselect').siblings().removeClass('activeselect');
}

// get Color input
function colorInput(color) {
	var el = document.getElementsByClassName("activeselect")[0].innerHTML;
	return window["text_" + el + "_color"] = color;
}
// get Color input
function fontInput(font) {
	var el = document.getElementsByClassName("activeselect")[0].innerHTML;
	console.log(font);
	return window["text_" + el + "_font"] = font;
}

// make string of user input
function createCssString() {
	text_db = ".text h1 {color:" + text_h1_color + "; font-family: " + text_h1_font + ";} .text p {color:" + text_p_color + "; font-family: " + text_p_font + ";}";
	console.log(text_db);
	submitUserInput(text_db, "text");
	return text_db;
}

// SUBMITBUTTON
function submitUserInput(db, sectionName) {
	console.log(db);
	// send user data to database
		$.ajax({
	  type: "PUT",
	  url: "/sections/" + sectionName,
	  data: { section: { css_rules: db } }
	})
	// update section.css_rules
	//  location.reload();

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
