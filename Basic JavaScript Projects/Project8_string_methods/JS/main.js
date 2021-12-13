//==============
//Concat example
//==============
function FullLine() {
  var part_1 = "This is "; //define sections of sentence to be combined
  var part_2 = "now a ";
  var part_3 = "complete ";
  var part_4 = "sentence!";
  var whole_sentence = part_1.concat(part_2, part_3, part_4); //concat method to combine strings together
  document.getElementById("Concat_1").innerHTML = whole_sentence; //Display full sentence
}

//==============
//Slice example
//==============
function Slice() {
  var Sentence = "All work and no play makes Tony a dull boy."; //define full sentence
  var Section = Sentence.slice(13, 43); //dictate where to slice the desired section
  document.getElementById("Sliced").innerHTML = Section;
}

//==============
//ToUpperCase demo
//==============
function Upper() {
  var text = "this is lower... make it upper!";
  var result = text.toUpperCase(); // make var text uppercase
  document.getElementById("UpperCase").innerHTML = result;
}
//==============
//search() demo
//==============
function SearchFor() {
  var text = "This course is being completed by Tony";
  var position = text.search("Tony"); //search var text for "Tony"
  document.getElementById("SearchIt").innerHTML = position; //reveal position of desired search word
}
//==============
//Number Method example
//==============
function string_Method() {
  var x = 192;
  document.getElementById("Numbers_to_string").innerHTML = x.toString(); //returns string 192
}
//==============
//Precision Method example
//==============
function precision_Method() {
  var x = 192.9938734222567454;
  document.getElementById("Precise").innerHTML = x.toPrecision(7); //returns 192.9939 "7" spots
}
//==============
// To Fixed method demo
//==============
function to_fixed_method() {
  var number = 7.278797;
  document.getElementById("Fixed").innerHTML = number.toFixed(5); // converts number to string, rounding to a specified number of decimals "5"
}
//==============
// value of method demo
//==============
function value_of_method() {
  var text = "This is some demo text.";
  document.getElementById("value").innerHTML = text.valueOf(); //returns demo text
  //The valueOf() method returns the primitive value of a string.
  //The valueOf() method does not change the original string.
  //The valueOf() method can be used to convert a string object into a string.
}
