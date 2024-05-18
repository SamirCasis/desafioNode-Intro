const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
    const nuevoId = Math.floor(Math.random() * 50).toString();
    if (!nombre || !edad || !tipo || !color || !enfermedad) {  // verifica que se ingresen todos los datos
        console.error('Debes ingresar la totalidad de los datos')
        return; // retorna el mensaje de error
    }
    citas.push({ nuevoId, nombre, edad, tipo, color, enfermedad })
    fs.writeFileSync('citas.json', JSON.stringify(citas))
};

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
    if (!fs.existsSync('citas.json')) { // verifica si existe citas.json
        console.error('El archivo citas.json no existe');
        return [];  // retorna array vacio
    };
    console.log(citas);
}

module.exports = { registrar, leer };