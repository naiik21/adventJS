adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (ya están alternadas)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (cambias la segunda luz a 🟢)


function adjustLights(lights) {
    let luz;
    let luz2;
    let error=0;

    if(lights[0]=='🟢'){
        luz='🟢';
        luz2='🔴';
    }else{
        luz='🔴';
        luz2='🟢';
    }

    for(let n=0; n<lights.length; n++){
        if(luz!=lights[n]){
            error++;
        }
        let aux=luz;
        luz=luz2;
        luz2=aux;
    }

    return error;
  }