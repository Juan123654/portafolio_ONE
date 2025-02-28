console.log("Hola");
let respuesta = "";
let name = prompt(`Digita tu nombre`);

let user = prompt(`¿Quieres ser programador?`);
user.toUpperCase();
if(user == 'SI'){
    let respuesta;
    let tipo = prompt(`Digita 1 para ser FrontEnd o 2 para ser BackEnd`);
    switch (tipo) {
        case 1:
            let tipoFrontend = prompt(`Quiere aprender React digita 1 o Vue digita 2`);
            respuesta = true;
            break;
    
        case 2:
            let tipoBackEnd = prompt(`Quiere aprender C# digita 1 o Java digita 2`);
            respuesta = true;
            break;
    }
        let eleccion = prompt(`seguir especializándose en el área elegida o desarrollarse para convertirse en Fullstack`);
    
    let tecnologias = prompt(`Hay alguna otra tecnología que te gustaría aprender`);
    tecnologias.toUpperCase();
    while(tecnologias != "OK"){
        tecnologias = prompt(`Hay alguna otra tecnología que te gustaría aprender`);
    }
}else{
    alert(`Continua tu camino ${name}`);
}