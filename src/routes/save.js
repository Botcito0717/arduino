const express = require("express");
const elementoSchema = require("../models/elemento");
const datoSchema = require("../models/datos");
const datosFormateados = {};
const router = express.Router();

router.get("/save-data/:valor", (req, res) => {
  elementoSchema
    .find()
    .then((data) => {
        console.log("Ya quedo");
      const { valor } = req.params;
      let adatos = valor;

      let tagId = {
        elemento: "TagId",
        valor: adatos,
      };

      const datos = datoSchema(tagId);
      datos
        .save();


      data.forEach((item, index) => {
        datosFormateados[item.elemento] = item.statusdato;
      });

      res.json(datosFormateados);
      console.log(datosFormateados);
    })
    .catch((error) => res.json({ message: error }));
});
router.get("/save-data/:valor", (req, res) => {
  elementoSchema
    .find()
    .then((data) => {
        console.log("Ya quedo");
      const { valor } = req.params;
      let adatos = valor;

      let tagId = {
        elemento: "TagId",
        valor: adatos,
      };

      const datos = datoSchema(tagId);
      datos
        .save();


      data.forEach((item, index) => {
        datosFormateados[item.elemento] = item.statusdato;
      });

      res.json(datosFormateados);
      console.log(datosFormateados);
    })
    .catch((error) => res.json({ message: error }));
});

module.exports = router;