/*============
//SWITCH DEMO
=============*/
function Genre_Function() {
  var Genre_Output;
  var Genres = document.getElementById("Genre_Input").value;
  var Genre_String = " is a great genre of music!";

  switch (Genres) {
    case "Reggae":
      Genre_Output = "Reggae" + Genre_String;
      break;
    case "Country":
      Genre_Output = "Country" + Genre_String;
      break;
    case "Classical":
      Genre_Output = "Classical" + Genre_String;
      break;
    case "R&B":
      Genre_Output = "R&B" + Genre_String;
      break;
    case "Rock":
      Genre_Output = "Rock" + Genre_String;
      break;
    case "Other":
      Genre_Output = "Other" + Genre_String;
      break;
    default:
      Genre_Output =
        "Please enter a genre exactly as written on the above list.";
  }
  document.getElementById("Output").innerHTML = Genre_Output;
}

/*============
// Get Elements By Class Name Method example
=============*/
function Hello_World_Function() {
  var A = document.getElementsByClassName("Click");
  A[0].innerHTML = "The text has changed!";
}

/*============
// Canvas path demo - beingPath, moveTo, lineTo, stroke, bezierCurveTo
=============*/
var path = document.getElementById("pathCanvas");
var pathDraw = path.getContext("2d"); //returns a drawing context on the canvas, or null if the context identifier is not supported, or the canvas has already been set to a different context mode

pathDraw.beginPath();
pathDraw.lineWidth = "20";
pathDraw.strokeStyle = "red"; // red path
pathDraw.moveTo(0, 75); //move to start point
pathDraw.lineTo(250, 175); //create "line" to new point
pathDraw.stroke(); // draw the line

pathDraw.beginPath();
pathDraw.lineWidth = "100";
pathDraw.strokeStyle = "blue"; // blue path
pathDraw.moveTo(350, 20); //move to start point
pathDraw.lineTo(500, 200); //create "line" to new point
pathDraw.stroke(); // draw the line

pathDraw.beginPath();
pathDraw.lineWidth = "50";
pathDraw.strokeStyle = "yellow"; // yellow path
pathDraw.moveTo(100, 300); //move to start point
//ctx.lineTo(150, 530);
pathDraw.bezierCurveTo(200, 200, 900, 520, 10, 550); //create "bezier curve" to new point
pathDraw.stroke(); // draw the curved line

/*============
//  createLinearGradient() method
=============*/
var gradient = document.getElementById("gradientCanvas");
var goGradient = gradient.getContext("2d");

var newGradient = goGradient.createLinearGradient(0, 0, 500, 0);
newGradient.addColorStop(0, "rgba(0,100,0,1)"); //at colorstop 0 color is..)
newGradient.addColorStop(1, "rgba(100,0,100,1)"); //at colorstop 1,end, color is..)

goGradient.fillStyle = newGradient;
goGradient.fillRect(0, 0, 900, 40);
