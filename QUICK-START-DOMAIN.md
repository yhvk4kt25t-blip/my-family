# Quick Start: Domain Verification for askl.pi

## You Need To Do Only 3 Things:

### 1️⃣ DEPLOY YOUR APP
- Click **"Publish"** button in v0 (top right corner)
- Connect to Vercel when prompted
- Wait for deployment (2-3 minutes)

### 2️⃣ ADD DOMAIN IN VERCEL
- Go to vercel.com/dashboard
- Select your project
- Settings → Domains → Add `askl.pi`
- Follow Vercel's DNS instructions

### 3️⃣ CONFIGURE DNS
Go to your Pi domain management and add:
\`\`\`
Type: CNAME
Name: @
Value: cname.vercel-dns.com
\`\`\`

**Then wait 30-60 minutes** for DNS to work.

---

## Test Everything Works:

Visit these URLs in your browser:
1. `https://askl.pi` → Should show your app
2. `https://askl.pi/validation-key.txt` → Should show your validation key

If both work → Go to develop.pi and click "Verify Domain"

---

## Environment Variables (Do After DNS Works):

In Vercel Dashboard → Settings → Environment Variables:

\`\`\`
NEXT_PUBLIC_APP_URL = https://askl.pi
NEXT_PUBLIC_PI_DOMAIN = askl.pi
NEXT_PUBLIC_PI_API_KEY = [Get from develop.pi]
PI_API_SECRET = [Get from develop.pi]
\`\`\`

Then click "Redeploy" to apply them.

---

## Common Issues:

**"Site not found"**
→ DNS not configured or still propagating. Wait longer.

**"Validation failed"**
→ Make sure `askl.pi/validation-key.txt` is accessible first.

**"Need .env file?"**
→ NO! For published apps, use Vercel Dashboard environment variables only.

---

**Read COMPLETE-DOMAIN-SETUP.md for detailed instructions.**
