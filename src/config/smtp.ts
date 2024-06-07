import nodemailer from "nodemailer";

const Resend = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io", //"smtp.resend.com"
    secure: true,
    port: 2525, // 465
    auth: {
        user: "13afdd8c0b853c", // "resend"
        pass: process.env.RESEND_API_KEY,
    },
});

export default Resend;
