function A(name){ this.name}
function B(name) { this.name }

let a = new A("jack");
let b = new B("jack");

console.log( a == b ); // true
console.log( a  ); // true