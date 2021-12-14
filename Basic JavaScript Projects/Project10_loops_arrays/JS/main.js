/*================
    WHILE LOOP Example
==================*/
function Call_Loop() {
  var result = "";
  var start = 0;
  while (start < 7) {
    result += "<br>" + start;
    start++;
  }
  document.getElementById("Loop").innerHTML = result;
}

/*================
    String Length Example
==================*/
function String_Length() {
  var str = "Click here to return the length of this string!";
  document.getElementById("str_length").innerHTML = str.length;
}

/*================
    FOR LOOP ASSIGNMENT
==================*/
var positions = [
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
var result = "";
var x;
function for_Loop() {
  for (x = 0; x < positions.length; x++) {
    result += positions[x] + "<br>";
  }
  document.getElementById("List_of_positions").innerHTML = result;
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
];
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
    topTenTeams[4];
}
