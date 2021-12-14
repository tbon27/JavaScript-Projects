function convertLbKg() {
  var result = 1 / 2.205;
  document.getElementById("Math").innerHTML = result;
}

function calcAge() {
  var birthYear = 1989; // set birth year to 1989
  var currentYear = 2021; // set current year
  var futureYear = 2050; // set desired future year
  currentAge = currentYear - birthYear; // calc current age
  futureAge = futureYear - birthYear; // calc future age
  document.getElementById("Ages").innerHTML =
    "Current age (2021-1989) is: " + currentAge; // display current age
  document.getElementById("Ages2").innerHTML = "Age in 2050 is: " + futureAge; // display future age
}

function simpleMultiply() {
  var result = 27 * 8;
  document.getElementById("Multiply").innerHTML = "27 times 8 is: " + result;
}

function demoMath() {
  var result = ([5 + 107] * 8) / 2 - 2;
  document.getElementById("DemoMath").innerHTML =
    "5 plus 107, multiplied by 8, divided by 2, minus 2 is: " + result;
}

function modulus_Op() {
  var demoMath = 27 % 4;
  document.getElementById("modDemo").innerHTML =
    "When 27 is divided by 6, remainder = " + demoMath;
}

function negation_Op() {
  var x = 27;
  document.getElementById("negation").innerHTML = -x; //syntax for the negation operator is “-” followed by the variable name.
}

function increment() {
  var x = 10;
  x++; // increment x by 1
  document.getElementById("incrementDemo").innerHTML =
    "10 incremented by 1 is: " + x;
}

function decrement() {
  var x = 100;
  x--; // decrement x by 1
  document.getElementById("decrementDemo").innerHTML =
    "100 decremented by 1 is: " + x;
}

function randomDemo() {
  window.alert(Math.random() * 200); //create alert that generates a random number between 0 and 200
}

function randomRoundDemo() {
  var randomGenerator = Math.random() * 200; //generates a random number between 0 and 200 and set to var randomGenerator
  window.alert(Math.round(randomGenerator)); //show alert with result randomGenerator rounded to nearest integer
}
