
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
