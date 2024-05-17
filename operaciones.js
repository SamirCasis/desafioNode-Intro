const fs = require('fs');

const registrar = (id, nombre, edad, mascota, color, sintomas) => {
    const citas = JSON.parse(fs.readFileSync('coleccion.json', 'utf-8'))
    const citaData = {
        id: id,
        nombre: nombre,
        edad: edad,
        mascota: mascota,
        color: color,
        sintomas: sintomas
    }
    fs.writeFileSync('citaData.json',)
};

const leer = (id, nombre, edad, mascota, color, sintomas) => {
    const citas = JSON.parse(fs.readFileSync('coleccion.json', 'utf-8'))
    const citaData = {
        id: id,
        nombre: nombre,
        edad: edad,
        mascota: mascota,
        color: color,
        sintomas: sintomas
    }
};

module.exports = { registrar, leer }; 