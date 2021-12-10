var startingNumber = 15; //global! used in Add() function

//================================
//Working FUNCTION using global variable, declares local variable
//================================
function Add() {
  document.getElementById("Adding").innerHTML = result(); //get result from function result()
  function result() {
    var errorStartValue = 7; //local!! used in BadAdd() function
    function addOn() {
      startingNumber += 20; //add 20 to starting number
    }
    addOn(); // call function
    return startingNumber; //return result ing value of starting number
  }
}
console.log(errorStartValue); //log var to console - error

//================================
// BAD FUNCTION - errorStartValue hasn't been defined here, it is locally defined in Add() function above
//================================
function BadAdd() {
  document.getElementById("BadAdding").innerHTML = result(); //get result from result()
  function result() {
    function error() {
      errorStartValue += 20; //add 20 to (error) starting number
    }
    error(); //call function
    return errorStartValue; //return new value
  }
}

//================================
//  Method Assignment
//================================
function officeHours() {
  if (new Date().getHours() < 18 && new Date().getHours() > 7)
    //if time is less than 1800 and greater than 700
    document.getElementById("officeHours").innerHTML =
      "Yes! How are you today?";
  else {
    document.getElementById("officeHours").innerHTML =
      "We are closed. Hours are 7-18"; //else time is not within range
  }
}

//================================
//  Method demo - If/else
//================================
function CanDrive() {
  var Age, canDrive; //declare var age and var candrive local
  Age = document.getElementById("DriveStatus").value; //age = the value input from user
  var lowAge = 16 - Age; //determine years away from 16 driving age
  if (Age < 16) {
    document.getElementById("Drive").innerHTML =
      "You're " +
      Age +
      " years old. You're too young for your driver's license. Come back in " +
      lowAge +
      " years.";
  } else {
    document.getElementById("Drive").innerHTML =
      "You're " + Age + " years old. You're old enough for a driver's license.";
  }
}

//================================
//  Else Assignment
//================================
function VerifyPremiumUser() {
  var AccountWorth;
  AccountWorth = document.getElementById("VerifyUser").value; //AccountWorth = the value input from user
  var AmountNeeded = 1500 - AccountWorth; //determine investment needed for premium
  var AmountExceeded = AccountWorth - 1500; //determine worth above premium limit
  if (AccountWorth < 1500) {
    document.getElementById("UserStatus").innerHTML =
      "Your account is not Premium status. Invest $" +
      AmountNeeded +
      " more to become premium.";
  } else {
    document.getElementById("UserStatus").innerHTML =
      "You're a premium customer. Your account exceeds threshold by $" +
      AmountExceeded +
      ".";
  }
}

//================================
//  Else If example
//================================
function Time_function() {
  var Time = new Date().getHours(); //assign new instance of Date().getHours() value to var Time
  var Reply; //used later for result
  if (Time < 12 == Time > 0) {
    Reply = "It's morning time!";
  } else if (Time >= 12 == Time < 18) {
    Reply = "It is afternoon.";
  } else {
    Reply = "It is evening time.";
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}

//================================
//  Else If demo
//================================
function VerifyUserTier() {
  var AccountWorth;
  AccountWorth = document.getElementById("VerifyAccount").value; //AccountWorth = the value input from user
  var AmountNeeded = 1500 - AccountWorth; //determine investment needed for tiers
  var ExceededGold = AccountWorth - 3000; //determine worth above Gold limit
  var ExceededSilver = AccountWorth - 2000; //determine worth above Silver limit
  var ExceededBronze = AccountWorth - 1500; //determine worth above bronze limit
  var NeededForGold = 3000 - AccountWorth;
  var NeededForSilver = 2000 - AccountWorth;
  if (AccountWorth < 1500) {
    document.getElementById("AccountStatus").innerHTML =
      "Your account is in the Starter Tier. Invest $" +
      AmountNeeded +
      " more to become Bronze Tier.";
  } else if (AccountWorth < 2000 == AccountWorth >= 1500) {
    document.getElementById("AccountStatus").innerHTML =
      "You're a Bronze Account. Your portfolio worth exceeds the Bronze threshold by $" +
      ExceededBronze +
      ". Invest $" +
      NeededForSilver +
      " more to become Silver Tier";
  } else if (AccountWorth < 3000 == AccountWorth >= 2000) {
    document.getElementById("AccountStatus").innerHTML =
      "You're a Silver Account. Your portfolio worth exceeds the Silver threshold by $" +
      ExceededSilver +
      ". Invest $" +
      NeededForGold +
      " more to become Gold Tier";
  } else {
    document.getElementById("AccountStatus").innerHTML =
      "You're a Gold Account. Your portfolio worth exceeds the Gold threshold by $" +
      ExceededGold +
      ".";
  }
}
