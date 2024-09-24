const { connection, dataSource } = require('../database');
const SendEmail = require('./SendEmail'); 
const crypto = require('crypto'); 
const dotenv = require('dotenv');

dotenv.config(); 


function generateResetToken() {
    return crypto.randomBytes(32).toString('hex');
}


const ForgotPassword = async (req, res) => {
    try {
        const { email } = req.body; 
        const repository = dataSource.getRepository("user"); 

        
        const user = await repository.findOne({ where: { email: email } });
        
        if (!user) {
            return res.status(404).json({ error: "No se encontró ningún usuario con este correo" });
        }

        // Generar un token de restablecimiento de contraseña
        const resetToken = generateResetToken();

        // Guardar el token y la expiración en la base de datos (suponiendo que tu modelo de usuario tenga estos campos)
        user.resetToken = resetToken;
        user.resetTokenExpiration = Date.now() + 3600000; // Token válido por 1 hora
        await repository.save(user);

        // Enviar correo electrónico con el enlace de restablecimiento
        const resetLink = `${process.env.CLIENT_URL}/reset-password?token=${resetToken}&email=${email}`;
        await SendEmail(
            user.email, 
            "RECUPERACIÓN DE CONTRASEÑA", 
            `Hemos recibido una solicitud para restablecer tu contraseña. 
            Si no solicitaste esto, simplemente ignora este correo. 
            Si deseas restablecer tu contraseña, haz clic en el siguiente enlace: ${resetLink}`
        );

        res.json({ message: "Se ha enviado un enlace de recuperación a tu correo electrónico." });
    } catch (error) {
        console.error("Error en la recuperación de contraseña:", error);
        res.status(500).json({ error: "Ocurrió un error al procesar la solicitud." });
    }
};

module.exports = ForgotPassword;
