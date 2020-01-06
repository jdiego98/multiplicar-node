const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0]; // con el guion bajo se hace referencia al arreglo

console.log(comando);

switch (comando) {


    case 'listar':

        listarTabla(argv.base, argv.limite).then(archivo => {

            listarTabla();
        })

        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {

            console.log(`Archivo creado: ${archivo}`.green);

        }).catch(err => console.log(err));

        break;

    default:
        console.log('Comando no reconocido');


}





//let parametro = argv[2];
//let base = parametro.split('=')[1];

/*

crearArchivo(base).then(archivo => {

    console.log(`Archivo creado: ${archivo}`);

}).catch(err => console.log(`El valor introducido ${base} no es un numero`));


console.log(process.argv);

*/


//Crear archivos de texto

/*
const fs = require('fs');

let base = 7;
let data = '';


for (let i = 1; i < 10; i++) {

    data += (`${base} * ${i} = ${base * i}\n`);
}

fs.writeFile(`tablas/tabla-${base}`, data, (err) => {

    if (err) throw err;

    console.log('Se ha creado el archivo');
});*/