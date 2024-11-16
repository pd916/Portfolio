import { transporter, mailOptions } from '@/lib/nodemailer';
import { NextResponse } from 'next/server';


export async function POST(request){
    try {
        const { name, email, number, message } = await request.json();

        if (!name || !email || !number || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        await transporter.sendMail({
            ...mailOptions,
            subject: name,
            text: "text",
            html: `<h1>${name}</h1>
            <h3>Email: ${email}</h3>
            <p>Message: ${message}<br/> Number:${number}</p>`
        });

        return NextResponse.json({ message: "Email sent successfully"}, { status: 200 });
    } catch (error) {
        return NextResponse.json({error:"Someting went wrong"}, {status:500})
    }
}