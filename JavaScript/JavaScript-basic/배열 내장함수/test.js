function countBiggerThanTen(numbers) {
    /* 
        1번째 방법 

        let count = 0;
        for(let i = 0; i < numbers.length; i ++){
            if (numbers[i] > 10)
                count++;
        }
        return count;
    */

    /*
        2번째 방법

        let count = 0;
        numbers.forEach(n => {
            if(n > 10) count++;
        });

        return count;
    */ 
    
    /*
        3번째 방법

        return numbers.filter(n => n > 10).length;
    */ 

    // 4번째 방법
    const cnt =  numbers.reduce((acc, current) => {
         if(current > 10)
             return acc+1;
         else
             return acc;
     }, 0);
    
     return cnt;
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5