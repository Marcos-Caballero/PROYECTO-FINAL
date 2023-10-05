import { Router } from "express";
/* Importando el esquema */
import Notas from "../../models/nota.js";

/* Rutas */
const router = Router();
/* Solicitud get */
router.get('/notas', async(req, res) => {
    const notas = await Notas.find();
    res.send(notas)
})

router.post('/notas', async(req, res) => {
    const nota = new Notas({
        title: req.body.title,
        content: req.body.content,
    })
    await nota.save()
    res.send(nota)
/*     res.status(200).send('¡Nota creada!') */
})

export default router;