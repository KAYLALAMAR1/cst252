/**
 * Author:    Kayla Lamar <klamar@csumb.edu>, Wes Modes <wmodes@csumb.ecu>
 * Created:   19 April
 *
 * License: Public Domain
 **/

 var endpoint = "http://numbersapi.com/11/29/date";

 $("#activate").click(function(){
 	$("#output").append("<p>What's up, homie?</p>");
   // Using the core $.ajax() method
   $.ajax({
       // The URL for the request
       url: endpoint,
       // The data to send (will be converted to a query string)
       data: { },
       // Whether this is a POST or GET request
       type: "GET",
       // The type of data we expect back
       /* dataType : "json", */
   })
   // If the request succeeds
   .done(function( data ) {
       $("#output").append("<p>" + data + "</p>");
   })
   // If the request fails
   .fail(function( xhr, status, errorThrown ) {
       console.log(errorThrown + " Status:" + status );
   });

 })
