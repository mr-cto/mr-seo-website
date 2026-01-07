# Setup Instructions for Full Integration

## Calendly Integration

### Option 1: Button Link (Current - Simple)

Already configured in `/app/contact/page.tsx`

**To customize:**

1. Sign up at https://calendly.com (free tier available)
2. Create a 30-minute event type
3. Get your Calendly link (e.g., `https://calendly.com/yourname/30min`)
4. Update line 134 in `/app/contact/page.tsx`

### Option 2: Inline Widget (Embedded)

Uncomment lines 142-147 in `/app/contact/page.tsx` and replace with your URL.

The Calendly script is already loaded via Next.js Script component.

---

## reCAPTCHA v3 Integration

### Setup:

1. Go to https://www.google.com/recaptcha/admin
2. Register your site with reCAPTCHA v3
3. Add your keys to `.env.local`:
   ```
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
   RECAPTCHA_SECRET_KEY=your_secret_key
   ```

### To implement in ContactForm:

```bash
npm install react-google-recaptcha-v3
```

Then update `/components/forms/ContactForm.tsx` to include reCAPTCHA validation before form submission.

---

## Resend Email Setup

### Current Status: ✅ Integrated

API route configured at `/app/api/contact/route.ts`

**To activate:**

1. Sign up at https://resend.com (free: 100 emails/day)
2. Get your API key
3. Add to `.env.local`: `RESEND_API_KEY=re_your_key`
4. Update `from` email (line 20) and `to` email (line 21) in `/app/api/contact/route.ts`

**Note:** Uses `onboarding@resend.dev` by default. For production, verify your domain in Resend dashboard.

---

## Deployment Checklist

- [ ] Add Resend API key to Vercel environment variables
- [ ] Update Calendly URL with your actual booking link
- [ ] (Optional) Setup reCAPTCHA v3 for spam protection
- [ ] Update contact email addresses
- [ ] Test contact form submission
- [ ] Verify sitemap generation
- [ ] Configure custom domain DNS
- [ ] Setup Zoho Mail for business email (free)

---

## Quick Deployment to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables via Vercel dashboard or CLI:
vercel env add RESEND_API_KEY
vercel env add SITE_URL
```

---

## Cost Summary

- **Hosting:** $0/month (Vercel free tier)
- **Domain:** $9/year (Cloudflare Registrar)
- **Email Service:** $0/month (Resend free tier: 100/day)
- **Business Email:** $0/month (Zoho Mail free)
- **Calendly:** $0/month (free tier)
- **reCAPTCHA:** $0/month (free)

**Total: $9/year**
