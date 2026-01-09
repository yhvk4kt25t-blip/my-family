# Complete Domain Setup Guide for askl.pi

## Current Status
✅ Validation key file is ready: `public/validation-key.txt`
✅ App is published on v0
❌ Domain verification pending
❌ Environment variables not configured

---

## STEP-BY-STEP SOLUTION

### Step 1: Deploy Your App to Vercel (REQUIRED FIRST)

Your app MUST be deployed before domain verification can work.

1. **Click the "Publish" button** in the v0 interface (top right)
2. **Connect to Vercel** if you haven't already
3. Wait for deployment to complete
4. Note your Vercel app URL (e.g., `my-family-xxxxx.vercel.app`)

**Test the validation file works:**
Visit: `https://your-vercel-app.vercel.app/validation-key.txt`
You should see your validation key displayed.

---

### Step 2: Add askl.pi Domain in Vercel

1. Go to **Vercel Dashboard** (vercel.com/dashboard)
2. Select your "My Family" project
3. Click **Settings** tab
4. Click **Domains** in the left sidebar
5. Click **Add Domain** button
6. Enter: `askl.pi`
7. Click **Add**

Vercel will show you DNS configuration instructions.

---

### Step 3: Configure DNS for askl.pi

**Where to configure DNS:**
- Go to your Pi Network domain management (where you won the auction)
- This might be in Pi Browser wallet settings or Pi domain portal
- Look for "DNS Settings" or "Domain Management"

**Add this DNS record:**

\`\`\`
Type: CNAME
Name: @ (or leave blank for root domain)
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)
\`\`\`

**Alternative if CNAME doesn't work:**

\`\`\`
Type: A
Name: @ (or leave blank)
Value: 76.76.21.21
TTL: 3600
\`\`\`

**For www subdomain (optional):**

\`\`\`
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
\`\`\`

---

### Step 4: Wait for DNS Propagation

**Important:** DNS changes take time!
- Minimum: 5-10 minutes
- Typical: 30-60 minutes
- Maximum: 24-48 hours

**Test DNS propagation:**
1. Visit: https://dnschecker.org
2. Enter: `askl.pi`
3. Wait until it shows your Vercel IP/CNAME globally

---

### Step 5: Add Environment Variables in Vercel

1. In Vercel Dashboard, go to your project
2. Click **Settings** tab
3. Click **Environment Variables** in left sidebar
4. Add these variables one by one:

\`\`\`
Name: NEXT_PUBLIC_APP_URL
Value: https://askl.pi

Name: NEXT_PUBLIC_PI_DOMAIN
Value: askl.pi

Name: NEXT_PUBLIC_PI_API_KEY
Value: [Your Pi App ID from develop.pi]

Name: PI_API_SECRET
Value: [Your Pi API Secret from develop.pi]
\`\`\`

**How to get Pi API Keys:**
1. Go to https://develop.pi
2. Log in with your Pi account
3. Select your "My Family" app
4. Copy the **App ID** (this is your API Key)
5. Copy the **API Secret Key**

5. After adding all variables, click **Redeploy** to apply them

---

### Step 6: Verify Domain in Pi Developer Portal

Once DNS is working (your site loads at https://askl.pi):

1. Go to **https://develop.pi**
2. Select your **"My Family" app**
3. Find **App Checklist** → Item #8 "Domain Verification"
4. Enter your domain: `askl.pi`
5. Click **"Verify Domain"**

Pi will check: `https://askl.pi/validation-key.txt`

If successful, you'll see a checkmark ✅

---

### Step 7: Update App URLs in Pi Portal

After verification:

1. In Pi Developer Portal, update these fields:
   - **App Domain**: `askl.pi`
   - **App URL**: `https://askl.pi`
   - **Callback URL**: `https://askl.pi/api/auth/callback`
   - **Redirect URI**: `https://askl.pi/dashboard`

2. Save changes

---

## Troubleshooting

### ❌ Validation file returns 404

**Problem:** Domain isn't pointing to your Vercel deployment

**Solutions:**
1. Verify DNS records are correct
2. Wait longer for DNS propagation
3. Clear browser cache (Ctrl+F5)
4. Test with Vercel domain first: `your-app.vercel.app/validation-key.txt`

### ❌ DNS not working after 24 hours

**Problem:** Pi Network domains may have special requirements

**Solutions:**
1. Check if Pi domain management portal has specific DNS instructions
2. Contact Pi Network support about domain DNS configuration
3. Verify domain ownership in Pi wallet
4. Check if domain needs to be "activated" after auction win

### ❌ SSL/HTTPS not working

**Problem:** Vercel handles SSL automatically, but it needs DNS to work first

**Solutions:**
1. Ensure DNS is fully propagated
2. Wait 5-10 minutes after DNS works for SSL certificate generation
3. Vercel automatically provisions Let's Encrypt certificates

### ❌ Environment variables not working

**Problem:** Variables weren't applied or app needs redeployment

**Solutions:**
1. After adding variables, click "Redeploy" in Vercel
2. Variables starting with `NEXT_PUBLIC_` are available in browser
3. Variables without prefix are only available server-side

### ❌ Still can't verify after everything

**Try this order:**
1. First, get `your-app.vercel.app/validation-key.txt` working
2. Then add and configure `askl.pi` domain
3. Wait for DNS (test with https://askl.pi in browser)
4. Finally try verification in Pi portal

---

## Quick Verification Checklist

Before attempting Pi verification, ensure:

- [ ] App is deployed to Vercel
- [ ] `your-app.vercel.app/validation-key.txt` shows your key
- [ ] Domain `askl.pi` added in Vercel Settings → Domains
- [ ] DNS CNAME record points to `cname.vercel-dns.com`
- [ ] DNS propagation complete (check dnschecker.org)
- [ ] `https://askl.pi` loads your app in browser
- [ ] `https://askl.pi/validation-key.txt` shows your key
- [ ] Environment variables added in Vercel
- [ ] App redeployed after adding environment variables

Once ALL items are checked, proceed with Pi verification.

---

## What About .env File?

**You DO NOT need a .env file locally!**

For v0 published apps deployed to Vercel:
- Environment variables are configured in **Vercel Dashboard**
- NOT in a local `.env` file
- The variables are automatically injected during deployment

**When would you need .env?**
Only if running the app locally on your computer:
1. Download the code from v0
2. Create `.env.local` file in project root
3. Add the variables there
4. Run `npm run dev`

But for published apps on Vercel, you ONLY configure in Vercel Dashboard.

---

## Summary: What You Need To Do

1. **Deploy app** → Click "Publish" in v0
2. **Add domain** → Vercel Dashboard → Settings → Domains → Add `askl.pi`
3. **Configure DNS** → Pi domain management → Add CNAME to `cname.vercel-dns.com`
4. **Wait** → 30-60 minutes for DNS propagation
5. **Test** → Visit `https://askl.pi` and `https://askl.pi/validation-key.txt`
6. **Add env vars** → Vercel Dashboard → Settings → Environment Variables
7. **Verify** → Pi Developer Portal → Verify Domain

**No .env file needed for published apps!**

Need more help? Check:
- Vercel Domains: https://vercel.com/docs/projects/domains
- Pi Developer Docs: https://developers.minepi.com
