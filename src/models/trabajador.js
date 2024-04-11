const mongoose = require("mongoose");

const trabajadorSchema = mongoose.Schema({
    tagId:{
        type: String,
    },
    nombreCompleto: {
        nombre: {
            type: String,
            required: true
        },
        apPaterno: {
            type: String,
            required: true
        },
        apMaterno: {
            type: String
        }
    },
    direccion: {
        avenida: {
            type: Number,
            required: true
        },
        calle: {
            type: Number,
            required: true
        },
        colonia: {
            type: String,
            required: true
        },
        ciudad: {
            type: String,
            required: true
        }
    },
    telefonos: {
        type: [Number],
        required: true
    },
    rol: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('trabajador', trabajadorSchema);