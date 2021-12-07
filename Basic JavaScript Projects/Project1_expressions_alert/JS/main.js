var a = 'We got this string from a variable we named "a"! Wow!';
var b = "This is an ALERT that I made just for you!";
var c =
  "This is a string, " + "but this time " + "I've concantenated this one!";

var team = "Red",
  Captain = "Tony",
  CoCaptain = "Rachel",
  MidLevel = "Wyatt",
  Backup = "Nicole";
var team = team.fontcolor("red");
var Captain = Captain.fontcolor("gold");
var CoCaptain = CoCaptain.fontcolor("orange");
var MidLevel = MidLevel.fontcolor("blue");
var Backup = Backup.fontcolor("pink");

var score1 = 56;
var score2 = 67;
var score3 = 70;
var score4 = 84;
var totalScore = score1 + score2 + score3 + score4;
var avgScore = totalScore / 4;

window.alert(b); //alert comes first
document.write(a); //this is displayed on page after alert is closed
document.write("<br>"); //new line
document.write(c); //concantenated string printed
document.write("<br>"); //new line
document.write(CoCaptain + " is the Co-Captain"); //Rachel is co captain
document.write("<br>"); //new line
document.write(
  "Team " +
    team +
    " scored a total of " +
    totalScore +
    " points in four matches. "
);
document.write(
  "Team " + team + " scored " + score2 + " points in their second match. "
);
document.write(Backup + " scored the final points in their last match.");
document.write("<br>"); //new line
document.write(
  "Team " +
    team +
    "'s average total score is " +
    avgScore +
    " points per match."
);
document.write("<br>"); //new line
function My_First_Function() {
  var str = "This text is red!";
  var result = str.fontcolor("red");
  document.getElementById("Red_Text").innerHTML = result;
}
