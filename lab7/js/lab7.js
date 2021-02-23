/**
 * Author:    Kayla Lamar <klamar@csumb.edu>
 * Created:   23 February
 *
 * License: Public Domain
 **/


 function sortUserName() {
   var userName = window.prompt("Hi. Please tell me your name so I can fix it!");
   console.log("userName =", userName);
   // split string to array
   var nameArray = userName.split('');
   console.log("nameArray =", nameArray);
   // sort the array
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort =", nameArraySort);
   // join array back to string
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);
   return nameSorted;
 }

 // Output
 document.writeln("Hey there! I fixed your name: ",
sortUserName(), "</br>");
