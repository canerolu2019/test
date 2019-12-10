    var name = "Can"
    var message ="Hello" + name + "!"; 
    var timeout =3000; 
    var isNight = true; 
    var isMorning = true; 
    var nothing = null; 

    var date = new Date();
    var hour = date.getHours();
   
   
    if(hour >=20 || hour <= 6) {
        alert("Noapte Buna!"); 
        alert("Somn usor!");
    } else if(hour ==0) {
        alert ("Happy New Year!");
    } else if(hour <= 17) {
        alert ("Buna dimineata!");
    } else {
        alert("Buna ziua!");
    } 

    setTimeout(sayHello, timeout) 
    function sayHello() { 

    alert(message);
    } 