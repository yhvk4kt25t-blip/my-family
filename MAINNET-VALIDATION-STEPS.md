# How to Verify Your Mainnet App (Simple Steps)

## What You Just Did ✅
Your mainnet validation key is now added to the app. The key is:
```
7e10806275d52414550d8e57e3347e6c7bb9e79917fc5c06be6dece3e4712ef626ca6f4b11293f4eac89810deaf7fb30d1859bd7ca7bcb4fca75329cc7d670f9
```

## Next Steps (Follow in Order)

### Step 1: Deploy to Vercel
1. Click the "Publish" button at the top right of v0
2. OR go to your Vercel dashboard and click "Deploy"
3. Wait for deployment to complete (takes 1-2 minutes)
4. Your app will be at: `https://your-app-name.vercel.app`

### Step 2: Verify the Validation Key Works
1. Open your browser and go to:
   ```
   https://your-app-name.vercel.app/.well-known/pi-validation
   ```
2. You should see ONLY the validation key displayed on the page (nothing else)
3. If you see the key, it's working ✅

### Step 3: Complete Verification in Pi Developer Portal
1. Go to https://develop.pi/apps
2. Click on your MAINNET app "My Family"
3. Find the "Verify Domain" or "Validation" section
4. Click "Verify" or "Check Validation"
5. Pi Network will check your URL and verify the key
6. You should see "Verified ✅" status

### Step 4: Update Environment Variables for Mainnet
In your Vercel project settings → Environment Variables, add/update these:

**REQUIRED for mainnet:**
```
NEXT_PUBLIC_PI_NETWORK=mainnet
NEXT_PUBLIC_PI_API_KEY=<your mainnet API key from develop.pi>
PI_API_SECRET=<your mainnet API secret from develop.pi>
NEXT_PUBLIC_PI_WALLET_ADDRESS=<your mainnet Pi wallet address>
```

**How to get these values:**
1. **API Key & Secret**: 
   - Go to https://develop.pi/apps
   - Click your MAINNET app
   - Look for "API Keys" section
   - Copy the "API Key" and "API Secret" (secret only shows once)

2. **Wallet Address**:
   - Open Pi Browser app on your phone
   - Go to "Wallet" 
   - Switch to "Mainnet" at the top
   - Copy your mainnet wallet address (starts with G...)

### Step 5: Test Payment in Pi Browser
1. Open Pi Browser on your phone
2. Go to your app URL
3. Sign in with Pi
4. Try to create a family
5. Complete the payment (this completes Step 10 of checklist)

## Common Issues

**Q: Verification fails in Pi Developer Portal**
- Make sure you deployed the app AFTER updating the validation key
- Check the URL `https://your-app.vercel.app/.well-known/pi-validation` shows the correct key
- Wait 5 minutes and try verify again

**Q: App still shows testnet**
- Make sure `NEXT_PUBLIC_PI_NETWORK=mainnet` is set in Vercel
- Deploy the app again after setting environment variables

**Q: Payment shows wrong wallet**
- Update `NEXT_PUBLIC_PI_WALLET_ADDRESS` with your MAINNET wallet
- Deploy again

## You're Almost There!
Once verification is complete, you can proceed with Step 10 (payment test) and claim your askl.pi domain. The hardest part (verification) is done now.
