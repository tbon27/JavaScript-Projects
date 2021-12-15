/*================
    WHILE LOOP Example
==================*/
function Call_Loop() {
  var result = ""; //create variable for result of while loop
  var start = 0; //starting value
  while (start < 7) {
    //loop while the starting variable value is less than 7
    result += "<br>" + start; //assign result var with a newline and start value
    start++; //add one to start variable
  }
  document.getElementById("Loop").innerHTML = result; //display result from loop iterations
}

/*================
    String Length Example
==================*/
function String_Length() {
  var str = "Click here to return the length of this string!";
  document.getElementById("str_length").innerHTML = str.length; //return length of string
}

/*================
    FOR LOOP ASSIGNMENT
==================*/
var positions = [
  //define array of baseball positions
  "Pitcher",
  "Catcher",
  "First Baseman",
  "Second Baseman",
  "Third Baseman",
  "Shortstop",
  "Left Fielder",
  "Center Fielder",
  "Right Fielder",
];
var result = ""; //used for displaying results
var x;
function for_Loop() {
  for (x = 0; x < positions.length; x++) {
    //loop if x is less than length of positions array, starting from 0, and add one each iteration
    result += positions[x] + "<br>"; //assign result with value of array[where x is in loop]
  }
  document.getElementById("List_of_positions").innerHTML = result; //display result each iteration
}

/*================
    ARRAY FUNCTION ASSIGNMENT
==================*/
var topTenTeams = [
  "Golden State Warriors",
  "Phoenix Suns",
  "Utah Jazz",
  "Brooklyn Nets",
  "Chicago Bulls",
  "Milwaukee Bucks",
  "Memphis Grizzlies",
  "Cleveland Cavaliers",
  "LA Clippers",
  "Miami Heat",
]; //array of top 10 basketball teams in order
function getTeams() {
  document.getElementById("Array").innerHTML =
    "#1: " +
    topTenTeams[0] +
    "<br>" +
    "#2: " +
    topTenTeams[1] +
    "<br>" +
    "#3: " +
    topTenTeams[2] +
    "<br>" +
    "#4: " +
    topTenTeams[3] +
    "<br>" +
    "#5: " +
    topTenTeams[4]; //display top 5 teams
}

/*================
    Const Keyword ASSIGNMENT
==================*/
function constant_function() {
  const videoGame = {
    console: "Nintendo Switch",
    title: "Splatoon 2", //initial game title
    price: "$49.99", //initial game price
  };
  videoGame.price = "$29.99"; //changed price of the game
  videoGame.title = "Splatoon"; //changed title of the game
  videoGame.rating = "E"; //added the rating for the game
  document.getElementById("Constant").innerHTML =
    "The title of the game is: " +
    videoGame.title +
    "<br> The price of the game is: " +
    videoGame.price +
    "<br> The rating of this game is: " +
    videoGame.rating;
}

/*================
    LET Keyword ASSIGNMENT
==================*/
var value = 100;
function let_function() {
  document.getElementById("Let").innerHTML = value; //initial value
  {
    let value = 200; //let: local to this block
    document.getElementById("Let2").innerHTML = value; //show new value = 200
  }
  document.getElementById("Let3").innerHTML = value; //shows original value = 100
}

/*================
   RETURN statement challenge
==================*/
function ReturnThis() {
  function faveTeam(city) {
    //pass in city variable to faveTeam()
    return city + " Kings"; //return variable passed and string mascot name
  }
  document.getElementById("return").innerHTML = faveTeam("Sacramento"); //pass in string to city and display city + string result
}

/*================
   Object assignment
==================*/
function ReturnObject() {
  let ComputerSpecs = {
    //define object with properties
    style: "desktop tower",
    processor: "Intel Core i7-10700",
    installedRAM: "16GB",
    systemType: "64-bit",
    OS: "Windows 10 Home",
    description: function () {
      return (
        "This " +
        this.style +
        " computer has a(n) " +
        this.processor +
        " with " +
        this.installedRAM +
        " RAM installed.<br> This computer uses a " +
        this.systemType +
        " OS and processor. The OS is " +
        this.OS +
        "."
      ); //return the string + properties on function call
    },
  };
  document.getElementById("showSpecs").innerHTML = ComputerSpecs.description(); //call description property and resulting function and display string with propeties from return
}

/*================
   Break and continue assignment
==================*/
function Colors() {
  var output = ""; //declare variable for displaying function output
  var myArray = [
    "blue",
    "green",
    "red",
    "yellow",
    "white",
    "black",
    "orange",
    "grey",
    "purple",
  ]; //array of 9 colors to loop through
  var i;
  for (i = 0; i < myArray.length; i++) {
    //starting at 0, if i is less than the length of my array, add one
    if (i === 2) {
      //skip myArray[2] = index 2 of myArray = red
      continue;
    }
    if (i === 6) {
      //stop at myArray[6] = black
      break;
    }
    output += "The color is " + myArray[i] + "<br>";
  }
  document.getElementById("colorShow").innerHTML = output; //displays for myArray=[0][1][3][4][5]
}
