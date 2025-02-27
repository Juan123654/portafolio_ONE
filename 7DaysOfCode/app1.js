//ejercicio 1
/*desarrollar un programa simulando una de esas aplicaciones. Debe pedir al usuario responder 3 preguntas*/


let name = prompt(`¿Cuál es tu nombre?`);
let anios = prompt(`¿Cuántos años tienes?`);
let language = prompt(`¿Qué lenguaje de programación estás estudiando?`);

alert(`Hola ${name}, tienes ${anios} años y ya estás aprendiendo ${language}!`);

let answer = parseInt(prompt(`¿Te gusta estudiar ${language}? Responde con el número 1 para SI o 2 para NO.`));

if ( answer == 1){
    alert(`¡Muy bien! Sigue estudiando y tendrás mucho éxito.`);
}else{
    alert(`Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?`)
}

