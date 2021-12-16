function validateForm() {
  let fName = document.forms["ContactForm"]["First_Name"].value;
  let lName = document.forms["ContactForm"]["Last_Name"].value;
  let eMail = document.forms["ContactForm"]["Email"].value;
  let pass = document.forms["ContactForm"]["Password"].value;
  if (fName == "" || lName == "" || eMail == "" || pass == "") {
    alert("Fill out all fields");
    return false;
  }
}
