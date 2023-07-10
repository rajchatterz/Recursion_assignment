let s = "4(2(3)(1))(6(5))"
function bionarytree(s){
    let newS = s.split("")

let result=[]
for(let i=0;i<newS.length;i++){
    if(newS[i]!=='(' && newS[i]!==')'){
        result.push(newS[i])
    }
}
console.log(result.join(","))
}
bionarytree(s)