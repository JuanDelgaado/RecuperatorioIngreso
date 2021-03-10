function mostrar()
{
    let carrera;
    let sexo;
    let materia;
    let nota;
    let edad;
    let edadmin;
    let edadMax;
    let nombreMax;
    let nombreMin;
    let flagpromedio = 1;
    let flagMat = 1;
    let flagedad = 1;
    let maxMateria;

    for(i=0;i>500;i++){
        carrera = prompt("Ingrese carrera: quimica/fisica/sistemas");
        while(carrera != "quimica" && carrera != "fisica" && carrera != "sistemas"){
            carrera = prompt("Error. Reingrese carrera: quimica/fisica/sistemas");

        }
        sexo = prompt("Ingrese sexo: masculino/femenino/nobinario");
        while(sexo != "masculino" && sexo != "femenino" && sexo != "nobinario"){
            sexo = prompt("Error. Reingrese sexo masculino/femenino/nobinario");
            }
        materia = parseInt(prompt("Ingrese la cantidad de materias 1 a 5"));
        while(materia < 1 || materia > 5 || isNaN(materia)){
        materia = parseInt(prompt("Error. Reingrese la cantidad de materias 1 a 5"));

        }
        nota = parseInt(prompt("Ingrese nota entre 0/10: "));
        while(nota < 0 || nota > 10 || isNaN(nota)){
        nota = parseInt(prompt("Error. Reingrese nota entre 0/10: "));
        }
        edad = parseInt(prompt("Ingrese edad: "));
        while(edad < 0 || isNaN(edad)){
        edad = parseInt(prompt("Error. Reingrese edad: "));
        }
        if (sexo == "femenino"){
            if (flagedad || edad < edadmin){
                edadmin+= edad;
                nombreMin = nombre;
                flag = 0;
                
            }
        }
        if(sexo == "masculino" && materia != "quimica"){
            if(flagMat || materia > maxMateria){
                maxMateria+= materia;
                edadMax = edad;
                nombreMax = nombre;
                flagMat = 0;
            }
        }

       


    }
   console.log ("a-");
   console.log ("b- Nombre de la alumna mas joven: " + nombreMin);
   console.log ("c- ");
   console.log ("d- Edad: " + edadMax + " Nombre: " + nombreMax + " que cursa mas materias");
}
