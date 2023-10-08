//object
var rentCar = function (car) {
    return "This is ".concat(car.name, " and created at ").concat(car.year);
};
console.log(rentCar({ name: 'BMW', year: 2001 }));
