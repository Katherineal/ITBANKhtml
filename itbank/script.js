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

document.getElementById("botonCalculo").addEventListener("click", calculadora);
        
        function calculadora() {
            console.log("probando a ver si anda");
            const montoPrestamo = parseFloat(document.getElementById("monto-prestamo").value); //monto del prestamo ingresado x usuario.
            const tasaInteres = parseFloat(document.getElementById("tasa").value / 100); //tasa de interes ingresada x el usuario.
            const plazoPrestamo = parseFloat(document.getElementById("plazo-prestamo").value); //plazo del prestamo ingresado x el usuario.
        
            const tasaMensual = tasaInteres / 12; //calculo para tasa de interes mensual.
            const pagoTotales = plazoPrestamo; //numero total de cuotas.
        
            const pagoMensual = (montoPrestamo * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -pagoTotales)); //calculo de cuota mensual.
            const pagoTotal = pagoMensual * pagoTotales; //Monto total a pagar sumando todas las cuotas mensuales.
        
            //Mostramos los datos.
            document.getElementById("total-a-pagar").textContent = pagoTotal.toFixed(2);
            document.getElementById("cuota-mensual").textContent = pagoMensual.toFixed(2);
        }
document.addEventListener('DOMContentLoaded',()=>{
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel,{
        duration:150
    })
});