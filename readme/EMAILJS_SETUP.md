# EmailJS Setup Guide for CrypTau NFT Marketplace

## 🚀 Quick Setup (5 minutes)

### 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account

### 2. Add Email Service
- Click **Email Services** → **Add New Service**
- Choose **Gmail** (recommended)
- Connect your Gmail account
- Copy the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
- Go to **Email Templates** → **Create New Template**
- Use this template content:

```
Subject: {{subject}}

Hi {{to_name}}!

{{message}}

Best regards,
{{from_name}}
```

- Save and copy the **Template ID** (e.g., `template_xyz789`)

### 4. Get API Keys
- Go to **Account** → **API Keys**
- Copy your **Public Key**
- Copy your **Private Key**

### 5. Update .env.local
Replace the placeholder values in your `.env.local` file:

```env
EMAILJS_SERVICE_ID=service_abc123
EMAILJS_TEMPLATE_ID=template_xyz789
EMAILJS_PUBLIC_KEY=your_public_key_here
EMAILJS_PRIVATE_KEY=your_private_key_here
```

### 6. Test Your Setup
1. Run `npm run dev`
2. Go to your website footer
3. Enter an email and click "Email me"
4. Check the email inbox - you should receive the welcome message instantly!

## ✅ Benefits
- ✅ Instant email delivery (no delays)
- ✅ Completely free forever
- ✅ No storage issues
- ✅ No anti-spam problems
- ✅ Simple and reliable

## 🛟 Troubleshooting
- **"Failed to send email"** → Check your API keys in .env.local
- **Email not received** → Check spam folder, verify Gmail service connection
- **Invalid template** → Make sure template variables match: {{to_email}}, {{to_name}}, etc.

## 📧 Template Variables Available
- `{{to_email}}` - Subscriber's email
- `{{to_name}}` - Username from email (before @)
- `{{from_name}}` - "CrypTau Team"
- `{{subject}}` - Email subject
- `{{message}}` - Welcome message content

Your email subscription is now powered by EmailJS with instant delivery! 🎉
