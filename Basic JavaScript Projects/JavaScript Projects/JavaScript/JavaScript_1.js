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
