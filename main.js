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

grow.addEventListener("click");
