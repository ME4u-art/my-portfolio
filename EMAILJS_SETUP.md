# EmailJS Setup Guide

## Step-by-Step Instructions to Set Up Email Notifications

### 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Click "Sign Up" and create a free account
- Verify your email

### 2. Get Your Public Key
- After login, go to **Account** > **API Keys** (or Dashboard)
- Copy your **Public Key**
- Update this in `src/components/Contact.tsx`:
  ```typescript
  emailjs.init('YOUR_PUBLIC_KEY_HERE');
  ```
  Replace `YOUR_PUBLIC_KEY_HERE` with your actual public key

### 3. Add Email Service
- Go to **Email Services** in EmailJS dashboard
- Click **Add New Service**
- Choose your email provider:
  - **Gmail** (recommended)
  - **Outlook**
  - **Custom Email**
  
#### For Gmail:
1. Select "Gmail" as service
2. Click "Connect with Gmail"
3. Sign in with your Gmail account
4. Allow access
5. Copy the **Service ID** (e.g., `service_xxxxx`)

### 4. Create Email Template
- Go to **Email Templates**
- Click **Create New Template**
- Use this template:

```
Subject: New Message from Your Portfolio

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

- Copy the **Template ID** (e.g., `template_xxxxx`)

### 5. Update Contact Component
Edit `src/components/Contact.tsx` and replace:

```typescript
await emailjs.send('service_xxxxx', 'template_xxxxx', {
  from_name: formData.name,
  from_email: formData.email,
  message: formData.message,
  to_email: 'your.email@example.com'
});
```

With your actual IDs:
- `service_xxxxx` → Your Service ID
- `template_xxxxx` → Your Template ID
- `your.email@example.com` → Your email

### 6. Test It!
- Open your portfolio in the browser
- Go to the Contact section
- Fill out the form and submit
- You should receive an email within seconds!

---

## Troubleshooting

### "Invalid Service ID"
- Make sure you copied the correct Service ID
- Check that the service is enabled

### "Invalid Template ID"
- Verify you copied the Template ID correctly
- Make sure the template is published

### "Unauthorized"
- Check your Public Key is correct
- Make sure your EmailJS plan allows API calls

### Emails not sending?
- Check spam/junk folder
- Verify email address in template settings
- Test from EmailJS dashboard first

---

## Free Plan Limits
- **200 emails/month** (free tier)
- Enough for most portfolios!
- Upgrade if you need more

---

## Alternative: Custom Variables in Template

You can add more fields to the template:

1. **Add to Contact Form** (Contact.tsx):
```typescript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
  subject: '',
  phone: ''
});
```

2. **Add to Template Variables**:
```typescript
await emailjs.send('service_xxxxx', 'template_xxxxx', {
  from_name: formData.name,
  from_email: formData.email,
  subject: formData.subject,
  phone: formData.phone,
  message: formData.message,
  to_email: 'your.email@example.com'
});
```

3. **Update Email Template**:
```
Subject: {{subject}} - New Message from Your Portfolio

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}
```

---

## Need Help?
- EmailJS Docs: https://www.emailjs.com/docs/
- Support: https://www.emailjs.com/support/
