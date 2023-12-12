const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5

function maxDistance(movements) {
    let derecha=0;
    let izquierda=0;
    for(let n =0; n<movements.length; n++){
        if(movements.charAt(n)=='>'){
            derecha++;
            izquierda--;
        }else if(movements.charAt(n)=='<'){
            derecha--;
            izquierda++;
        }else{
            derecha++;
            izquierda++;
        }
    }
    if(derecha>izquierda){
        return derecha;
    }
    return izquierda;
    
}