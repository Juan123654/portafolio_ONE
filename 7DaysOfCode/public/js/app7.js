let nombre = prompt('Digite nombre');
let calculo = prompt('Digite el calculo a realizar:\n Suma, Resta, Multiplicacion, Division');
let total = 0;
let num1 = parseInt(prompt('Digite numero 1'));
console.log(num1);
let num2 = parseInt(prompt('Digite numero 2'));
console.log(num2);



if(calculo == 'suma'){
    total = suma(num1,num2);
    texto(nombre,calculo,total);
    //alert(`total: ${total}`);
}else if(calculo == 'resta'){
    total = resta(num1,num2);
    texto(nombre,calculo,total);
}else if(calculo == 'multiplicacion'){
    total = multiplicacion(num1,num2);
    texto(nombre,calculo,total);
}else if(calculo == 'division'){
    total = division(num1,num2);
    texto(nombre,calculo,total);
}else{
    alert(`no selecciono ninguna opcion`);
}



suma(1,1);

function texto(nombre,calculo,total){
    console.log(`Hola ${nombre}\n El total de la operacion ${calculo} es: ${total}`);
}

function suma(a, b){
    return a + b;
}
function resta(a, b){
    return a - b;
}
function multiplicacion(a, b){
    return a * b;
}
function division(a, b){
    if(b === 0){
        alert('no se puede realizar division en cero')
    }
    return a / b;
}