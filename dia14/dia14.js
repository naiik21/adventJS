maxGifts([2, 4, 2]) // 4 (4)

maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
maxGifts([1, 3, 1, 3, 100]) // 103 (3 + 100)


function maxGifts(houses) {
    let ordenado= houses.toSorted((a, b) => b-a);
    let regalos=0;
    let num = ordenado[0];
    let pos = houses.indexOf(ordenado[0]);
    if (num > -1) { 
        regalos += num
        houses.splice(pos -1, 3);
    
    }
    console.log(regalos);
    console.log(houses)
    return 0
  }