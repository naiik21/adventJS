const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/

function cyberReindeer(road, time) {
    let result=[];
    let pos;
    let aux="";
    let barrera=false;
    result.push(road);
    for(let n=1; n<time; n++){
        if(n==5){
            road= road.replaceAll('|', '*');
        }
        pos=road.indexOf('S');
        if(road.charAt(pos+1)=='|'){
        }else{
            aux=road.substring(0, pos);
            if(barrera){
                aux+='*';
            }else{
                aux+='.';
            }
            aux+='S';
            if(road.charAt(pos+1)=='*'){
                barrera=true;
            }else{
                barrera=false;
            }
            aux+=road.substring(pos+2);
            road=aux;
        }
        result.push(road);
    }
    return result;
}