const result1 = organizeGifts(`76a11b`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)

  */

function organizeGifts(gifts) {
    let tipoRegalos=[];
    let abc='abcçdefghijklmnopqrstuvwxyz';
    let regalo="";
    let result='';

    for(let n=0; n<gifts.length; n++){
        regalo += gifts.charAt(n);

        if(abc.includes(gifts.charAt(n))){
            tipoRegalos.push(regalo);
            regalo="";
        }
    }


    for(let n=0; n<tipoRegalos.length; n++){
        let bolsa;
        let cajas;
        let pales;
        let aux='';

        let num=parseInt(tipoRegalos[n].substring(0, tipoRegalos[n].length-1));
        let letra=tipoRegalos[n].substring(tipoRegalos[n].length-1);
 
        cajas= parseInt(num/10);
        bolsa=num%10;
        pales=parseInt(cajas/5);
        cajas=cajas%5;
        for(let n=0; n<pales;n++){
            result += `[${letra}]`;
        }
        for(let n=0; n<cajas;n++){
            result += `{${letra}}`;
        }
        if(bolsa>0){
            aux='(';
            for(let n=0; n<bolsa;n++){
                aux+= `${letra}`;
            }
            aux += ')';
        }
        result+= aux;
    }

    return result;    
}