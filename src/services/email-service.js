'use-strict'

var config = require('../config');
const sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey(config.sendgridKey);

exports.send = async (to, subject, text, body) => {
    sendgrid.send({
        to: to,
        from: config.emailSendgrid,
        subject: subject,
        text: text,
        html: body
    });
}
