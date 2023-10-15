"use strict";
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
// type Employee = {
//     readonly id: number;
//     name: string;
//     retire: (date: Date)=> void
// }
// let employee: Employee = {
//     id: 1,
//     name: 'Fredrick',
//     retire: (date: Date)=>{
//         console.log(date);
//     }
// }
// console.log(employee);
// UNION TYPES
// function kgtoLbs (weight: number | string) : number {
//     // Narrowing
//     if (typeof weight === 'number')
//         return weight * 2.9
//     else
//         return parseInt(weight) * 3.3
// }
// console.log(kgtoLbs('100'));
// INTERSECTION TYPES
//  type Draggable = {
//     drag: () =>  void
//  };
//  type Resizable = {
//     resize: () => void
//  };
//  type UIWidget = Draggable & Resizable;
// let texBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }
// LITERAL TYPES
// Literal  (exact, specific)
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;
// type Metric = 'cm' | 'inch'
// let meter: Metric = 'inch'
// NULLABLE TYPES
// function greet (name: string | null| undefined) {
//     if(name)
//         console.log(name.toUpperCase());
//     else
//         console.log('Salom');    
// }
// console.log(greet(null));
// OPTIONAL CHAINING
