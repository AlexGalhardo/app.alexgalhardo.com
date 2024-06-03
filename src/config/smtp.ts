import nodemailer from "nodemailer";

const Resend = nodemailer.createTransport({
    host: "smtp.resend.com",
    secure: true,
    port: 465,
    auth: {
        user: "resend",
        pass: Bun.env.RESEND_API_KEY,
    },
});

export default Resend;
