
//Your code above ^^^
function sing(){
    let cancion="";
    for(let i=0; i<4;i++){
        cancion = cancion +"let it be, ";
    }
    cancion= cancion + "words of wisdom,";
    for(let i=0; i<5; i++){
        cancion = cancion + " let it be,";
    }
    cancion= cancion + " there will be an answer, let it be";
    return cancion;
}

console.log(sing());