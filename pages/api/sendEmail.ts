import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
import { NextApiRequest, NextApiResponse } from 'next';


const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const currentDate = new Date();
  
  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  
  const formattedDate = `${day} ${months[monthIndex]} ${year}`;
  
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = process.env.SMTP_PORT;
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    res.status(500).json({ message: 'SMTP configuration is incomplete or missing.' });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT),
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    }
  });

  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'hello@kojiado.com',
    subject: 'New Email from Contact Form',
    html: `
      <div>
        <div style="font-size:16px; font-weight:500; color: #717171; margin-bottom:6px">Date: <span style="font-weight:700; color: #2A2A2A">${formattedDate}</span></div>
        <div style="font-size:16px; font-weight:500; color: #717171; margin-bottom:40px">Time: <span style="font-weight:700; color: #2A2A2A">${formattedTime}</span></div>
        <div style="display:flex; flex-direction: column;margin-bottom:24px">
          <div style="background-color:#717171; border-radius:10px; width:100%; padding: 6px 12px; color:#ffffff;font-weight:500; font-size:12px;">
            Name
          </div>
          <div style="background-color:#F3F3F3; border-radius:10px; width:100%; padding: 14px; color:#2A2A2A;font-weight:700; font-size:16px;">
            ${name}
          </div>
        </div>
        <div style="display:flex; flex-direction: column;margin-bottom:24px">
          <div style="background-color:#717171; border-radius:10px; width:100%; padding: 6px 12px; color:#ffffff;font-weight:500; font-size:12px;">
            Email
          </div>
          <div style="background-color:#F3F3F3; border-radius:10px; width:100%; padding: 14px; color:#2A2A2A;font-weight:700; font-size:16px;">
            ${email}
          </div>
        </div>
        <div style="display:flex; flex-direction: column; margin-bottom:60px">
          <div style="background-color:#717171; border-radius:10px; width:100%; padding: 6px 12px; color:#ffffff;font-weight:500; font-size:12px;">
            Message
          </div>
          <div style="background-color:#F3F3F3; border-radius:10px; width:100%; padding: 14px; color:#2A2A2A;font-weight:600; font-size:16px;">
            ${message}
          </div>
        </div>
      <div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
};

export default sendEmail;