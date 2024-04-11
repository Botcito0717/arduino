const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
require("dotenv").config();
const elementoRoutes = require("./routes/elemento");
const datoRoutes = require("./routes/datos");
const trabajadorRoutes = require('./routes/trabajador');
const bitacoraRoutes = require("./routes/bitacora");
const saveRoutes = require("./routes/save");

const app = express();
const port = process.env.PORT || 9000;

//const IP = "192.168.0.18";
//const IP = "192.168.3.36";
//const IP = "192.168.3.37"; 
//const IP = "192.168.3.13";

//middleware
app.use(express.json());
app.use(cors());
app.use('/api', trabajadorRoutes)
app.use('/api', elementoRoutes);
app.use('/api', datoRoutes);
app.use('/api', bitacoraRoutes);
app.use('/api', saveRoutes);

//routes
app.get('/', (req, res) => {
    res.send('Welcome to my api INTEGRADOR')
})

//mongodb connection
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB Atlas")).catch((error) => console.error(error));
app.listen(port, console.log(port));
