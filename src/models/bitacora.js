const mongoose = require("mongoose");

const bitacoraSchema = mongoose.Schema({
    idTrabajador: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    fechaHora: {
        type: Date,
        default: Date.now 
    }
});

module.exports = mongoose.model('bitacora', bitacoraSchema);