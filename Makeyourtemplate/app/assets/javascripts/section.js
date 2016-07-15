// when you click on div render section options
$(document).ready(function() {
    $( "#text" ).click(function() {
        // need to change!!
        var styles = $(this).data("css")

      console.log($(this));
        ( $("#text-choices").html(styles));
    });
});
