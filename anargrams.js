function findAnagrams(s, p) {
    const result = [];
    const pMap = new Map();
    const sMap = new Map();
    for (const char of p) {
      pMap.set(char, (pMap.get(char) || 0) + 1);
    }
  
    let left = 0; 
    let right = 0; 
    let matched = 0; 
  
    while (right < s.length) {
      const char = s[right];
  
      
      sMap.set(char, (sMap.get(char) || 0) + 1);
 
      if (pMap.has(char) && sMap.get(char) <= pMap.get(char)) {
        matched++;
      }
  
      
      if (matched === p.length) {
        result.push(left);
      }
  
      
      if (right >= p.length - 1) {
        const leftChar = s[left];
        sMap.set(leftChar, sMap.get(leftChar) - 1);
        if (pMap.has(leftChar) && sMap.get(leftChar) < pMap.get(leftChar)) {
          matched--;
        }
        left++;
      }
  
      right++; 
    }
  
    return result;
  }
  
  
  const s = "cbaebabacd";
  const p = "abc";
  const anagramIndices = findAnagrams(s, p);
  console.log(anagramIndices); 
  