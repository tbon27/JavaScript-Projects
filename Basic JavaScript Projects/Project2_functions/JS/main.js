function My_First_Function() {
  var str = "This text is red!";
  var result = str.fontcolor("red");
  document.getElementById("Red_Text").innerHTML = result;
} //this is a button that when clicked turns the original message to new str and changes font color to red
