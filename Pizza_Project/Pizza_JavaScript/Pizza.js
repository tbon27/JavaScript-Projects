function getReceipt() {
  //this initializes our string so it can get passed from function to function, growing line by line into a full receipt
  var text1 = "<h3>You ordered:</h3>"; //heading for list of pizza size and toppings ordered
  var runningTotal = 0; //running total for order
  var sizeTotal = 0; // value of the chosen size of pizza
  var sizeArray = document.getElementsByClassName("size"); //get html elements class name size
  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      var selectedSize = sizeArray[i].value; //if sizeArray value i is checked, assign value to var selectedSize
      text1 = text1 + selectedSize + "<br>"; //display "you ordered:" list, new lines
    }
  }
  if (selectedSize === "Pizza Bites") {
    sizeTotal = 6; // designated price/value of selected size (pizza bites)
  } else if (selectedSize === "Small Pizza") {
    sizeTotal = 8;
  } else if (selectedSize === "Medium Pizza") {
    sizeTotal = 10;
  } else if (selectedSize === "Large Pizza") {
    sizeTotal = 14;
  } else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 16;
  } else if (selectedSize === "Ridiculously Huge Pizza") {
    sizeTotal = 22;
  }
  runningTotal = sizeTotal; // runningTotal takes the value of sizeTotal
  console.log(selectedSize + " = $" + sizeTotal + ".00"); //in console
  console.log("size text1: " + text1);
  console.log("subtotal: $" + runningTotal + ".00");
  //these variable will get passed on to each function
  getTopping(runningTotal, text1);
}

function getTopping(runningTotal, text1) {
  var toppingTotal = 0; // starting topping total count
  var selectedTopping = []; //array for selected toppings
  var toppingArray = document.getElementsByClassName("toppings"); // get toppings class from HTML
  for (var j = 0; j < toppingArray.length; j++) {
    if (toppingArray[j].checked) {
      //If topping array value j is checked
      selectedTopping.push(toppingArray[j].value); //push (add) the topping array value to selectedTopping array
      console.log("selected topping item: (" + toppingArray[j].value + ")"); //to console
      text1 = text1 + toppingArray[j].value + "<br>"; //set text1 to chosen topping (string)
    }
  }
  var toppingCount = selectedTopping.length; //how many in selectedTopping array (chosen toppings)
  if (toppingCount > 1) {
    //if topping count is greater than one, subtract one from count
    toppingTotal = toppingCount - 1;
  } else {
    toppingTotal = 0;
  }
  runningTotal = runningTotal + toppingTotal; //adding topping total to runningTotal (receipt)
  console.log("total selected topping items: " + toppingCount);
  console.log(
    toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00"
  );
  console.log("topping text1: " + text1);
  console.log("Purchase Total: " + "$" + runningTotal + ".00");
  document.getElementById("showText").innerHTML = text1; //show listed order from text1
  document.getElementById("totalPrice").innerHTML =
    "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>"; //show total price of order
}
