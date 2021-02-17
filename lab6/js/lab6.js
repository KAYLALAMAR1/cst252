/**
 * Author:    Kayla Lamar <klamar@csumb.edu>
 * Created:   16 February
 *
 * License: Public Domain
 **/

 // Define Variables
myTransport = ["car", "bus", "train"];
myMainRide = {
    make: "Nissan",
    model : "Quest",
    color : "Coffee",
    year : 2002,
    age : function() {
        return 2021 - this.year;

 // output
 document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
 document.writeln("My Main Ride: <pre>",
     JSON.stringify(myMainRide, null, '\t'), "</pre>");
 document.writeln("The age of my ", myMainRide.model, " is ", myMainRide.age(), " years.");
