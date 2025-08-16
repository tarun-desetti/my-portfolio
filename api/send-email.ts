import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Environment variables for email configuration
  const mailHost = process.env.EMAIL_HOST;
  const mailPort = process.env.EMAIL_PORT;
  const mailUser = process.env.EMAIL_USER; // Your sending email address
  const mailPass = process.env.EMAIL_PASS; // Your email password or app password
  const recipientEmail = process.env.RECIPIENT_EMAIL; // The email address you want to receive messages

  if (!mailHost || !mailPort || !mailUser || !mailPass || !recipientEmail) {
    console.error("Missing environment variables for email sending.");
    return res.status(500).json({ message: 'Server configuration error' });
  }

  const transporter = nodemailer.createTransport({
    host: mailHost,
    port: parseInt(mailPort as string, 10), // Ensure port is a number
    secure: parseInt(mailPort as string, 10) === 465, // true for 465, false for other ports
    auth: {
      user: mailUser,
      pass: mailPass,
    },
  });

  const mailOptions = {
    from: mailUser, // Sender address
    to: recipientEmail, // Recipient address
    subject: `New Message from ${name} - Portfolio Contact Form`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending message.' });
  }
}