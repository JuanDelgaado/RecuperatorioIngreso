
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let sexoMax;
	let sueldoMax;
	let sueldoFemMax;
	let contProgNB = 0; // progamador no binario
	let nombreFemMax;
	let flag = 1;
	let flagsueldo = 1;
	let maxSueldoF; // maximo sueldo femenino
	let Cont = 0;
	let progNB;// progamadores no binarios
	let seguir;

	do{
		nombre = prompt("Ingrese el nombre: ");
		edad = parseInt(prompt("Ingrese la edad: "));
		while(edad < 0 || isNaN(edad)){
		edad = parseInt(prompt("Error. Reingrese la edad: "));
		}
		sexo = prompt("Ingrese sexo masculino/femenino/nobinario");
		while(sexo != "masculino" && sexo != "femenino" && sexo != "nobinario"){
		sexo = prompt("Error. Reingrese sexo masculino/femenino/nobinario");
		}
		puesto = prompt("Ingrese puesto: programador/analista/Qa");
		while(puesto != "programador" && puesto != "analista" && puesto != "Qa"){
		puesto = prompt("Error. Reingrese puesto: programador/analista/Qa");
		}
		sueldo = parseInt (prompt("Ingrese sueldo entre 15000/70000"));
		while(sueldo < 15000 || sueldo > 70000 ){
		sueldo = parseInt (prompt("Error. Reingrese sueldo entre 15000/70000"));
		}
		if(flag || sueldo > sueldoMax){
			sueldoMax+= sueldo;
			sexoMax = sexo;
			flag = 0
		}
		if (sexo == "femenino"){
			if (flagsueldo || sueldo > sueldoFemMax ){
				sueldoFemMax+= sueldo;
				nombreFemMax = nombre;

			}
		}
		if(puesto == "programador" && sexo == "nobinario" && sueldo > 20000 && sueldo < 55000){
			contProgNB++;

		}

		
		
		


		seguir = prompt("Desea ingresar otro empleado");
	}while(seguir == "s");
	console.log ("a- ")
	console.log ("b- sexo de mayor sueldo: " + sexoMax);
	console.log ("c- Nombre del empleado femenino con mas sueldo: " + nombreFemMax);
	console.log ("d- cantidad de programadores no binarios: " + contProgNB);

}
