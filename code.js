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
onEvent("winScreen", "click", function() {
    reset();
});
onEvent("loseScreen", "click", function() {
    reset();
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
function reset() {
    setScreen("battleScreen");
    computerHealth = 300;
    myHealth = 300;
    setProperty("oddHealthBar", "width", computerHealth);
    setProperty("geoHealthBar", "width", myHealth);
    setProperty("oddHealthBar", "background-color", "#1abc9c");
    setProperty("geoHealthBar", "background-color", "#1abc9c");
}
