function My_First_Function() {
  var str = "This text is red!";
  var result = str.fontcolor("red");
  document.getElementById("Red_Text").innerHTML = result;
} //this is a button that when clicked turns the original message to new str and changes font color to red

function My_Function_1() {
  var sentence = "I am learning";
  sentence += " a lot from this bootcamp!"; //this adds on to str from the initial var sentence on line 9
  document.getElementById("Concantenate").innerHTML = sentence; //change message from original html to sentence from line 9
}

function date_Function() {
  var str2 = "Here's the date and time in your region. NICE!";
  document.getElementById("dateTime").innerHTML = str2; //change message from original html to str2 on click
  document.getElementById("timeDemo").innerHTML = Date(); //display provided date and time function
}
