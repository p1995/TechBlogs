// type Direction = "left" | "right"; // String literal type
// let move: Direction = "left"; // Valid
// move = "right"; // Valid
// move = "up"; // Error: Type '"up"' is not assignable to type 'Direction'.

// type Age = 18 | 21; // Numeric literal type
// let myAge: Age = 21; // Valid
// myAge = 18; // Valid
// myAge = 25; // Error: Type '25' is not assignable to type 'Age'.



//without literals

let move: string = "left";
move = "right"; // Valid
move = "up"; // Doesn't error for invalid values
