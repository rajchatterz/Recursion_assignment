function checkSpecialChar(s){
    let result = new Set()
    
   for(let i = 0;i<s.length;i++){
    let arr = s[i]

    if(arr === '(' || arr ===')' || arr=== ','){
        result.add(arr)
    }
   }
   if(result.has('(')){
    return true
   }
   if(result.has(")")){
    return true
   }
   if(result.has(",")){
    return true
   }
   return false
   
   
}

console.log(checkSpecialChar("Rahh"))
