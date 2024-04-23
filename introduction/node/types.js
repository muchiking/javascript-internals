let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); 

// numbers 

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);
c++;

console.log( a ); // 3
console.log( c ); // 0

// prefix and postfix
pre= 5
c = ++pre
console.log(pre)
console.log(c)

d= pre++; 
console.log(pre)
console.log(d)

