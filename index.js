const { registrar, leer } = require('./operaciones.js');

const [operacion, id] = process.argv.slice[2];

if (operacion === 'registrar') {
    registrar(id, nombre, edad, animal, color, enfermedad)
};

if (operacion === 'leer') {
    leer()
};