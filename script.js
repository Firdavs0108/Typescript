// const fullName = 'Firdavs'
// console.log(fullName);
// const surnameMn: string = 'Nazarov'
// console.log(surnameMn);
//array
var colors = ['red', 'black', 'white'];
//any
// let smth: any = 1
// console.log(smth);
// smth='Helen'
// console.log(smth);
//Functions
// function latter(a: number | string): void {
//     if(typeof a === 'number') {
//         console.log(a.toFixed());
//     } else if (typeof a === 'string') {
//         console.log(a.toLocaleLowerCase); 
//     }
// }
// console.log(latter(20));
//with mapping
// const arr: number [] = [1,2,3,4]
// arr.map((arr:number) => arr.toFixed )
// console.log(arr);
//object
var logCar = function (car) {
    return "This is ".concat(car.name, " and created at ").concat(car.year);
};
console.log(logCar({ name: 'BMW', year: 2001 }));
