/**
 * Author:    Kayla Lamar <klamar@csumb.edu>
 * Created:   7 April
 *
 * License: Public Domain
 **/

 $(".end-content")

$(".end-content").append("<button id='my-button'>Say Hi</button>")

// find element set up an alert
$("#my-button").click(function(){
  alert("Hello!")
});

// change button to color green
$("#my-button").css("color","green");
