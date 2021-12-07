// NOTE ON VAR A EXAMPLE! Prettier extension used, autocorrects on save
var a = 'We got this string from a variable we named "a"! Wow!'; //this is a string using escapes for quotes (SORRY if Prettier extension corrects this automatically!)
////////////////
var b = "This is an ALERT that I made just for you!"; //this is the text for the alert message
var c =
  "This is a string, " + "but this time " + "I've concantenated this one!"; //using concantenation to for full string sentence
var team = "Red", //name variable team "red"
  Captain = "Tony", //name captain
  CoCaptain = "Rachel", //name co captain
  MidLevel = "Wyatt", //name of midlevel
  Backup = "Nicole"; //name of backup
var team = team.fontcolor("red"); //set the font color of variable team to red
var Captain = Captain.fontcolor("gold"); //set the font color of variable captain to gold
var CoCaptain = CoCaptain.fontcolor("orange"); //set the font color of variable cocaptain to orange
var MidLevel = MidLevel.fontcolor("blue"); //set the font color of the variable midlevel to blue
var Backup = Backup.fontcolor("pink"); //set the font color of the variable backup to pink

var score1 = 56; //set score 1
var score2 = 67; //set score 2
var score3 = 70; //set score 3
var score4 = 84; //set score 4
var totalScore = score1 + score2 + score3 + score4; //add all scores and assign to total score variable
var avgScore = totalScore / 4; //divide the total score by four to get average score

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
); // display string with team name and total score
document.write(
  "Team " + team + " scored " + score2 + " points in their second match. "
); // display string with team name and points scored in the second match (score2)
document.write(Backup + " scored the final points in their last match."); //display the backup name and their score in the final match (score4)
document.write("<br>"); //new line
document.write(
  "Team " +
    team +
    "'s average total score is " +
    avgScore +
    " points per match."
); //display the team name and their average score per match
document.write("<br>"); //new line
function My_First_Function() {
  var str = "This text is red!";
  var result = str.fontcolor("red");
  document.getElementById("Red_Text").innerHTML = result;
} //this is a button that when clicked turns the original message to new str and changes font color to red
