//TENER ARCHIVO .ENV CON ESTOS DATOS:
//EMAIL_USER=tu-correo@gmail.com
//EMAIL_PASS=tu-contraseña
//CLIENT_URL=http://localhost:3000 # o la URL de tu aplicación frontend
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const SendEmail = (Email, subject, text) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER, 
    to: Email,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Correo enviado: " + info.response);
  });
};

module.exports = SendEmail;
