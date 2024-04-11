const express = require("express");
const bitacoraSchema = require("../models/bitacora");

const router = express.Router();

//create dato
router.post("/bitacora", (req, res) =>{
    const bitacora = bitacoraSchema(req.body);
    bitacora
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}));
});

//get all datos
router.get("/bitacora", (req, res) =>{
    bitacoraSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}));
});

/*//get a datos
router.get("/datos/:id", (req, res) =>{
    const { id } = req.params;
    datoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}));
});
 

router.get('/datos', (req, res) => {
    datoSchema.find()
        .then((data) => {
            const datosFormateados = {};

            data.forEach((item, index) => {
                datosFormateados[`elemento${index + 1}`] = item.elemento;
                datosFormateados[`valor${index + 1}`] = item.valor;
            });

            res.json(data);
        })
        .catch((error) => res.json({ message: error }));
});*/


module.exports = router;