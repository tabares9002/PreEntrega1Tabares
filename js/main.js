alert ("Ingresando los Datos Podrá Calcular su Salario Semanal")

let pago = parseInt(prompt("Ingrese el Monto de su Salario por Hora:"))
let HorasTrabajadas = parseInt(prompt("Ingrese las Horas Trabajadas en la Semana:"))


const CalcularSalario = (pago, HorasTrabajadas) => {
if(HorasTrabajadas >40){
    let HorasExtras = (HorasTrabajadas - 40) * pago * 2
    let SalarioTotal = (HorasTrabajadas * pago) + HorasExtras
    alert ("El Total de su Salario Semanal es:" + " " + "$" + SalarioTotal)
}
else {
let SalarioTotal = (HorasTrabajadas * pago)
alert ("El Total de su Salario Semanal es" + " " + "$" + SalarioTotal)
}

}

CalcularSalario()





















// alert("Hola! Ingresando los datos solicitados podrá calcular su salario mensual")

// function DatosPersona() {
//     let nombre = prompt("Ingrese su nombre:");
//     let apellido = prompt("Ingrese su Apellido:");
// }

// function HorasTrabajadas() {
//     let salarioHora = parseInt(prompt("Ingrese el monto de su Salario por Hora:"));
//     let HorasDeTrabajo = parseInt(prompt("Ingrese las Horas Trabajadas en la Semana (Hasta 40hrs):"));
//     while (HorasDeTrabajo > 40) {
//         HorasDeTrabajo = parseInt(prompt("Error! Ingrese Nuevamente las Horas Trabajadas en la Semana (Hasta 30hrs):"));
//     }
//     return HorasDeTrabajo

// }


// let HorasExtras = (prompt("Ingrese Horas Extras Trabajadas:"));


// function CalcularSalario(salarioHora, HorasDeTrabajo){
// let SalarioTotal = (HorasDeTrabajo * salarioHora) * 4;

// }

// const Datos = DatosPersona()
// const salarioHora = HorasTrabajadas()
// const Resultado = CalcularSalario(salarioHora, HorasDeTrabajo)

// alert("Sr/a" + " " + nombre + " " + apellido + "\nSu salario mensual es" + " " + "$" + CalcularSalario);

// alert("Sr/a" + " " + nombre + " " + apellido + "\nSu salario mensual es" + " " + "$" + SalarioTotal);