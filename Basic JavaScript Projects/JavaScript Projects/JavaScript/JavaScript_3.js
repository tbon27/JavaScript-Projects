function displayType(name) {
  var playerPosition = name.getAttribute("data-player_position");
  alert(
    name.innerHTML + " is the " + playerPosition + " in this starting lineup!"
  );
}
