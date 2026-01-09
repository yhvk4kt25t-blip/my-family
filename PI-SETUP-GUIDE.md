# Pi Network Domain Setup Guide for askl.pi

## Step 1: Pi Developer Portal Configuration

1. **Access Pi Developer Portal**
   - Visit: https://develop.pi
   - Log in with your Pi account

2. **Register/Update Your App**
   - Click "Create App" or select your existing app
   - Fill in the following details:
     - **App Name**: My Family
     - **App Domain**: askl.pi
     - **App URL**: https://askl.pi (once configured)
     - **Callback URL**: https://askl.pi/api/auth/callback
     - **Redirect URI**: https://askl.pi/dashboard

3. **Configure App Settings**
   - **Description**: Records memories, shares moments, helps to plan activities and unites family together
   - **Category**: Social & Lifestyle
   - **Permissions**: Select "Payments" and "Username"
   - **App Icon**: Upload your app icon (512x512 px recommended)
   - **Screenshots**: Upload app screenshots

4. **Get Your API Keys**
   - Copy your **App ID** (Pi API Key)
   - Copy your **API Secret Key**
   - Save these securely - you'll need them

## Step 2: Environment Variables Setup

Add these to your project's environment variables:

\`\`\`env
# Pi Network Configuration
NEXT_PUBLIC_PI_API_KEY=your_pi_app_id_here
PI_API_SECRET=your_pi_api_secret_here
NEXT_PUBLIC_PI_DOMAIN=askl.pi
NEXT_PUBLIC_APP_URL=https://askl.pi

# Pi Wallet (already configured in your app)
PI_WALLET_ADDRESS=GC444XDJDRRCYJTJZFEI34CWFHXT2R742XYJ4JO2FVPISBJ5PRFFQY5Q
\`\`\`

## Step 3: Domain DNS Configuration (If Hosting Outside Pi Browser)

If you're hosting on your own server:

1. **Point Domain to Your Server**
   - Go to your domain registrar
   - Add an A record pointing to your server IP
   - Or add a CNAME record pointing to your hosting service

2. **SSL Certificate**
   - Obtain SSL certificate for HTTPS
   - Pi Network requires secure connections

## Step 4: Pi Browser Configuration

1. **Register Domain in Pi Browser**
   - The Pi Browser will automatically recognize askl.pi
   - Ensure your app is approved in the Pi Developer Portal

2. **Test in Pi Browser**
   - Open Pi Browser on your mobile device
   - Navigate to: pi://askl.pi or https://askl.pi
   - Test the full app flow including payments

## Step 5: Deploy Your App

### Option A: Deploy to Vercel (Recommended)
\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Add custom domain in Vercel dashboard
# Settings > Domains > Add askl.pi
\`\`\`

### Option B: Deploy to Your Own Server
\`\`\`bash
# Build the app
npm run build

# Start production server
npm start

# Configure nginx/apache to serve from your domain
\`\`\`

## Step 6: Verify Integration

1. **Check Pi SDK Loading**
   - Open browser console in your app
   - Look for Pi SDK initialization logs
   - Should see: "[v0] Pi SDK loaded"

2. **Test Authentication**
   - Try logging in with Pi account
   - Verify user data is received

3. **Test Payment Flow**
   - Try purchasing a family slot
   - Check payment completion

4. **Test Data Persistence**
   - Create a family
   - Refresh the page
   - Verify family data persists

## Troubleshooting

### Domain Not Accessible
- Verify DNS propagation (can take 24-48 hours)
- Check SSL certificate is valid
- Ensure app is approved in Pi Developer Portal

### Pi SDK Not Loading
- Check internet connection
- Verify Pi SDK script in layout.tsx
- Try clearing browser cache

### Payment Fails
- Verify wallet address is correct
- Check Pi API keys are set
- Ensure user has enough Pi balance
- Check payment permissions in Pi Portal

### Data Not Persisting
- Currently using localStorage (browser-based)
- For production, set up a database (see DATABASE-SETUP-GUIDE.md)

## Next Steps

1. **Set Up Database** (Recommended)
   - Follow DATABASE-SETUP-GUIDE.md
   - Migrate from localStorage to persistent database

2. **Submit for Pi App Store**
   - Complete app testing
   - Submit for review in Pi Developer Portal
   - Wait for approval (typically 1-2 weeks)

3. **Monitor & Optimize**
   - Use Pi Analytics dashboard
   - Track user engagement
   - Optimize payment conversion

## Support

- **Pi Developer Docs**: https://developers.minepi.com
- **Pi Developer Forum**: https://developers.minepi.com/forum
- **App Issues**: Check console logs and error messages
