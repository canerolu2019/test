var money = 1; 
var price = 2; 
var chocolates = 0; 

do {
    money -= price; 
    chocolates++;    
}
while(money >= price); 

document.write("Am " + chocolates + " ciocolate"); 
document.write("<br>");
document.write("Am " + money + " lei");