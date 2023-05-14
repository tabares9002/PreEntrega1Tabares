//ENTRADA DE DATOS
alert ("Venta de Remeras $250 cada una")

const IVA = 21;
let precio = 250;
let descuento = 0;


let cantidad = 0;

while ((cantidad <= 0) || (cantidad > 10)) {
    cantidad = parseInt(prompt("Ingrese la cantida de productos (Hasta 10 productos):"));
}

let plazo = 0;

while ((plazo != 4) && (plazo != 6) && (plazo != 12)){
    plazo = parseInt(prompt("Ingrese la cantida de cuotas (4/6/12):"));
}

switch (plazo) {
    case 4:
        descuento = 10;
        break;
    case 6:
        descuento = 5;
        break;
    case 12:
        descuento = 3;
        break;
    default:
        break;
}


//CALCULOS

function calculoDeDescuento(plazo, cantidad, precio){
let precioInicial = (cantidad * precio);
prompt (precioInicial + "Precio");
}
