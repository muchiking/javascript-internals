
function Accumulator(num){
    this.value=num;
    this.read = function (){
        newnum=+prompt("enter number")
        this.value +=newnum;
    }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value);