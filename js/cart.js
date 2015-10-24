$(document).ready(function() {
    console.log("ready!");
var spanitem = '<span class="lispan">';
    $("#submit").on("click", function() {
      
        var item = $("#item").val();
             if (item == '') {
              $('#item').val(' ');
              alert("I am an alert box!");
              } 
              else
              {
                $('#item').val(' ');
        $("#list").prepend("<li>"+ spanitem + item + "</span><i class='remove'></i></li>");
        
    }
    });


    $("#list").on("click", "li", function() {
        $(this).toggleClass("checked");
        $(this).closest('span').toggleClass('.checked span.lispan');
    });

    $("#list").on("click", ".remove", function() {
        $(this).closest("li").remove();
    });

    $("#clear").on("click", function() {
        $(".checked").remove();
    });

    $("#item").keydown(function(e) {
        if (e.which == 13) {
            var item = $("#item").val();
              if (item == '') {
              $('#item').val('');
              alert("I am an alert box!");
              } 
              else
              {
                $('#item').val(' ');
                $("#list").prepend("<li>"+ spanitem + item + "</span><i class='remove'></i></li>");
        }
}
    });


    

});

$('reset').on("click", function() {
        reset();
    });

    function reset() {
        $('#item').val('');
        $("ul#list").empty();
    };
