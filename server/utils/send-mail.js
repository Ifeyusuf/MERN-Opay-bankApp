const nodemail = require("nodemailer");

async function SendMail(email, header, body) {

    try {
        const transport = await nodemail.createTransport( {
            service: "gmail",
            secure: true,
            auth : {
                user: process.env.NODE_EMAIL,
                pass: process.env.NODE_PASS
            }
        } );

        await transport.sendMail( {
            from: process.env.NODE_EMAIL,
            to: email,
            subject: header,
            text: body
        } );

        console.log("message successfully sent");

    } catch (error) {
        console.log( "message not sent");
    }

};


module.exports = SendMail