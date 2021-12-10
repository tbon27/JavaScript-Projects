var startingNumber = 15; //global!

//================================
//Working FUNCTION using global variable, declares local variable
//================================
function Add() {
  document.getElementById("Adding").innerHTML = result();
  function result() {
    var errorStartValue = 7; //local!!
    function addOn() {
      startingNumber += 20;
    }
    function error() {
      errorStartValue += 20;
    }
    addOn();
    error();
    return startingNumber;
  }
}

//================================
// BAD FUNCTION - errorStartValue hasn't been defined here, it is locally defined in Add() function
//================================
function BadAdd() {
  document.getElementById("BadAdding").innerHTML = result();
  function result() {
    function error() {
      errorStartValue += 20;
    }
    error();
    return errorStartValue;
  }
}
