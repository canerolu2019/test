var button = document.querySelector("input"); 

function showTime() {
    var date = Date(); 
    document.getElementById("time").innerHTML = date;
}
function changeStyle() {
    Element.className = "newStyle";
}

showTime();
 // button.onclick = showTime; 
 // button.onclick = changeStyle;  
 button.addEventListener("click", showTime); 
 button.addEventListener("click", changeStyle); 

 button.removeEventListener("click", changeStyle);
 