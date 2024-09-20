// Este codigo es para enviar los correos a los usuarios, cualquier tipo de correo
// el js recibe el correo a enviar, el asunto y el texto del correo, lo unico es que en 
// este js se quema directamente el correo de mislukitas o desde donde sera enviado el correo

const nodemailer = require("nodemailer");

const SendEmail = (Email, subject, text) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tu-correo@gmail.com", //generar correo admin que envie los correos de recuperacion
      pass: "tu-contraseña",
    },
  });

  let mailOptions = {
    from: "tu-correo@gmail.com",
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

export default SendEmail
