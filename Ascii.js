

function lowestAsciiVal(s1,s2){
    let newS1 = s1.split("")
    let newS2 = s2.split("")
    let result=[]
    for(let i=0;i<newS1.length;i++){
        if(newS1[i]=='s'){
            result.push(newS1[i].charCodeAt())
        }
    }
    for(let j=0;j<newS2.length;j++){
        if(newS2[j]=='t'){
            result.push(newS2[j].charCodeAt())
        }
    }
    let newresult = result[0]+result[1]
    return newresult
}
console.log(lowestAsciiVal('sea','eat'))