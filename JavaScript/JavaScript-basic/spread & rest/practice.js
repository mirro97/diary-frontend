function max(...rest) {
    return rest.reduce((acc, current) => current > acc ? current : acc, 0);
  }
  
  const result = max(1, 2, 3, 4, 10, 5, 6, 7);
  console.log(result);
  