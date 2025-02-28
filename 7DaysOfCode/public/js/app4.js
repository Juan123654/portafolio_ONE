console.log(`Hola eje 4`);
let numeroMaximo = 10;
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
let usuario = "";
let intentos  = "";

console.log(numeroGenerado);

//let usuario = prompt(`Digite el numero a adivinar`);


while (usuario != numeroGenerado && intentos<3){
    usuario = prompt(`Digite el numero a adivinar`);
    //alert(`Adivinaste el numero era ${numeroGenerado}`);
        if(usuario == numeroGenerado){
            alert(`Adivinaste el numero era ${numeroGenerado}`);
        }else{
        if(numeroGenerado>usuario){
            alert(`numero es mayor`);
        }else{
            alert(`numero es menor`);
        }
        intentos++
        alert(`Intentos permitidos 3 de ${intentos}`);
        if(intentos == 3){
            alert(`Perdiste`);
        }
        console.log(intentos);
    }    
}