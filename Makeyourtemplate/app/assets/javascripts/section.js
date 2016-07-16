var text_db;
var text_h1_color = "pink";

// when you click on div render section options
// TEXT SECTION
$(document).ready(function() {
	$( "#text_h1input" ).hide();
	$( "#text_pinput" ).hide();
	$( "#text" ).click(function() {
		var textpreview = document.getElementById( "text_preview").innerHTML;
		document.getElementById( "text_generator").innerHTML=textpreview;
		$( "#text_h1input" ).show();
		$( "#text_pinput" ).show();
	});
});

// element select buttons
function element_select(el, id) {
	$('#'+id).addClass('activeselect').siblings().removeClass('activeselect');
}

// get user input
function colorInput(color) {
	// get html element to style
	var el = document.getElementsByClassName("activeselect")[0].innerHTML;
	text_h1_color = color;
}


// make string of user input
function createCssString() {
	text_db = ".text h1 {color:" + text_h1_color + "}";
	console.log(text_db);
	submitUserInput(text_db);
}

// SUBMITBUTTON
function submitUserInput(db) {
	// send user data to database
	// 	$.ajax({
	//   type: "POST",
	//   url: "/sections/" + $(this).attr("id"),
	//   data: { css_rules: text_db }
	// })
	// update section.css_rules
	//  location.reload();
	 console.log(db);
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
