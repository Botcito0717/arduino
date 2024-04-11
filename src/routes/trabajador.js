const express = require("express");
const trabajadorSchema = require("../models/trabajador");

const router = express.Router();

//create elemento
router.post("/trabajador", (req, res) =>{
    const trabajador = trabajadorSchema(req.body);
    trabajador
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}));
});



router.get('/trabajador', (req, res) => {
    trabajadorSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}));
});


router.put("/trabajador/:id", (req, res) => {
    const { id } = req.params;
    const { nombreCompleto, direccion, telefonos, rol } = req.body;

    // Crear objeto con los campos que se van a actualizar
    const updateData = {};
    if (nombreCompleto) updateData.nombreCompleto = nombreCompleto;
    if (direccion) updateData.direccion = direccion;
    if (telefonos) updateData.telefonos = telefonos;
    if (rol) updateData.rol = rol;

    // Realizar la actualización en la base de datos
    trabajadorSchema.findByIdAndUpdate(id, updateData, { new: true })
        .then((trabajadorActualizado) => {
            if (!trabajadorActualizado) {
                return res.status(404).json({ message: "Trabajador no encontrado" });
            }
            res.json(trabajadorActualizado);
        })
        .catch((error) => res.status(500).json({ message: error.message }));
});

router.get('/trabajador/:tagId', (req, res) => {
    const tagId = req.params.tagId;
  
    trabajadorSchema.findOne({ tagId: tagId }, { rol: 1, _id: 0 }) // Proyección de campos
      .then(trabajador => {
        let respuesta;
        if (!trabajador) {
          respuesta = { rol:"No existe" };
        } else {
          respuesta = { rol: trabajador.rol };
        }
        res.json(respuesta);
      })
      .catch(error => {
        console.error('Error al buscar trabajador:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
      });
  });


module.exports = router;