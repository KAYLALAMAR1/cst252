/**
 * Author:    Kayla Lamar <klamar@csumb.edu>
 * Created:   24 March
 *
 * License: Public Domain
 **/

 function Vehicle(make, model, year, color, extras) {
 	this.make = make;
 	this.model = model;
 	this.year = year;
  this.color = color;
  this.extras = extras;
  this.info = function() {
return this.color + " " + this.year + " " + this.make + " " +  this.model + " " +  this.extras;
}
 }

var car = new Vehicle("Honda", "Civic", 1995, "blue", "repainted green");
var car2 = new Vehicle("Lincoln", "MKX", 2012, "electric blue", "quiet engine");

document.getElementById("output").innerHTML += "<p>" + car.info() + "</p>";
document.getElementById("output").innerHTML += "<p>" + car2.info() + "</p>";
