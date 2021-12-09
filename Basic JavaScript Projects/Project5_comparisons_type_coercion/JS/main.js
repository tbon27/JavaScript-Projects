// typeof example
document.write(typeof 11);
document.write("<br>"); //new line

// expression combining string and number
document.write("12" + 6);
document.write("<br>"); //new line

//NaN and is NaN examples
document.write(0 / 0);
document.write("<br>"); //new line
document.write(isNaN("String"));
document.write("<br>"); //new line
document.write(isNaN(23));
document.write("<br>"); //new line

document.write("===Infinity==="); //title
document.write("<br>"); //new line
//max number +infinity
document.write(2e310);
document.write("<br>"); //new line

//negative min -infinity
document.write(-3e310);

//Show infinity
function InfinityDemo() {
  document.getElementById("PositiveInfinity").innerHTML = 2e310;
}
//Show negative infinity
function negInfinityDemo() {
  document.getElementById("NegativeInfinity").innerHTML = -3e310;
}

document.write("<br>"); //new line
document.write("===Boolean==="); //title
//Display true with bool
document.write("<br>"); //new line
document.write(10 > 9);
//Display false with bool
document.write("<br>"); //new line
document.write(10 > 19);
document.write("<br>"); //new line

// console.log example
console.log(2 + 3);
console.log(10 > 11); //false in console

// == examples
document.write("===Equal Equal==="); //title
document.write("<br>"); //new line
document.write(10 == 10); //returns true
document.write("<br>"); //new line
document.write("word" == "Word"); //returns false
document.write("<br>"); //new line

// triple equal signs
document.write("===Triple Equal Signs==="); //title
document.write("<br>"); //new line
document.write("string" === "string"); //true match data type and value
document.write("<br>"); //new line
document.write(500 === 500); //true match data type and value
document.write("<br>"); //new line
document.write("string" === 505); //false does not match data type or value
document.write("<br>"); //new line
document.write("505" === 505); //false does not match data type
document.write("<br>"); //new line
document.write("505" === 205); //false does not match value

// AND operator
document.write("<br>"); //new line
document.write("===AND operator==="); //title
document.write("<br>"); //new line
document.write(10 > 9 && 9 > 8); //true && true = true
document.write("<br>"); //new line
document.write(10 > 9 && 9 < 8); //true && false = false

// OR operator
document.write("<br>"); //new line
document.write("===OR operator==="); //title
document.write("<br>"); //new line
document.write(10 < 9 || 11 > 8); //false or true = true
document.write("<br>"); //new line
document.write(10 < 9 || 11 < 8); // false or false = false

// ! NOT //
document.write("<br>"); //new line
document.write("===NOT operator==="); //title
document.write("<br>"); //new line
document.write(10 != 10); //10 is not equal to 10 is false
document.write("<br>"); //new line
document.write(10 != 9); //10 is not equal to 9 is true

function NotDemo() {
  document.getElementById("not").innerHTML = !(27 > 25); //!true = false
}
function NotDemo2() {
  document.getElementById("not2").innerHTML = !(23 > 25); //!false = true
}
