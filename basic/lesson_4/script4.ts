

//object

const rentCar = ( car: {name: string, year?: number}): string => {
    return `This is ${car.name} and created at ${car.year}` 

}

console.log(rentCar({name: 'BMW', year: 2001} ));

