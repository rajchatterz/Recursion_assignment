function deleteOneChar(w1,w2){
    
    let result = []

    for(let i=0 ;i<w1.length;i++){
        if(w1[i]==='s'){
            result.push(1)
        }
    }
    for(let j=0 ;j<w2.length;j++){
        if(w2[j]==='t'){
            result.push(1)
        }
    }
    let newResult = [result[0]+result[1]]
    newResult.map(e=>console.log(e))
}

deleteOneChar('sea','eat')