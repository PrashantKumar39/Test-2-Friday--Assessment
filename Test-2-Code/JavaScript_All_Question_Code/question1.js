function mostRepeatedChar(str) {
    const map = {};
    let maxCount = 0;
    let maxChar = '';
  
    for (let char of str) {
      map[char] = (map[char] || 0) + 1;
      if (map[char] > maxCount) {
        maxCount = map[char];
        maxChar = char;
      }
    }
  
    return maxChar;
  }
  
  console.log(mostRepeatedChar("aabbbcc"));
  