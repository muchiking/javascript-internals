for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
    // if (i % 2 == 0) break;
  
    console.log(i); // 1, then 3, 5, 7, 9
  }