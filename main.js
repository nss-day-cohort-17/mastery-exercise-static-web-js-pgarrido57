var pineHieght = document.getElementById("pineHieght");
var character = document.getElementById("character");
var grow = document.getElementById("grow");

var xmas = function() {
  var fraserFir = {
    height: pineHieght.value,
    key: character.value,
  }
  console.log(fraserFir.height, fraserFir.key);
}

for (var i = 0; i < fraserFir.height; i++) {
  var design = " ".repeat(fraserFir.height - i);
  design += fraserFir.key.repeat((2 * i) + 1);
  console.log(design)
}

if (fraserFir.height === " ", fraserFir.key === " ") {
  alert("Can't leave anything blank! Please fill in both questions.");
}

pineHieght.addEventListener("keypress", function() {
  if (event.keyCode === 13) {
    grow.click();
  };
});

character.addEventListener("keypress", function() {
  if (event.keyCode === 13) {
    grow.click();
  };
});

grow.addEventListener("click", xmas);
