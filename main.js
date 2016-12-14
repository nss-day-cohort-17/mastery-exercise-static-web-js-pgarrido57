var pineHeight = document.getElementById("pineHeight");
var character = document.getElementById("character");
var grow = document.getElementById("grow");

function growTree() {
  var fraserFir = {
    height: document.getElementById("pineHeight").value,
    key: document.getElementById("character").value,
  }
  xmas(fraserFir)
}

var xmas = function(tree) {
  if (pineHeight.value === "" || character.value === "") {
    alert("Can't leave anything blank! Please fill in both questions.");
  }else{
  for (var i = 0; i < tree.height; i++) {
    var design = " ".repeat(tree.height - i);
    design += tree.key.repeat((2 * i) + 1);
    console.log(design);
    }
  }
}

pineHeight.addEventListener("keypress", function() {
  if (event.keyCode === 13) {
    growTree();
  };
});

character.addEventListener("keypress", function() {
  if (event.keyCode === 13) {
    growTree();
  };
});

grow.addEventListener("click", growTree);
