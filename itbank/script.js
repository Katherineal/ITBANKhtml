function convertir(){
    var valor=parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML="<b>"+valor+"</b>";
    var de=document.getElementById("de").value;
    var a=document.getElementById("a").value;
    var dolar=349.99;
    var euro=380.29;
    resultado=0;

    if(de==1&&a==2){
        resultado=valor/dolar;
    }
    else if(de==1&&a==3){
        resultado=valor/euro;
    }
    else if(de==2&&a==1){
        resultado=valor*dolar;
    }
    else if(de==2&&a==3){
        resultado=valor*(dolar/euro);
    }
    else if(de==3&&a==1){
        resultado=valor*euro;
    }
    else if(de==3&&a==2){
        resultado=valor*(euro/dolar);
    }
    else{
        resultado=valor;
    }
    document.getElementById("resultado").innerHTML="Resultado: $"+resultado.toFixed(2);
}
