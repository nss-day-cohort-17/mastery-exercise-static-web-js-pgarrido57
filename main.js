var pineHieght = document.getElementById("pineHieght");
var character = document.getElementById("character");
var grow = document.getElementById("grow");

function growTree() {
  xmas(fraserFir)
}

var xmas = function(tree) {
  if (pineHieght.value === "" || character.value === "") {
    alert("Can't leave anything blank! Please fill in both questions.");
  }
  tree.height = pineHieght.value
  tree.key = character.value
  for (var i = 0; i < tree.height; i++) {
    var design = " ".repeat(tree.height - i);
    design += tree.key.repeat((2 * i) + 1);
    console.log(design);
  }
}

pineHieght.addEventListener("keypress", function() {
  if (event.keyCode === 13) {
    grow.click(fraserFir);
  };
});

character.addEventListener("keypress", function() {
  if (event.keyCode === 13) {
    grow.click(fraserFir);
  };
});

grow.addEventListener("click", growTree);
