# My Family - Pi Network Family Management App

A comprehensive family management application built on Pi Network that helps families stay connected, preserve memories, and plan activities together.

## 🚀 Quick Start

### For Users

1. **In Pi Browser**: Open your deployed app URL in Pi Browser
2. **Create or Join**: Create a new family or join with a family code
3. **Get Started**: Share memories, plan activities, and trace your family tree

### For Developers - Complete Step 10

**Stuck on Pi Network Developer Checklist Step 10?**

Visit `/payment-test` in your deployed app for a complete diagnostic tool that will:
- ✅ Check all your configuration settings
- ✅ Show exactly what's wrong (testnet vs mainnet)
- ✅ Provide step-by-step fixes
- ✅ Let you test a real payment

## 📋 Step 10 Checklist - Simple Version

**Goal:** Process a real mainnet payment to prove your app works.

### What You Need:

1. **Mainnet API Credentials** from Pi Developer Portal
   - Go to: https://developers.minepi.com
   - Switch your app to "Mainnet" mode
   - Copy the NEW API Key and API Secret that appear

2. **Your Mainnet Wallet Address**
   - Open Pi Wallet app on your phone
   - Make sure you're on MAINNET (not testnet)
   - Copy your wallet address

3. **Add to Vercel Environment Variables:**
   ```
   NEXT_PUBLIC_PI_NETWORK=mainnet
   NEXT_PUBLIC_PI_API_KEY=<your mainnet API key>
   PI_API_SECRET=<your mainnet API secret>
   NEXT_PUBLIC_PI_WALLET_ADDRESS=<your mainnet wallet>
   ```

4. **Deploy and Test:**
   - Deploy your app from Vercel
   - Open in Pi Browser
   - Visit `/payment-test` page
   - Click "Process Test Payment"
   - Complete the 1 Pi payment

5. **Verify:**
   - Payment should show as successful
   - Check your wallet - you should receive the Pi
   - Step 10 is now complete! ✓

## 🔧 Diagnostic Tools

Your app includes several tools to help debug issues:

- `/payment-test` - **START HERE** - Complete payment system diagnostic
- `/setup-checklist` - Visual step-by-step setup guide
- `/simple-guide` - Non-technical documentation
- `/debug-mainnet` - Configuration verification tool

## 🎯 Features

- **Family Tree Management**: Create hierarchical family structures
- **Memory Sharing**: Post photos, videos, and moments
- **Activity Planning**: Schedule gatherings and get approval
- **Secure Authentication**: Pi Network authentication
- **Real Payments**: User-to-app Pi payments for family slots

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: shadcn/ui with Tailwind CSS
- **Authentication**: Pi Network SDK
- **Payments**: Pi Network Payments API
- **Storage**: LocalStorage (upgradeable to database)

## 📖 Documentation

All documentation is accessible directly in your deployed app:

- **For Non-Technical Users**: Visit `/simple-guide`
- **For Developers**: Visit `/setup-checklist`
- **For Debugging**: Visit `/payment-test` or `/debug-mainnet`

## ❓ Common Issues

### "App shows testnet everywhere"
**Solution:** Add `NEXT_PUBLIC_PI_NETWORK=mainnet` to Vercel environment variables

### "Sign in button not working"
**Solution:** Make sure you're opening the app in Pi Browser, not a regular web browser

### "Payment goes to wrong wallet"
**Solution:** Update `NEXT_PUBLIC_PI_WALLET_ADDRESS` with your MAINNET wallet (not testnet wallet)

### "Can't find API Secret"
**Solution:** API Secret only appears after you switch to mainnet in Pi Developer Portal

## 🎉 Success - Step 10 Complete!

Once you successfully process a test payment:
1. ✅ Your app is fully functional on mainnet
2. ✅ You can claim your askl.pi domain
3. ✅ Users can create families and make real payments

## 📞 Support

If you're still stuck after using the diagnostic tools:
1. Visit `/payment-test` and check all configuration items
2. Read the detailed error messages - they tell you exactly what to fix
3. Follow the step-by-step instructions in `/simple-guide`

## 📝 License

This project is built for Pi Network ecosystem.

---

**Need Help?** Open your app and visit `/payment-test` for instant diagnostics and step-by-step guidance.
