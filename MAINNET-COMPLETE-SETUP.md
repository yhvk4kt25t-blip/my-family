# Complete Mainnet Setup Guide for My Family App

## 🎯 Your Goal
Complete Step 10 of the Pi Developer Checklist: "Process a Transaction on the App" so you can claim your **askl.pi** domain.

## 📋 Current Issues & Solutions

### Issue 1: Wallet is Testnet Wallet
**Problem**: Your current wallet `GC444XDJDRRCYJTJZFEI34CWFHXT2R742XYJ4JO2FVPISBJ5PRFFQY5Q` is a testnet wallet.

**Solution**: You need to get a **MAINNET Pi wallet address**. Here's how:

1. Open **Pi Browser** on mainnet
2. Go to **Pi Wallet** in the Pi app
3. Select **"Mainnet"** network (not Testnet)
4. Copy your **Mainnet wallet address** (starts with G...)
5. Use this wallet address in your environment variables

### Issue 2: Can't Find API Secret
**Problem**: You can't find the Pi API Secret key.

**Solution**: Get both API Key and Secret from Pi Developer Portal:

1. Go to https://develop.pi (must use **Pi Browser**)
2. Sign in with your Pi account
3. Click on **"My Family"** app (or your app name)
4. Go to **"Keys"** or **"API Credentials"** section
5. You'll see:
   - **API Key** (starts with something like `pi_app_...`)
   - **API Secret** (longer string, keep this SECRET)
6. **IMPORTANT**: When you switch your app from Testnet to Mainnet in the Pi Developer Portal, you'll get **NEW** API credentials. Make sure you're using the **Mainnet** API Key and Secret.

### Issue 3: Sign In Button Not Working
**Problem**: Button doesn't respond or shows errors.

**Solution**: This is because `window.Pi` SDK isn't loaded or network mismatch. See fixes below.

---

## ✅ Step-by-Step Mainnet Migration

### Step 1: Switch App to Mainnet in Pi Developer Portal

1. Open **Pi Browser** and go to https://develop.pi
2. Find your **My Family** app
3. Look for **Network Settings** or **Environment** section
4. **Switch from "Testnet/Sandbox" to "Mainnet/Production"**
5. **Save changes**
6. **Copy your NEW Mainnet API credentials** (Key & Secret will be different from testnet)

### Step 2: Get Your Mainnet Wallet Address

1. Open **Pi Wallet** in Pi Browser
2. Make sure you're on **Mainnet** (toggle network if needed)
3. Copy your Mainnet wallet address
4. This is where you'll receive the 0.1 Pi payment

### Step 3: Update Environment Variables in Vercel

Go to your Vercel project → **Settings** → **Environment Variables**

Add or update these variables:

```bash
# Network Configuration
NEXT_PUBLIC_PI_NETWORK=mainnet

# API Credentials (from Pi Developer Portal - MAINNET section)
NEXT_PUBLIC_PI_API_KEY=your_mainnet_api_key_here
PI_API_SECRET=your_mainnet_api_secret_here

# Your Mainnet Wallet (from Pi Wallet on Mainnet)
NEXT_PUBLIC_PI_WALLET_ADDRESS=your_mainnet_wallet_address_here

# Domain
NEXT_PUBLIC_PI_DOMAIN=askl.pi
```

**CRITICAL**: Make sure all these are set to **"Production"** environment (not just "Development")

### Step 4: Deploy to Production

1. After saving environment variables in Vercel
2. Go to **Deployments** tab
3. Click **"Redeploy"** on your latest deployment
4. Wait for deployment to complete
5. Your app will now be in **Mainnet mode**

### Step 5: Test the Payment Flow

1. Open **Pi Browser** on your phone/device
2. Navigate to your production URL: **https://your-domain.vercel.app** or **https://askl.pi** (once claimed)
3. Click **"Create New Family"**
4. Click **"Sign In with Pi Browser"** (should work now with proper credentials)
5. Complete the authentication
6. Create your family
7. **Complete the payment** (0.1 Pi to your mainnet wallet)
8. Verify payment completes successfully

### Step 6: Verify in Developer Checklist

1. Go back to https://develop.pi in Pi Browser
2. Open your **My Family** app
3. Go to **Developer Checklist**
4. **Step 10** should now show as **COMPLETE** ✅
5. You can now claim **askl.pi** domain

---

## 🔍 Troubleshooting

### "Pi is not defined" or Sign In button doesn't work

**Cause**: Pi SDK not loaded or network mismatch

**Fix**:
1. Make sure you set `NEXT_PUBLIC_PI_NETWORK=mainnet`
2. Redeploy your app after changing env vars
3. Clear browser cache and reload
4. Make sure you're using **Pi Browser** (not Chrome, Safari, etc.)

### Payment shows "pending" forever

**Cause**: API Secret might be wrong or backend can't verify payment

**Fix**:
1. Double-check `PI_API_SECRET` matches your mainnet secret
2. Check Vercel function logs for errors
3. Make sure wallet address is correct mainnet address

### "Test mode not available on Mainnet"

**This is correct!** Test mode only works on testnet. On mainnet, you MUST use real Pi Browser authentication.

---

## 📝 Quick Checklist

- [ ] Switch app to Mainnet in Pi Developer Portal
- [ ] Copy Mainnet API Key and Secret
- [ ] Get Mainnet wallet address from Pi Wallet
- [ ] Update all environment variables in Vercel (Production)
- [ ] Redeploy app
- [ ] Test sign in with Pi Browser
- [ ] Complete 0.1 Pi payment
- [ ] Verify checklist Step 10 is complete
- [ ] Claim askl.pi domain

---

## 🎉 After Success

Once Step 10 is complete:
1. Your app is production-ready on Pi Mainnet
2. You can claim **askl.pi** domain
3. Users can access your app at https://askl.pi
4. All payments will be real Pi (not test Pi)

---

## Need Help?

If you're still stuck:
1. Check Vercel function logs for errors
2. Check browser console (F12) for Pi SDK errors
3. Verify all environment variables are in "Production" environment
4. Make sure you're using Pi Browser, not regular browser
5. Confirm your app status is "Mainnet" in Pi Developer Portal
