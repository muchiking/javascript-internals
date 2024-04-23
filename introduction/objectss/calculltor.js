function Calculator(){
    this.num1;
    this.num2;
    this.read = function (a,b){
        this.num1=a;
        this.num2=b;
    };
    this.sum = function(){
        return this.num1+this.num2;
    };
    this.mul= function(){
        return this.num1*this.num2;
    };
}


let calculator = new Calculator();
calculator.read(5,8);

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );