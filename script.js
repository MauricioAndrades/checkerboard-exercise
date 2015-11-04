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

var arralpha = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];
console.log(arralpha);
for (var i = 0 ; i< 9; i++) {
    alpha = arralpha[i];
    //console.log(alpha);
    for (j = 0 ; j < 12; j++) {
        r = Math.floor(Math.random()*256).toString();
        g = (Math.floor(Math.random()*256).toString());
        b = (Math.floor(Math.random()*256).toString());
        rgba = ('rgba('+r + ','+g +','+ b+','+ alpha +')');
        console.log(rgba);
        makeDiv(rgba);
    }
}
var body = document.getElementsByTagName("body");


