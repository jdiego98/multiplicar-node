const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {

    console.log('=========================='.red);
    console.log(`Tabla de ${base} de color`.green);
    console.log('=========================='.blue);
    return new Promise((resolve, reject) => {


        for (let i = 1; i < limite; i++) {

            console.log(`${base} * ${i} = ${base * i}`);

        }


    });

}


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';


        for (let i = 1; i < limite; i++) {

            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base},txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`tablas/tabla-${base}.txt`);

            console.log('Se ha creado el archivo');
        });



    });

}

module.exports = {
    crearArchivo,
    listarTabla
}