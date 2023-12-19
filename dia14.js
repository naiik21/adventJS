
/*maxGifts([2, 4, 2]) // 4 (4)
maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
maxGifts([1, 3, 1, 3, 100]) // 103 (3 + 100)
*/
maxGifts([2, 7, 9, 3, 1])

/*
regalos=9
aux=[2, 7, 9, 3, 1]
houses=[2, 1]
ordenades=[ 7, 3, 2, 1]
num= 9
pos= 2
*/

/*
regalos=11
aux=[2, 7, 9, 3, 1]
houses=[2, 1]
ordenades=[2, 1]
num= 2
pos= 0
*/

/*
regalos=11
aux=[2, 7, 9, 3, 1]
houses=[2, 7, 9, 3, 1]
ordenades=[9, 3, 1]
num= 2
pos= 0
*/

function maxGifts(houses) {
    let regalos=0;
    let aux =houses.slice();
    
    while(houses.length>0){
        let ordenado= houses.slice();
        //houses= aux.slice();
        ordenado.sort((a, b) => b-a);
        let num = ordenado[0];
        let pos = houses.indexOf(ordenado[0]);
        if (num > -1) { 
            regalos += num
            if(pos==houses.length-1){
                houses.splice(pos -1,2);
            }else if (pos== 0){
                houses.splice(pos, 2);
            }else{
                houses.splice(pos -1,3);
            }
            ordenado.shift();
        }
        console.log(ordenado);
    }
    console.log(houses);
    console.log(regalos);
    return regalos
}