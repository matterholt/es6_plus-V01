function htmlFunctions() {
  //Template Literals
  let TempLit = '\n concating strings useing the "backtick"';
  let word1 = "Matthew";
  let word2 = "Atterholt";
  const oldFullName = word1 + " " + word2;
  const newFullName = `${word1} ${word2}`;
  console.log(TempLit);
  console.log(oldFullName);
  console.log(newFullName);
  //unknown numbers
  let TempLit2 = "\n adding uknown number with string";
  let num1 = 2;
  let num2 = 3;
  const numbString = `${num1 + num2} ${word1}`;
  console.log(TempLit2);
  console.log(numbString);
  //example mulit line -OLD way
  let oldExample = "hello \n" + "world!";
  console.log(oldExample);
  document.getElementById("oldExample").innerText = oldExample;
  let templateLit1 = `${word1} 
                        ${word2}`;
  document.getElementById("templateLit").innerText = templateLit1;
}

//Bonus Info -How can I use this in app and other things....
//String Substitution
let name = "Matterholt";
console.log(`Yo, ${name}`);
//expression interpolation
let a = 10;
let b = 10;
console.log(`JS first apperared ${a + b} years ago. Crazy!`);
console.log(
  `The number of JS MVC frameworks is ${2 * (a + b)}
   and not ${10 * (a + b)}.`
);
//able to use for function inside
function fn() {
  return "I am a result. Rarr";
}
console.log(`foo ${fn()} bar`);

//look in to for better understanding
ffn`Hello ${you}! You're looking ${adjective} today!`;
ffn(["Hello ", "! You're looking ", " today!"], you, adjective);
