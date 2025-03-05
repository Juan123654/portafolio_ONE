let nombre = prompt(`Digita tu nombre`);

let categorias = ['frutas', 'lacteos', 'congelados', 'dulces'];
let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];

let continuar = true;

while (continuar) {
    let alimento = prompt(`¿Deseas agregar un alimento a tu lista de compras? (si/no)`);
    
    if (alimento.toLowerCase() === 'si') {
        let categoriasLista = categorias.join('\n');
        alert(`Estas son las categorías:\n${categoriasLista}`);
        
        let alimentoAgregar = prompt(`Digita el alimento`);
        let categoriaAlimento = prompt(`Digita la categoría`);
        
        if (categoriaAlimento.toLowerCase() === 'frutas') {
            frutas.push(alimentoAgregar);
        } else if (categoriaAlimento.toLowerCase() === 'lacteos') {
            lacteos.push(alimentoAgregar);
        } else if (categoriaAlimento.toLowerCase() === 'congelados') {
            congelados.push(alimentoAgregar);
        } else if (categoriaAlimento.toLowerCase() === 'dulces') {
            dulces.push(alimentoAgregar);
        } else {
            alert("Categoría no válida.");
        }
    } else if (alimento.toLowerCase() === 'no') {
        let eliminar = prompt(`¿Deseas eliminar un alimento de tu lista de compras? (si/no)`);
        
        if (eliminar.toLowerCase() === 'si') {
            let categoriaEliminar = prompt(`¿De qué categoría deseas eliminar un alimento? (frutas/lacteos/congelados/dulces)`);
            let alimentoEliminar = prompt(`¿Qué alimento deseas eliminar?`);

            // Lógica para eliminar alimento de la categoría correspondiente
            if (categoriaEliminar.toLowerCase() === 'frutas') {
                frutas = frutas.filter(item => item !== alimentoEliminar);
            } else if (categoriaEliminar.toLowerCase() === 'lacteos') {
                lacteos = lacteos.filter(item => item !== alimentoEliminar);
            } else if (categoriaEliminar.toLowerCase() === 'congelados') {
                congelados = congelados.filter(item => item !== alimentoEliminar);
            } else if (categoriaEliminar.toLowerCase() === 'dulces') {
                dulces = dulces.filter(item => item !== alimentoEliminar);
            } else {
                alert("Categoría no válida.");
            }
        }
    } else {
        continuar = false; // Salir del bucle si el usuario no desea agregar más alimentos
    }
}

function mostrarAlimentos(categoria) {
    return categoria.length > 0 ? categoria.join(', ') : 'Ninguno';
}

alert(`
    Hola ${nombre}\n
    Lista de compras:\n
    Frutas: ${mostrarAlimentos(frutas)}
    Lácteos: ${mostrarAlimentos(lacteos)}
    Congelados: ${mostrarAlimentos(congelados)}
    Dulces: ${mostrarAlimentos(dulces)}
`);