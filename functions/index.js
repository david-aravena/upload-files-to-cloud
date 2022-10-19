const functions = require("firebase-functions");
const cors = require('cors')({origin: true});
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth:{
        user: "david.aravenap@gmail.com",
        pass: "ozikdtcsuuewkhtt",
    },
})

const sendContactForm = (form) => {
    return transport
        .sendMail({
            subject: "ha funcional el mail",
            bcc:["daravenap1@gmail.com"],
            html: `<h2>${form.link}</H2>`,
        })
        .then((r) => {
            console.log("mail exitoso", r.accepted)
            console.log("rejected => ", r.rejected)
        })
        .catch((e) => console.log(e))
}

exports.helloWorld = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        sendContactForm(request.body);
        // response.set('Access-Control-Allow-Origin', '*');
        // response.json(request.body);
    })
})
