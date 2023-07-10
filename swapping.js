function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
    if (s === goal) {
      const seen = new Set();
      for (let i = 0; i < s.length; i++) {
        if (seen.has(s[i])) {
          return true;
        }
        seen.add(s[i]);
      }
      return false;
    }
    const diffs = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        diffs.push(i);
      }
    }
    return (
      diffs.length === 2 &&
      s[diffs[0]] === goal[diffs[1]] &&
      s[diffs[1]] === goal[diffs[0]]
    );
  }
  const s = "abw";
  const goal = "wba";
  const result = buddyStrings(s, goal);
  console.log(result); 
  