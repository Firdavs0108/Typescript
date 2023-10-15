
// class User {
//     email: string;
//     name: string;
  
//     constructor(email: string, name: string) {
//       this.email = email;
//       this.name = name;
//     }
//   }
  
//   const fredrick = new User('gdfgd@gmail', 'Fred');
//   console.log(fredrick.email); // Outputs 'gdfgd@gmail'
//   console.log(fredrick.name);  // Outputs 'Fred'
  



class User {

    constructor(
        public email: string, 
        public name: string) {
    }

    get getAppleEmail(): string {
        return `apple ${this.email}`
    }
    

  }
  
  const fredrick = new User('gdfgd@gmail', 'Fred');
  console.log(fredrick.email); // Outputs 'gdfgd@gmail'
  console.log(fredrick.name);  // Outputs 'Fred'