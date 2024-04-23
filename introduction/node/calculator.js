let calculator = {
 a:0,
 b:0,
 read(){
    this.a=+prompt("enter num1")
    this.b=+prompt("enter num2")
 },
 sum(){
    console.log(this.a+this.b);
    return (this.a+this.b);
 },
 mul(){
    console.log(this.a*this.b);
    return (this.a*this.b);

 }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );