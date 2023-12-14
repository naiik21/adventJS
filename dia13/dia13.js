calculateTime(['00:10:00', '01:00:00', '03:30:00'])
// '-02:20:00'

calculateTime(['02:00:00', '05:00:00', '00:30:00'])
// '00:30:00'

calculateTime([
  '00:45:00',
  '00:45:00',
  '00:00:30',
  '00:00:30'
]) // '-05:29:00'


function calculateTime(deliveries) {
    const date1 = new Date('December 14, 2023 07:00:00');
    const date2 = new Date(`December 14, 2023 00:00:00`);
    
    for (const time of deliveries) {
        date2.setHours(date2.getHours()+parseInt(time.substring(0,2)));
        date2.setMinutes(date2.getMinutes()+parseInt(time.substring(3,5)));
        date2.setSeconds(date2.getSeconds()+parseInt(time.substring(6,8)));
    }

    let segons=(date1-date2)/(1000);
    let minuts;
    let hores;
    let hora;
    let aux=false;

    minuts=parseInt(segons/60);
    segons=segons%60;
    hores=parseInt(minuts/60);
    minuts=minuts%60;

    if(segons.toString().includes('-')){
        segons=segons.toString().replace('-','');
        aux= true;
    }
    if(minuts.toString().includes('-')){
        minuts=minuts.toString().replace('-','');
        aux= true;
    }
    if(hores.toString().includes('-')){
        hores=hores.toString().replace('-','');
        aux= true;
    }
    segons=segons.toString().padStart(2, '0');
    minuts=minuts.toString().padStart(2, '0');
    hores=hores.toString().padStart(2, '0');
    
    hora=hores+ ":" +minuts+ ":" +segons
    if(hora==="00:00:00"){
        return "00:00:00";
    }
    if(!aux){
        hora= '-'+hora;
    }

    return hora;
  }