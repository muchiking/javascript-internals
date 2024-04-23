function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
  alert( checkSpam('buy ViAgRA now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("innocent rabbit") );
console.log(checkSpam('buy ViAgRA now') )
console.log(checkSpam('free xxxxx') )
console.log(checkSpam("innocent rabbit") )