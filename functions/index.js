const functions = require("firebase-functions");
const cors = require('cors')({origin: true});
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth:{
        user: process.env.REACT_APP_USER_EMAIL,
        pass: process.env.REACT_APP_PASS_EMAIL,
    },
})

const sendContactForm = (form) => {
    return transport
        .sendMail({
            subject: "Ha recibido un correo de David Aravena Programador web",
            bcc:[`${form.email}`],
            html: `
            <h3>Este es el link para descargar el archivo subido a la version beta de upload-test web app</H3>
            <h4>${form.link}</H4>
            <h3>Gracias por probar esta web de 'David Aravena' Programador Web</H3>
            `,
        })
        .then((r) => {
            return true
        })
        .catch((e) => {
            return false
        })
}

exports.helloWorld = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        sendContactForm(request.body).then((result) => {
            response.send(result);
        })
    })
})
