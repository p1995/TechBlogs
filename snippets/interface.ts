interface Animal {
    makeSound(): void;
  }
  
  class Dog implements Animal {
    makeSound() {
      console.log("Woof!");
    }
  }
  
  class Cat implements Animal {
    makeSound() {
      console.log("Meow!");
    }
  }

// ------------------------------

  interface Flyable {
    fly(): void;
  }
  
  interface Swimmable {
    swim(): void;
  }
  
  class Duck implements Flyable, Swimmable {
    fly() {
      console.log("Flying");
    }
    
    swim() {
      console.log("Swimming");
    }
  }
  
  const duck = new Duck();
  duck.fly();  // Output: Flying
  duck.swim(); // Output: Swimming
  
//   -------------------------
// interface A {
//     method(): string;
//   }
  
//   interface B {
//     method(): number;
//   }
  
//   class C implements A, B {
//     // Error: Class 'C' incorrectly implements interface 'B'. 
//     // Property 'method' is incompatible with the index signature.
//     method(): string {
//       return "Hello"; // Conflict: can't return both string and number
//     }
//   }


// ----------------
interface Car {
    make: string;
    model: string;
    year: number;
    drive(): void;
  }
  
  const myCar: Car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    drive() {
      console.log("Driving the car...");
    }
  };
  
  myCar.drive(); // Output: Driving the car...

//   --------------
// interface Animal {
//     name: string;
//     makeSound(): void;
//   }
  
//   interface Dog extends Animal {
//     breed: string;
//   }

//   class MyDog implements Dog {
//     name: string;
//     breed: string;
    
//     constructor(name: string, breed: string) {
//       this.name = name;
//       this.breed = breed;
//     }
  
//     makeSound() {
//       console.log("Woof!");
//     }
//   }
  
  