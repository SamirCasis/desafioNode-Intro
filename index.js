const { registrar, leer } = require('./operaciones.js');

const [operacion, id, nombre, edad, mascota, color, enfermedad] = process.argv.slice[2];

if (operacion === 'registrar') {
    registrar(id, nombre, edad, mascota, color, enfermedad)
};

if (operacion === 'leer') {
    leer()
};