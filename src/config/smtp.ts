import nodemailer from "nodemailer";

const Resend = nodemailer.createTransport({
    host: "smtp.resend.com",
    port: 465,
    auth: {
        user: "resend",
        pass: process.env.RESEND_API_KEY,
    },
});

export default Resend;
