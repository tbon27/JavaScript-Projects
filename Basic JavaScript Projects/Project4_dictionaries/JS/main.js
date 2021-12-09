// function to store information about a baseball team's roster
function Roster() {
  var Player1 = {
    Age: 24,
    Throws: "Right",
    Bats: "Left",
    Position: "Shortstop",
    BattingAvg: 0.345,
  };
  document.getElementById("Position").innerHTML = Player1.Position; //display the position of player1
}

function my_Dictionary2() {
  var Animal = {
    Species: "Dog",
    Color: "Black",
    Breed: "Labrador",
    Age: 5,
    Sound: "Bark",
  };
  delete Animal.Age; //delete Age kvp
  document.getElementById("Dictionary2").innerHTML = Animal.Age; //display the age of the animal, produces undef
}
