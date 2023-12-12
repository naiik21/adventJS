const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus

function decode(message) {
    let aux="";
    for(let n=0; n<message.length; n++){
        if(message.charAt(n)=='('){
            //console.log(message.substring(n));
            for(let i=1; i<message.substring(n).length; i++){
                //console.log(n);
                aux= aux + message.charAt(i);
                if(message.charAt(i)==')'){
                    return aux;
                }
            }
        }
        
    }
    return ''
  }