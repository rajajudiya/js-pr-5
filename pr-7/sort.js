const myColor = ["Red", "Green", "White", "Black"]
myColor.sort();
console.log("ascending order",myColor);


// ascending order
let numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];
console.log(numbers);
numbers.sort((a,b) => a-b );
console.log("ascending order",numbers);


// descending order
let numberss = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];
console.log(numberss);
numberss.sort((a,b) => b-a );
console.log("decending order",numberss);