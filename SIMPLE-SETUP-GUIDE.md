# Simple Setup Guide - My Family App

## The Problem
Your app is stuck on "Authenticating" because it's trying to use Pi Browser features but you're testing in a regular browser.

## Simple Solution - 3 Steps

### Step 1: Use Test Mode (For Now)
1. Open your app
2. Click "Create New Family" or "Join Existing Family"
3. Click the button that says **"Use Test Mode Instead"**
4. Enter a simple username like: `yourname123`
5. Click "Create with Test Mode"

**Important:** Always use the SAME username when testing. This keeps your family data.

---

### Step 2: Get Your Mainnet Wallet
To move from testnet to mainnet, you need a MAINNET wallet address:

1. Open **Pi Wallet App** on your phone
2. Tap on your wallet
3. You'll see an address starting with `G` (like `GABCD...XYZ`)
4. **Copy this entire address** - this is your MAINNET wallet

**Note:** This is different from your testnet wallet!

---

### Step 3: Get Mainnet API Key
You need to switch your Pi app to mainnet to get new API credentials:

1. Go to https://develop.pi
2. Login with your Pi account
3. Find your app "My Family"
4. Look for a switch that says **"Testnet"** or **"Sandbox"**
5. Switch it to **"Mainnet"** or **"Production"**
6. After switching, you'll see NEW API credentials:
   - **API Key** (public key)
   - **API Secret** (private key - keep this safe!)
7. Copy both of these

---

### Step 4: Update Vercel Settings

1. Go to vercel.com
2. Find your "My Family" project
3. Go to **Settings** → **Environment Variables**
4. Add/Update these variables:

```
Name: NEXT_PUBLIC_PI_NETWORK
Value: mainnet

Name: NEXT_PUBLIC_PI_WALLET_ADDRESS
Value: [Your MAINNET wallet from Step 2]

Name: NEXT_PUBLIC_PI_API_KEY
Value: [Your mainnet API Key from Step 3]

Name: PI_API_SECRET
Value: [Your mainnet API Secret from Step 3]
```

5. Click "Save"
6. Go to **Deployments** tab
7. Click the three dots on your latest deployment
8. Click **"Redeploy"**

---

## How to Test Payment (Step 10 of Checklist)

After completing Steps 1-4:

1. Open your app in **Pi Browser** (not Chrome/Safari)
2. Click "Create New Family"
3. Click "Sign In with Pi Browser" (Test Mode button won't show in mainnet)
4. Create your family
5. Click "Complete Payment"
6. The real Pi payment will process

That's it! The payment will show on Pi Network's blockchain.

---

## Still Stuck?

Visit your app at: `/debug-mainnet`

This page will tell you exactly what's wrong and how to fix it.

---

## Quick Answers

**Q: Why does it say testnet everywhere?**
A: You haven't set `NEXT_PUBLIC_PI_NETWORK=mainnet` in Vercel yet.

**Q: Where is API Secret?**
A: Only shows after you switch your app to Mainnet in Pi Developer Portal.

**Q: Sign in button not working?**
A: Use Test Mode for now, OR make sure you're in Pi Browser and have mainnet API keys set.

**Q: Payment still shows wrong wallet?**
A: Update `NEXT_PUBLIC_PI_WALLET_ADDRESS` with your MAINNET wallet address from Pi Wallet app.
