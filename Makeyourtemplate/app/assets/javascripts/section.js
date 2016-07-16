
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

var test_database;
	// test database
	var text_h1_color = "pink";
	var test_database = ".text h1 {color:" + text_h1_color + "}"
	console.log(test_database);
	return test_database;
});

function element_select(el, id) {
	document.getElementById(id).style.backgroundColor="pink";


	// keep selected until click on other or reload
}

// SUBMITBUTTON
function submitUserInput() {
	// send user data to database
		$.ajax({
	  type: "POST",
	  url: "/css",
	  data: { css_rules: test_database }
	})
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
