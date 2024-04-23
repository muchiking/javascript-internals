function ucFirst(name){
    name=name;
    name2=name.slice(1,name.lenght );
    return name[0].toUpperCase()+name2;
}
console.log(ucFirst("john") == "John");
console.log(ucFirst("jamed"))