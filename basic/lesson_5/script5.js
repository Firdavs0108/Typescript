"use strict";
// Literal type
//  type actionType = 'show' | 'hide';
//  function logger(action: actionType): boolean {
//     switch(action){
//         case 'hide' :
//          return false;
//         case 'show' :
//          return true
//     }
//  }
//  console.log(logger);
// ENUM///////////
var Dictionary;
(function (Dictionary) {
    Dictionary[Dictionary["rus"] = 0] = "rus";
    Dictionary[Dictionary["uzb"] = 1] = "uzb";
    Dictionary[Dictionary["eng"] = 2] = "eng";
})(Dictionary || (Dictionary = {}));
var Decision;
(function (Decision) {
    Decision[Decision["yes"] = 1] = "yes";
    Decision["no"] = "no";
})(Decision || (Decision = {}));
const uzbIndex = Dictionary.uzb;
const uzbK = Dictionary[uzbIndex];
console.log(uzbK);
// Tuples = Array
const num = [1, '2', 2];
console.log(num);
function loggerTime(data) {
    console.log(new Date());
    return data;
}
loggerTime(9);
loggerTime('Firdavs');
