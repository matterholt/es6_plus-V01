let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1];

example2.push(true);

console.log(example1);
console.log(example2);

//also use with objects
let example3 = {
  fistName: "matt"
};

let example3_1 = {
  ...example3
};
console.log(example3_1);
