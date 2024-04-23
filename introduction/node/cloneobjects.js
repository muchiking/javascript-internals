let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user);
  
 console.log( user.sizes === clone.sizes ); // true, same object
 console.log( user === clone ); // true, same object
  
  // user and clone share sizes
  user.sizes.width = 60;    // change a property from one place
 console.log(clone.sizes.width);



//  ll
let user2 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone2 = structuredClone(user);
  
 console.log( user2.sizes === clone2.sizes ); // false, different objects
  
  // user and clone are totally unrelated now
  user2.sizes.width = 20;    // change a property from one place
 console.log(clone2.sizes.width);
 console.log(user2.sizes.width);


 let user3 = {};
// let's create a circular reference:
// user.me references the user itself
user3.me = user;

let clone3 = structuredClone(user);
console.log(clone3.me === user3);