# EmailJS Troubleshooting Guide

## Common "Recipients Address is Empty" Error

This error occurs when the EmailJS template cannot find a valid recipient email variable. Here's how to fix it:

### 1. Check Your EmailJS Template

1. Go to your EmailJS dashboard (https://dashboard.emailjs.com/)
2. Navigate to Email Templates
3. Open your template (template_83qubrf)
4. In the "To Email" field, make sure you have one of these variables:

```
{{to_email}}
{{reply_to}}
{{user_email}}
{{email_address}}
{{recipient_email}}
```

### 2. Template Example

Here's a working template setup:

**To Email:** `{{to_email}}`
**Subject:** `Welcome to CrypTau NFT Marketplace!`
**Content:**
```
Hello {{user_name}},

Welcome to CrypTau NFT Marketplace! 🎉

Thank you for subscribing to our newsletter. You'll now receive:
- Latest NFT drops and collections
- Marketplace updates and features
- Exclusive creator spotlights
- Community events and news

Start exploring amazing NFTs at: {{website_url}}

Best regards,
The CrypTau Team
```

### 3. Variables Being Sent

The Footer component sends these variables to EmailJS:

- `to_email`: The user's email address
- `reply_to`: The user's email address
- `user_email`: The user's email address
- `email_address`: The user's email address
- `recipient_email`: The user's email address
- `to_name`: Username (part before @)
- `user_name`: Username (part before @)
- `from_name`: "CrypTau Team"
- `website_url`: Current website URL

### 4. Test Your Setup

1. Make sure your environment variables are set in `.env.local`
2. Run the development server: `npm run dev`
3. Open http://localhost:3000
4. Scroll to the footer
5. Enter a valid email address
6. Click "Email me"

### 5. Debug Steps

If it still doesn't work:

1. Check the browser console for detailed error messages
2. Verify your EmailJS service is active
3. Make sure your template uses one of the supported variable names
4. Test with a simple template first

### 6. Environment Variables

Make sure these are set in your `.env.local`:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_6mh72yq
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_83qubrf
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=ME4yAKoPTNO_E9CCR
```

### 7. Working Configuration

The current setup should work if your EmailJS template has `{{to_email}}` in the "To Email" field. This is the most reliable variable name for recipient emails.
