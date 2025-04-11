`user strict`;

// Task 1
// the alert will be Hello, because the condition checks if the string contains a value, which it does, so its true.

// Task 2
let answer = prompt("What is the offical name of JavaScript?")
if(answer === "ECMAScript")
  alert("Correct!");
else
  alert("You dont know? its ECMAScript!");

// Task 3
let score = 75;
let grade = score >= 90 ? `A` :
            score >= 80 ? `B` :
            score >= 70 ? `C` :
            score >= 60 ? `D` : `F`

console.log("Grade is: ", grade);

// Task 4
let num = prompt("Enter a number")
if(num > 0)
  alert(`1`)
else if(num < 0)
alert(`-1`)
else
alert(`0`)

// Task 5
let result = a+b < 4 ? `Not enough` : `A lot`;

// Task 6
let message = login == `Employee` ? `Hello` : login == `Director` ? `Hello` : login == `` ? `No login` : ``;

// Task 7
console.log( false || 'sdf' ); // true
console.log( false && '' ); // false
console.log( true || '' ); // true
console.log( true && '' ); // false
console.log( undefined || null ); // true
console.log( undefined || 0 || null ); // true
console.log( undefined && 0 && null ); // false
console.log( 1 || 0 ); // true
console.log( null || 1 ); // true
console.log( null || 0 || 1 ); // true

// Saher Haddad , Igor Nikonov