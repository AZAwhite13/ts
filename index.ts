//1

// const numbers: number[] = [10, 20, 30, 40, 50];
// numbers.push(60);
// console.log(numbers);

// const fruits1: string[] = ["olma", "banan", "shaftoli"];
// const fruits2: Array<string> = ["anor", "uzum", "olcha"];
// console.log(fruits1, fruits2);


//2

// const person: [string, number] = ["Aziz", 16];
// console.log(person);

// Tuple tartibi [string, number] ko'rsatilgan lekin berilgan qiymatlar [number, string] tartibida yozilgan.
// let user: [string, number] = ["Ali", 25];

//3

// type ID = number;

// const userId: ID = 111;
// const productId: ID = 007;
// console.log(userId, productId);



// type Student = {
//     name: string;
//     age: number;
// };

// const student1: Student = { name: "Jasur", age: 90 };
// const student2: Student = { name: "Aziz", age: 16 };
// console.log(student1, student2);

//4

// let id: string | number;
// id = 1;
// console.log(id);
// id = "USER-1";
// console.log(id);

// const mixedArray: (string | number)[] = [1, "olma", 2, "banan"];
// console.log(mixedArray);

//5

// function add(a: number, b: number): number {
//     return a + b;
// }

// console.log(add(5, 7)); 

// function greet(name: string): string {
//     return `Salom, ${name}!`;
// }

// console.log(greet("Ali"));    

//6

// let direction: "left" | "right" | "up" | "down";
// direction = "left";
// console.log(direction);
// direction = "up";
// console.log(direction);
