function potencia(base,expoente){
    let resultado= 1;
    for (let i=0;i<expoente; i++){
    resultado = resultado*base;
    }
    return resultado;
    }
    console.log(potencia(2,10));