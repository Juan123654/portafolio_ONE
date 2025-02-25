//sin sentido
/*
console.log( false == '0' );

console.log( null == undefined );

console.log( " \t\r\n" == 0 );

console.log( ' ' == 0 );
*/
//ejercicio
let numeroUn = 1

let stringUn = '1'

let numeroTreinta = 30

let stringTreinta = '30'

let numeroDiez = '1'

let stringDiez = 1


if(numeroUn === stringUn){
    console.log(`Las variables numeroUn y stringUn tienen el mismo valor, y mismo tipo`);
} else if(numeroUn == stringUn){
    console.log(`Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes`);
}else{
    console.log(`Las variables numeroUn y stringUn tienen diferente valor`);
}

if (numeroTreinta === stringTreinta) {
    console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
} else if(numeroTreinta == stringTreinta){
    console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
}else{
    console.log(`Las variables numeroTreinta y stringTreinta tienen diferente valor`);
}

if (numeroDiez === stringDiez) {
    console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, y mismo tipo')
} else if(numeroDiez == stringDiez){
    console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipo diferente')
}else{
    console.log(`Las variables numeroDiez y stringDiez tienen diferente valor`);
}