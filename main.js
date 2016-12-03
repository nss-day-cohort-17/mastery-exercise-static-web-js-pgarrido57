var pineHieght = document.getElementById("pineHieght");
var character = document.getElementById("character");
var grow = document.getElementById("grow");

pineHieght.addEventListener("keypress", function() {
    if (event.keyCode === 13){
        grow.click();
    };
});

character.addEventListener("keypress", function() {
    if (event.keyCode === 13){
        grow.click();
    };
});

grow.addEventListener("click", xmas);

var xmas = function () {
    var fraserFir = {
        height: document.getElementById("height").value,
        key: document.getElementById("key").value,
    }
console.log(fraserFir.height, fraserFir.key)
}
