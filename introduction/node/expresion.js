function sayHi() {   // (1) create
    console.log( "Hello" );
  }
  
  let func = sayHi;    // (2) copy
  
  func(); // Hello     // (3) run the copy (it works)!
//   console.log(sayHi);
let sum = function(a, b) {
    return a + b;
  };

// console.log(sum(2,5));

let test = function(){
    return 2
}
// console.log(test())

let sum2 = (a, b) => a + b;
console.log(sum(10+11,3));

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

console.log( double(3) ); // 6

sayHi = () => console.log("Hello!");

sayHi();

ans=confirm("do you agree ")

var check=(ans==true)?alert("you agreed"):alert("you did not agree")