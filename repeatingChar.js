function compress(chars) {
    let m = 0; 
    let n = 0; 
    let count = 1; 
    while (m < chars.length) {
      if (m < chars.length - 1 && chars[m] === chars[m + 1]) {
        count++;
      } else {
        chars[n] = chars[m];
        n++;
        if (count > 1) {
          const countChars = count.toString().split('');
          for (const char of countChars) {
            chars[n] = char;
            n++;
          }
        }
        count = 1;
      }
      m++;
    }
    return n;
  }
  
 
  const chars = ["a", "a", "b", "b", "c", "c", "c"];
  const compressedLength = compress(chars);
  console.log(chars.slice(0, compressedLength));
  console.log(compressedLength); 
  