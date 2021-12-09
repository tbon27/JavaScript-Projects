// Example Function

function Ride_Function() {
  var Height, Can_ride; //declare var Height and var Can_ride
  Height = document.getElementById("Height").value; //Height = the value input from user
  Can_ride = Height < 52 ? "You are too short" : "You are tall enough"; //var can_ride is the result of if height value is less than 52:if greater than 52...
  document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //display Can_ride from line 6 ternary
}

function Vote_Function() {
  var age, canVote; // declare var age and var canVote
  age = document.getElementById("Age").value; //age is the value input from user
  canVote = age < 18 ? "You are not old enough to vote." : "You can vote!"; //var canVote is the result if age is less than or greater than 18
  document.getElementById("Vote").innerHTML = canVote; //display canVote from line 13
}

//================================
//CAR FUNCTION NEW KEYWORD EXAMPLE
//================================
function Vehicle(Make, Model, Year, Color) {
  (this.Vehicle_Make = Make), //this (Vehicle)
    (this.Vehicle_Model = Model),
    (this.Vehicle_Year = Year),
    (this.Vehicle_Color = Color);
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //create new instance of Vehicle() - assign values to make, model, year, color
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " +
    Erik.Vehicle_Color +
    "-colored " +
    Erik.Vehicle_Model +
    " manufactured in " +
    Erik.Vehicle_Year +
    "."; //display string with new object Erik's values
}
//================================
//NEW KEYWORD DEMO New and this
//================================
function Beverage(Brand, Type, Flavor) {
  this.Beverage_Brand = Brand;
  this.Beverage_Type = Type;
  this.Beverage_Flavor = Flavor;
}
var Tony = new Beverage("7up", "Soda", "Cherry"); //create new instance of Beverage() - assign values to brand, type, flavor
var Rachel = new Beverage("Blue Ribbon", "Tea", "Vanilla");
var Everett = new Beverage("Minute Maid", "Juice", "Orange");
function FaveBevFunction() {
  document.getElementById("New_and_This").innerHTML =
    "Tony likes " +
    Tony.Beverage_Flavor +
    " " +
    Tony.Beverage_Type +
    " made by " +
    Tony.Beverage_Brand +
    ".";
  document.getElementById("New_and_This2").innerHTML =
    "Rachel likes " +
    Rachel.Beverage_Flavor +
    " " +
    Rachel.Beverage_Type +
    " made by " +
    Rachel.Beverage_Brand +
    ".";
  document.getElementById("New_and_This3").innerHTML =
    "Everett likes " +
    Everett.Beverage_Flavor +
    " " +
    Everett.Beverage_Type +
    " made by " +
    Everett.Beverage_Brand +
    "."; //display strings with respective objects values
}

//================================
//NESTED FUNCTION
//================================
function count_Function() {
  document.getElementById("nested-function").innerHTML = Count(); //display from Count() function
  function Count() {
    var startNumber = 9; //define starting value
    function Plus_five() {
      startNumber += 5; //take starting value and add 5
    }
    Plus_five(); //call function
    return startNumber; //display the result
  }
}
