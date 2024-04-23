let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function multiplyNumeric(obj){
    for(let i in obj){
        console.log(typeof(obj[i]));
        if (typeof(obj[i] )== "number"){
            menu[i]=obj[i] *2
            
        }
        // console.log(typeof(obj[i]));
        // console.log(obj[i]);
    }

  }
  multiplyNumeric(menu);
  console.log(menu);