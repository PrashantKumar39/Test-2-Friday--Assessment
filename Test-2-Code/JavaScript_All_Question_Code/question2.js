function findUnique(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
  
    const result = [];
  
    for (let item of set1) {
      if (!set2.has(item)) result.push(item);
    }
    for (let item of set2) {
      if (!set1.has(item)) result.push(item);
    }
  
    return result;
  }
  
  console.log(findUnique([1, 2, 3], [2, 4, 5]));
  