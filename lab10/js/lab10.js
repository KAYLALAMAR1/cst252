/**
 * Author:    Kayla Lamar <klamar@csumb.edu>
 * Created:   3 March
 *
 * License: Public Domain
 **/

 function sortUserName() {
   var button = document.getElementById('my-button');
}

// find the button element
buttonEl = document.getElementById("my-button");
console.log("button element:", buttonEl);
// find the form element
inputEl = document.getElementById("user-name");
console.log("input element:", inputEl);
// find output element
outputEl = document.getElementById("output");
console.log("output element:", outputEl);

   // add an event listener to button
   buttonEl.addEventListener("click", function(){
     // get value from name element
     var userName = inputEl.value;
     // modify value - either sort or shuffle
     var newName = toTitleCase(reorderUserName(userName));
     // put value in output element
     outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
   });
