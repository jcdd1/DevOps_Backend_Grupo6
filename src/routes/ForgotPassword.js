const express = require('express');
const router = express.Router();
const ForgotPassword = require('../controllers/ForgotPassword'); // Importar la lógica de ForgotPassword

// Endpoint para la recuperación de contraseña
router.post('/forgot-password', ForgotPassword);

module.exports = router;
