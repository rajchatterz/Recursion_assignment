function decodeString(s) {
    const result = [];
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (char !== ']') {
        result.push(char);
      } else {
        let curr = result.pop();
        let str = '';
        while (curr !== '[') {
          str = curr + str;
          curr = result.pop();
        }
        let num = '';
        curr = result.pop();
        while (!isNaN(Number(curr))) {
          num = curr + num;
          curr = result.pop();
        }
        result.push(curr);
        result.push(str.repeat(Number(num)));
      }
    }
    return result.join('');
  }
  
  const s = "3[a]2[bc]";
  const decodedString = decodeString(s);
  console.log(decodedString); 
  