

//  Type, interfaces//////////////////////////////////////////////////





//object

// const rentCar = ( car: {name: string, year?: number}): string => {
//     return `This is ${car.name} and created at ${car.year}` 

// }

// console.log(rentCar({name: 'BMW', year: 2001} ));



// type carType = {
//     name: string;
//     year?: number;
// }

// type stringOrnumber = string | number;

// interface ICar {
//     name: string;
//     year?: number;
// }

// interface BCar extends ICar {
//     color: string;
//     extraBallon: number;
// }

// const rentCar = ( car: ICar): string => {
//     return `This is ${car.name} and created at ${car.year}` 
// }

// const logBMW = (data: BCar): void => {
//     console.log(data.name);
    
// }

// console.log(rentCar({name: 'BMW', year: 2001} ));

interface carModel {
    name: string;
    color: string;
    isBallon: boolean;
    speed: speedCar;
    price: {
        white: number;
        black: number
    }  
}

interface speedCar {
    max: number;
    min: number;
}

