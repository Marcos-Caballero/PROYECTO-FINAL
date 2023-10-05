import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import router from "./routes/notas.js";

/* raiz de la app */
const app = express();
/* Concexión a la db */
mongoose.connect('mongodb://127.0.0.1:27017/notas')
.then(() => {
    console.log('Conectado a la base de datos')
})
/* Configuracion */
app.set('PORT', 3000)
/* Middleware */
app.use(morgan('dev'))
app.use(express.json())
/* Rutas */
app.use('/api/', router)
/* Servidor arrancando */
app.listen(app.get('PORT'), (
    console.log("Servidor corriendo en puerto 3000")
))