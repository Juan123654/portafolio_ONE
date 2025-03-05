

let nombre = prompt(`Digita tu nombre`);

let categorias = ['frutas','lacteos','congelados','dulces'];
let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];


let alimento = prompt(`Deseas agregar un alimento a tu lista de compras`);

while(alimento.toLowerCase() === 'si'){
    
    let categoriasLista = categorias.join('\n');
    alert(`estas son las categorias: \n${categoriasLista}`);
    
    let alimentoAgregar = prompt(`Digita el alimento`);
    
    let categoriaAlimento = prompt(`Digita la categoria`);
    if(categoriaAlimento.toLowerCase() === 'frutas'){
       frutas.push(alimentoAgregar);
    }
    if(categoriaAlimento.toLowerCase() === 'lacteos'){
        lacteos.push(alimentoAgregar);
    }
    if(categoriaAlimento.toLowerCase() === 'congelados'){
        congelados.push(alimentoAgregar);
    }
    if(categoriaAlimento.toLowerCase() === 'dulces'){
        dulces.push(alimentoAgregar);
    }
    alimento = prompt(`Deseas agregar un alimento a tu lista de compras`);

    /*for(let i = 0; i<categorias.length;i++){
        //console.log(categorias[i]);
        //alert(`estas son las categorias ${categorias[i]}`);
    }*/
}

function mostrarAlimentos(categoria){
    return categoria.length > 0 ? categoria.join(', ') : 'Ninguno';
    /*for(let i = 0;i<categoria.length;i++){
        return categoria[i]
        //console.log();
    }*/
}

alert(`
    Hola ${nombre}\n
    lista de compras:\n
        Frutas: ${mostrarAlimentos(frutas)}
        Lacteos: ${mostrarAlimentos(lacteos)}
        Congelados: ${mostrarAlimentos(congelados)}
        Dulces: ${mostrarAlimentos(dulces)}
    `);

//mostrarAlimentos(lacteos);