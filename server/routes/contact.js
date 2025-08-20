import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Divine email template
    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Portfolio Message</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
            color: #e6e6e6;
            line-height: 1.6;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: rgba(10, 10, 20, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .email-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .email-header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: shine 3s infinite linear;
        }
        
        @keyframes shine {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        .logo {
            font-family: 'Playfair Display', serif;
            font-size: 28px;
            font-weight: 700;
            color: white;
            margin-bottom: 10px;
            position: relative;
            z-index: 2;
        }
        
        .logo span.accent {
            background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .header-title {
            font-size: 22px;
            font-weight: 600;
            color: white;
            margin-top: 15px;
            position: relative;
            z-index: 2;
        }
        
        .email-body {
            padding: 40px 30px;
        }
        
        .message-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 25px;
            margin-bottom: 30px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 25px;
        }
        
        .info-item {
            background: rgba(255, 255, 255, 0.03);
            padding: 15px;
            border-radius: 12px;
            border-left: 4px solid #667eea;
        }
        
        .info-label {
            font-size: 12px;
            text-transform: uppercase;
            color: #a0a0b8;
            margin-bottom: 5px;
            letter-spacing: 1px;
        }
        
        .info-value {
            font-size: 16px;
            font-weight: 500;
            color: white;
        }
        
        .message-content {
            background: rgba(255, 255, 255, 0.02);
            padding: 20px;
            border-radius: 12px;
            border-left: 4px solid #764ba2;
            font-style: italic;
            line-height: 1.8;
        }
        
        .divider {
            height: 1px;
            background: linear-gradient(90deg, transparent 0%, rgba(102, 126, 234, 0.5) 50%, transparent 100%);
            margin: 30px 0;
        }
        
        .footer {
            text-align: center;
            padding: 20px;
            background: rgba(0, 0, 0, 0.3);
            font-size: 12px;
            color: #888;
        }
        
        .badge {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 12px;
            color: white;
            margin-top: 10px;
        }
        
        @media (max-width: 600px) {
            .info-grid {
                grid-template-columns: 1fr;
            }
            
            .email-header, .email-body {
                padding: 25px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <div class="logo">M.<span class="accent">AB</span></div>
            <h1 class="header-title">New Portfolio Message</h1>
        </div>
        
        <div class="email-body">
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">From</div>
                    <div class="info-value">${name}</div>
                </div>
                
                <div class="info-item">
                    <div class="info-label">Email</div>
                    <div class="info-value">${email}</div>
                </div>
            </div>
            
            <div class="message-card">
                <div class="info-label" style="margin-bottom: 15px;">Message</div>
                <div class="message-content">
                    ${message.replace(/\n/g, '<br>')}
                </div>
            </div>
            
            <div class="divider"></div>
            
            <div style="text-align: center;">
                <p style="color: #a0a0b8; margin-bottom: 15px;">This message was sent from your portfolio contact form</p>
                <div class="badge">Portfolio Contact</div>
            </div>
        </div>
        
        <div class="footer">
            <p>© ${new Date().getFullYear()} Muhammad Abdul Bari. All rights reserved.</p>
            <p>This is an automated message, please do not reply directly to this email.</p>
        </div>
    </div>
</body>
</html>
    `;

    const emailText = `
NEW PORTFOLIO MESSAGE
=====================

From: ${name}
Email: ${email}

Message:
${message}

------------------------------
This message was sent from your portfolio contact form
© ${new Date().getFullYear()} Muhammad Abdul Bari
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `🌟 New Portfolio Message: ${name}`,
      text: emailText,
      html: emailHtml,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ 
      message: "Email failed to send.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
});

export default router;