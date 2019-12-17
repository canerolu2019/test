var car = {
    make: "Wolkswagen",
    model: "Polo" ,
    year:  2006, 
    color: "gray", 
    passengers: 4, 
    mileage: 2000, 
    engineIsOn: false, 
    fuel: 50, 
    maxFuel: 50, 
    mediumConsumption: 7.5, 
    refill: function(num) { 
        if(this.fuel + num > this.maxFuel) { 
            this.fuel = this.maxFuel;
            console.log("Too much!"); 
        } else {
            this.fuel += num;
        }
    }, 
    drive: function(distance) {  
        if(this.distanceToEmpty() < distance) {
            console.log("Too far!"); 
            distance = this.distanceToEmpty();
        }
        consumption = distance * this.mediumConsumption / 100; 
        this.fuel -= consumption; 
        this.mileage += distance;    
    }, 
    distanceToEmpty: function() {
        return Math.round(this.fuel / this.mediumConsumption * 100);
    },
    stop: function() {   
       if(!this.engineIsOn) {
       this.engineIsOn = false; 
       console.log("Car stopped");
    } else { 
        console.log("Car is already stopped");
    }
},            
    start:function() {
       if(this.engineIsOn) {
       this.engineIsOn = false; 
       console.log("Car stopped");     
       } else {
           console.log("Car is already stopped");
       }
    },
}   

car.mileage = 2000; 
console.log(car.year); 
console.log(car.mileage); 
car.start(); 
car.start(); 
car.engineIsOn = false;  

car.drive(100); 
console.log(car.fuel);
car.drive(800); 
console.log(car.fuel); 
car.refill(30); 
console.log(car.fuel);
for(prop in car) {
    console.log(prop + " = " + car[prop]);
}