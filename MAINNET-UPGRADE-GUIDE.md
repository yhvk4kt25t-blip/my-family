# 🚀 Pi Network Mainnet Upgrade Guide

## ✅ Your App is Now Ready for MAINNET!

This guide will help you complete **Step 10 of the Developer Checklist** and claim your domain **askl.pi**.

---

## 📋 What Changed

### 1. **Network Configuration**
- ✅ Updated from `sandbox: true` (Testnet) to `sandbox: false` (Mainnet)
- ✅ Added environment variable `NEXT_PUBLIC_PI_NETWORK` to control network
- ✅ All payment flows now use real Pi on Mainnet

### 2. **Payment Amount**
- 💰 Family slot costs: **0.1 Pi** (Mainnet)
- 🎯 Wallet recipient: Your configured wallet address

### 3. **Backend Verification**
- ✅ Server-side payment approval with Pi API
- ✅ Transaction verification on Pi blockchain
- ✅ Secure payment completion flow

---

## 🔧 Setup Instructions

### Step 1: Get Your Pi API Credentials

1. Go to [https://develop.pi](https://develop.pi)
2. Log in with your Pi account
3. Navigate to your app "My Family"
4. Copy the following:
   - **App ID** (API Key)
   - **App Secret** (API Secret)
   - **Wallet Address** (where payments will be sent)

### Step 2: Configure Environment Variables on Vercel

Add these environment variables to your Vercel project:

```env
# Pi Network Configuration
NEXT_PUBLIC_PI_NETWORK=mainnet
NEXT_PUBLIC_PI_API_KEY=your_app_id_here
PI_API_SECRET=your_app_secret_here
NEXT_PUBLIC_PI_WALLET_ADDRESS=your_mainnet_wallet_address
NEXT_PUBLIC_PI_DOMAIN=askl.pi
```

**Important Notes:**
- `PI_API_SECRET` should NOT have the `NEXT_PUBLIC_` prefix (server-only)
- Replace all placeholder values with your actual credentials
- Wallet address must be your Mainnet wallet, not Testnet

### Step 3: Deploy to Production

1. Push your code to GitHub/GitLab
2. Vercel will automatically deploy
3. Wait for deployment to complete
4. Your app will now be on **askl.pi** (once domain is claimed)

---

## ✅ Testing on Mainnet

### How to Test Step 10

1. **Open Pi Browser** on your mobile device
2. Navigate to your production URL: `https://askl.pi` (or current Vercel URL)
3. Click **"Sign In with Pi Browser"**
4. Complete Pi authentication
5. Click **"Create Family"**
6. Enter family name
7. Click **"Pay with Pi"** (0.1 Pi)
8. Approve the payment in Pi Wallet
9. Wait for transaction confirmation
10. ✅ Your family should now show as **ACTIVE**

### Expected Behavior

- 🔒 User authenticates with real Pi credentials
- 💰 Payment shows **0.1 Pi** (not Test Pi)
- 🏦 Payment goes to your configured wallet
- ✅ Transaction is verified on Pi blockchain
- 🎉 Family slot activates immediately

---

## 🐛 Troubleshooting

### Payment Shows "Test Pi"
- Check `NEXT_PUBLIC_PI_NETWORK=mainnet` is set in Vercel
- Redeploy your app after setting environment variables
- Clear browser cache and reload

### "Pi Browser Required" Error
- You must use the official Pi Browser app
- Desktop browsers won't work for real Pi payments
- Test Mode is disabled on Mainnet

### Payment Fails with "Invalid Wallet"
- Verify your wallet address in environment variables
- Ensure it's a Mainnet wallet, not Testnet
- Check for typos in the wallet address

### Transaction Not Completing
- Check your Pi API Secret is correct
- Look at Vercel Function logs for errors
- Verify your app has payment permissions enabled

---

## 📊 Monitoring Payments

### View Transaction Details

All payments are logged with `[v0]` prefix. To debug:

1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for `[v0]` messages showing:
   - Payment initiation
   - Server approval
   - Transaction hash
   - Completion status

### Check Pi Developer Portal

1. Go to [https://develop.pi](https://develop.pi)
2. Open your app
3. Navigate to **Payments** section
4. View all transactions and their status

---

## 🎯 Complete Checklist Item 10

Once you successfully process a payment:

1. Go to Pi Developer Portal
2. Open App Checklist
3. Item 10: "Process a Transaction on the App"
4. Click **"Mark as Complete"**
5. System will verify your transaction automatically
6. ✅ Item 10 should now be checked

---

## 🌐 Claim Your Domain

After completing all checklist items:

1. Go to [https://develop.pi](https://develop.pi)
2. Navigate to **Domains** section
3. Find your won auction: **askl.pi**
4. Click **"Claim Domain"**
5. Domain will be linked to your app
6. Users can access at: `https://askl.pi`

---

## 🔒 Security Recommendations

1. **Never commit** `PI_API_SECRET` to Git
2. **Rotate keys** periodically in Pi Developer Portal
3. **Monitor** payment logs for suspicious activity
4. **Validate** all payments server-side before activation
5. **Use HTTPS** only (Vercel provides this automatically)

---

## 📞 Support

If you encounter issues:

1. Check Vercel deployment logs
2. Check Pi Developer Portal app status
3. Review browser console for `[v0]` logs
4. Contact Pi Developer Support: [https://pinetwork-official.medium.com](https://pinetwork-official.medium.com)

---

## 🎉 Congratulations!

Your app is now running on **Pi Network Mainnet** and ready to accept real Pi payments!

**Next Steps:**
- Complete Step 10 by processing a test payment
- Claim your domain **askl.pi**
- Share your app with the Pi community
- Monitor usage and gather feedback

Good luck! 🚀
