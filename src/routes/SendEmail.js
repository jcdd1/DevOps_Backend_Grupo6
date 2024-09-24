const express = require('express');
const router = express.Router();
const SendEmail = require('../controllers/SendEmail'); // Importar la lógica de SendEmail

// Endpoint para enviar un correo electrónico
router.post('/send-email', (req, res) => {
    const { email, subject, text } = req.body; // Datos necesarios para enviar el correo
    SendEmail(email, subject, text)
        .then(() => res.status(200).json({ message: "Correo enviado con éxito" }))
        .catch(error => res.status(500).json({ error: "Error al enviar el correo", details: error }));
});

module.exports = router;
