// create a new constructer
// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//   }
  
//   let user = new User("Jack");
//   let user2 = new User("Jack");
  
//  console.log(user.name); // Jack
//   console.log(user); // false
//   console.log(user2); // false


  function User3(name) {
    if (!new.target) { // if you run me without new
      return new User3(name); // ...I will add new for you
    }
  
    this.name = name;
    this.admin = "false";
  }
  
  let john = User3("John"); // redirects call to new User
  console.log(john.name); // John
  console.log(john); // John

