const fs = require('fs');

const registrar = (nombre, edad, mascota, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
    const nuevoId = Math.floor(Math.random() * 50).toString();
    if (!nombre || !edad || !mascota || !color || !enfermedad) {  // verifica que se ingresen todos los datos
        console.error('Debes ingresar la totalidad de los datos')
        return; // retorna el mensaje de error
    }
    citas.push({ nuevoId, nombre, edad, mascota, color, enfermedad })
    fs.writeFileSync('citas.json', JSON.stringify(citas))
};

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
    console.log(citas);
}

module.exports = { registrar, leer };