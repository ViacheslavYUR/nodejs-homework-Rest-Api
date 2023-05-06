const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASS, EMAIL_FROM } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_FROM,
    pass: META_PASS,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = {
    ...data,
    from: EMAIL_FROM,
  };
  await transport.sendMail(email);
};

module.exports = sendEmail;
