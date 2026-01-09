# Environment Variables Setup for Pi Domain Verification

## Problem You're Facing

Pi Network cannot verify your domain because:
1. The validation key file needs to be accessible at your published URL
2. Environment variables need to be configured in Vercel (not locally)

## Solution: Step-by-Step Guide

### Step 1: Publish Your App (MOST IMPORTANT)

**Click the "Publish" button at the top right of v0 now**

This uploads your validation-key.txt file to your live site at:
`https://v0-myfamilyvb-mb6-v4q78-lcx.vercel.app/validation-key.txt`

### Step 2: Add Environment Variables in Vercel

Since your app is already published, you need to add environment variables in **Vercel Dashboard** (not a local .env file):

1. Go to: https://vercel.com/dashboard
2. Find your project: "My Family" or "myfamilyvb"
3. Click on it
4. Go to **Settings** → **Environment Variables**
5. Add these variables:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_PI_API_KEY` | Your Pi API Key from Pi Developer Portal |
| `PI_API_SECRET` | Your Pi API Secret from Pi Developer Portal |
| `NEXT_PUBLIC_PI_DOMAIN` | `askl.pi` |
| `NEXT_PUBLIC_APP_URL` | `https://askl.pi` |
| `NEXT_PUBLIC_DOMAIN_VALIDATION_KEY` | `fb59d8cea7bfe1a30108fe28615f0fe68eff509f8c96c949744ceb4b99f1603f00b6ea62149f978f4540b6cd04e14d9beee23c112f8575ed2dc687d517228cc3` |

6. Click **Save**
7. Go to **Deployments** tab
8. Click the ⋯ (three dots) on latest deployment → **Redeploy**

### Step 3: Verify Domain in Pi Developer Portal

After redeployment completes (1-2 minutes):

1. Test the validation file by opening this URL in your browser:
   \`\`\`
   https://v0-myfamilyvb-mb6-v4q78-lcx.vercel.app/validation-key.txt
   \`\`\`
   You should see your validation key displayed

2. Go to Pi Developer Portal → Your App → Domain Verification

3. Click **Verify Domain**

## For Local Development (If You Download the Code)

If you download the code to run locally:

1. Copy `.env.local.example` to `.env.local`
2. Fill in your actual values
3. Run `npm install` then `npm run dev`

## Troubleshooting

### If verification still fails:

1. **Clear Vercel cache**: In Vercel dashboard → Deployments → Redeploy with "Clear build cache" checked

2. **Check file accessibility**: Visit `https://v0-myfamilyvb-mb6-v4q78-lcx.vercel.app/validation-key.txt` and verify you see the exact key without any HTML tags

3. **Check file content**: The file should contain ONLY the validation key, nothing else (no quotes, no extra lines)

4. **Wait for DNS**: If you just updated, wait 5-10 minutes for changes to propagate

### Important Notes:

- The validation-key.txt file does NOT need to be in .env
- It's a static file in the `public` folder that Pi Network reads directly
- .env variables are for API keys and secrets, not the validation file
- For published apps, environment variables go in Vercel Dashboard, not local files

## Quick Checklist

- [ ] Published app in v0 (click Publish button)
- [ ] Added environment variables in Vercel Dashboard
- [ ] Redeployed after adding variables
- [ ] Tested `https://v0-myfamilyvb-mb6-v4q78-lcx.vercel.app/validation-key.txt` shows the key
- [ ] Clicked Verify Domain in Pi Developer Portal

## Getting Your Pi API Keys

1. Go to: https://develop.pi
2. Login with your Pi account
3. Go to **My Apps**
4. Click on "My Family" app
5. You'll see your **API Key** and **API Secret**
6. Copy these to Vercel environment variables

---

**The key issue**: You need to add environment variables in Vercel Dashboard (online), NOT create a local .env file. Published apps use Vercel's environment variables system.
