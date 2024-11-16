import nodemailer from "nodemailer"

const email = process.env.EMAIL_USER
const pass = process.env.EMAIL_PASS

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: pass, // Use app-specific password if 2FA is enabled
    }
})

export const mailOptions = {
    from: email,
    to: email,
};