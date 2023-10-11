
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

enum Dictionary {
    rus,
    uzb,
    eng,
}

enum Decision {
    yes = 1,
    no = 'no'
}


const uzbIndex = Dictionary.uzb;
const uzbK = Dictionary[uzbIndex]

console.log(uzbK);



// Tuples = Array
const num : [number,string,number] = [1,'2', 2]

console.log(num);

 