// Example 1: Using logical OR (||) operator
var user = {
    name: "John",
    isAdmin: true
  };
  
  // If user.isAdmin is true, the console.log will not be triggered because true || anything is always true
  user.isAdmin || console.log("Welcome, " + user.name + "!"); 
  
  // If user.isAdmin is false, the console.log will be triggered because false || anything evaluates to the value of anything
  user.isAdmin = false;
  user.isAdmin || console.log("You do not have administrator privileges.");
  
  // Example 2: Using logical AND (&&) operator
  var age = 25;
  
  // If age is less than 18, the console.log will be triggered because true && anything is always equal to anything
  age < 18 && console.log("You must be 18 or older to access this content.");
  
  // If age is 18 or older, the console.log will not be triggered because false && anything is always equal to false
  age >= 18 && console.log("Welcome to the website!");
  
  // Example 3: Combining shortcut evaluation with conditional logic
  var isAuthenticated = false;
  var userLoggedIn = false;
  
  // If isAuthenticated is false, the console.log will be triggered because true || anything is always true
  isAuthenticated || console.log("Please log in to access this feature.");
  
  // If isAuthenticated is true and userLoggedIn is also true, the welcome message will be displayed
  isAuthenticated && userLoggedIn && console.log("Welcome back, user!");
  
  // If isAuthenticated is true but userLoggedIn is false, the console.log will remind the user to log in
  isAuthenticated && !userLoggedIn && console.log("Please log in to access your account.");