//this includes the vehicle class as a module
const VehicleModule = require('.vehicle')

class Car extends VehicleModule {
 constructor(make, model, year, color, mileage) {
 super(make, model, year, color, mileage)
 this.maximumPassengers = 5
 this.passenger = 0
 this.numberOfWheels = 4
 this.maximumSpeed = 160
 this.fuel = 10
 this.scheduleService = false

 }


loadPassenger(num) { //Can't see full prompt on the activity page
    if (this.passenger < this.maximumPassengers) {
        if ((num + this.passenger) <= this.maxPassengers) {
            this.passenger = num;
            return this.passenger;
    }
}
}

start() {
    if (fuel > 0){
        return this.started = true
    } else {
        return this.started = false
    }
}

scheduleService(mileage) {
    if (this.mileage > 30000){
        this.scheduleService = true
        return this.scheduleService
    }
}
}


//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
