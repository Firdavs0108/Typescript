// // ENUM/////


// enum Size {small = 1, medium, large}
 
// let mySize: Size = Size.medium
// console.log(mySize);



// // FUNCTION/////////

// function calculateTax (income: number, taxYear = 2021) : number {
//     if(taxYear < 2022)
//         return income * 2.3;
//     return income * 3.2
// }

// calculateTax(10.000)
// console.log(calculateTax(10.000));


// TYPE ALIASES

type Employee = {
    readonly id: number;
    name: string;
    retire: (date: Date)=> void
}


let employee: Employee = {
    id: 1,
    name: 'Fredrick',
    retire: (date: Date)=>{
        console.log(date);
        
    }

}

console.log(employee);


