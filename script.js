// Your JS goes here

//newDiv RED

var makeDiv = function(color) {
    var newDiv = document.createElement("div");
    document.body.appendChild(newDiv);
    newDiv.className = "container";
    newDiv.style.paddingBottom = "11.1%";
    newDiv.style.backgroundColor = color;
    newDiv.style.width = "11.1%";
    newDiv.style.float = "left";
    return newDiv;
};

for (i = 0 ; i< 9*12; i++) {
    makeDiv("black");
    makeDiv("red");
}

var body = document.getElementsByTagName("body");


