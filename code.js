var myHealth = 300;
var computerHealth = 300;

onEvent("poisonBtn", "click", function() {
  poison();
});
onEvent("punchBtn", "click", function() {
  punch();
});
onEvent("battleScreen", "keypress", function(event) {
  if (event.key == "a") {
    punch();
  } else if (event.key == "l") {
    poison();
  }
});

// functions

function punch() {
  computerHealth -= randomNumber(30, 60);
  setProperty("oddHealthBar", "width", computerHealth);
  if (computerHealth < 150) {
    setProperty("oddHealthBar", "background-color", "red");
  }
  if (computerHealth <= 0) {
    setScreen("winScreen");
  }
}
function poison() {
  myHealth -= randomNumber(30, 60);
  setProperty("geoHealthBar", "width", myHealth);
  if (myHealth < 150) {
    setProperty("geoHealthBar", "background-color", "red");
  }
  if (myHealth <= 0) {
    setScreen("loseScreen");
  }
}
