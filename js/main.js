let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su Apellido:");
let HorasDeTrabajo = parseInt(prompt("Ingrese las Horas Trabajadas en la Semana (Hasta 40hrs):"));
let salarioHora = parseInt(prompt("Ingrese el monto de su Salario por Hora:"));
let HorasExtras = (prompt("Trabajó Horas Extras? (Si/No):"));

while (HorasDeTrabajo > 40) {
    HorasDeTrabajo = parseInt(prompt("Error! Ingrese Nuevamente las Horas Trabajadas en la Semana (Hasta 30hrs):"));
}

// if (HorasExtras == Si) {
//     let CantidadHorasExtras = parseInt(prompt("Ingrese Cantidad de Horas Extras Trabajadas:"));
// }

let SalarioTotal = (HorasDeTrabajo * salarioHora)*4;
alert("Sr/a" + " " + nombre + " " + apellido + "\nSu salario mensual es" + " " + "$" + SalarioTotal);

// function CalcularSalario()
// CalcularSalario();