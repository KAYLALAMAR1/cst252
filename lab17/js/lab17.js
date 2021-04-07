/**
 * Author:    Kayla Lamar <klamar@csumb.edu>
 * Created:   12 April
 *
 * License: Public Domain
 **/

$("input:submit").click(function(){
  console.log($("myinput").val());
  $("#output").html($("input:text").val());
})

$("#challenge-button1").click(function(){
  $("#challenge-button2").toggleClass("fluffy");
	});

  $("#challenge-button2").click(function(){
    $("#challenge-button1").toggleClass("comfy");
  	});
