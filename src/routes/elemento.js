const express = require("express");
const elementoSchema = require("../models/elemento");

const router = express.Router();

//create elemento
router.post("/elemento", (req, res) =>{
    const elemento = elementoSchema(req.body);
    elemento
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}));
});



router.get('/elemento', (req, res) => {
    elementoSchema.find()
        .then((data) => {
            const datosFormateados = {};

            data.forEach((item, index) => {
                datosFormateados[item.elemento] = item.statusdato;
            });

            res.json(datosFormateados);
        })
        .catch((error) => res.json({ message: error }));
});


router.put("/elementos/:id", (req, res) => {
    const { id } = req.params;
    const { elemento, statusdato } = req.body;
    elementoSchema.updateOne({ _id: id }, { $set: { elemento, statusdato }}).
    then((data) => res.json(data)).catch((error) => res.json({ message: error  }));
})


module.exports = router;