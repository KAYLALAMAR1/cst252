/**
 * Author:    Kayla Lamar <klamar@csumb.edu>
 * Created:   5 April
 *
 * License: Public Domain
 **/

   class Vehicle {
  constructor(make, model, year, color, extras) {
   this.make = make;
   this.model = model;
   this.year = year;
  this.color = color;
  this.extras = extras;
  }
  info() {
    return "I have " + this.color + " " + this.year + " " + this.make + " " + this.model + " " + this.extras;
  }
}

car = new Vehicle("Honda", "Civic", 1995, "a blue", "that was repainted green");
car2 = new Vehicle("Lincoln", "MKX", 2012, "an electric blue", "with a quiet engine");
document.getElementById("output2").innerHTML = car.info();
document.getElementById("output").innerHTML = car2.info();

//Understand the Problem
    //set up the game including board and players
    //game loop
    //draw the board
    //get new letter choice from player
    //validate letter
    //check for win or loss condition
    //switch players

//Pseudocode the High Level Approach
  //set up the game initially
      //create game board
      //create two players
  //start the game loop
      //render the board
      //ask for and validate the player's letter choice
  //if the letter is incorrect
      //add piece of the hangman
  //if the letter is correct
      //fill in the blank spaces where the correctly guessed letter should be
  //if game should end
      //display proper victory / loss message
      //stop looping
  //else
      //switch to the next player and keep looping

//Assign Actions to Objects
  //set up the game initially [Hangman]
    //create game board [Board]
    //create two players [Player]
  //start the game loop [Hangman]
    //render the board [Board]
    //ask for and validate the player's letter choice [Player]
  //if the letter is incorrect
    //add piece of the hangman [Board]
  //if the letter is correct
    //fill in the blank spaces where the correctly guessed letter should be [Board]
  //if game should end [Hangman]
    //display proper victory / loss message
    //stop looping
  //else
    //switch to the next player and keep looping [Hangman]

//Make Javascript-ish Pseudocode
    //Controls the game play class Hangman
        //initialize
        //set up the board
        //set up the players
        //assign the guessing player
    //play
        //loop infinitely
        //call the board rendering method
        //ask for letter choice from the guessing player
        //check letter
        //break the loop if the game is over
        //switch players
    //check letter
        //check if guessed letter is correct
        //if correct fill in blank spots of the guessed letter
        //if incorrect add piece of hangman
    //check if game is over
        //check victory
        //check loss
    //check victory
        //if board says guessing player's got all letters correct
        //display victory message
    //check loss
        //if board shows finished hangman
        //display loss message
