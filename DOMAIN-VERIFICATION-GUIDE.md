# Domain Verification Guide for askl.pi

## Step-by-Step Process

### 1. Get Your Validation Key from Pi Developer Portal

1. Go to https://develop.pi
2. Navigate to your app settings
3. Find the "App Checklist" or "Domain Verification" section (item #8)
4. Copy the validation key they provide (it will be a long string of characters)

### 2. Update the validation-key.txt File

1. Open the file `public/validation-key.txt` in your project
2. Replace `YOUR_PI_VALIDATION_KEY_HERE` with the actual validation key from Pi Developer Portal
3. Save the file

**Example:**
If Pi gives you key: `pi_verify_abc123xyz789def456`

Your file should contain:
\`\`\`
pi_verify_abc123xyz789def456
\`\`\`

### 3. Deploy Your App

After updating the validation key:

1. **Deploy to Vercel** (easiest method):
   - Click the "Publish" button in v0
   - Or push to GitHub and connect to Vercel
   - Your app will be deployed with the validation file

2. **Configure Custom Domain on Vercel**:
   - Go to your Vercel project settings
   - Navigate to "Domains"
   - Add your domain: `askl.pi`
   - Follow Vercel's DNS configuration instructions

### 4. Point askl.pi to Your Deployment

**For Pi Network domains:**

1. Go to your Pi Browser wallet where you won the domain auction
2. Find your domain management/DNS settings
3. Add these DNS records pointing to Vercel:

   **Option A - CNAME (recommended):**
   \`\`\`
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   \`\`\`

   **Option B - A Record:**
   \`\`\`
   Type: A
   Name: @
   Value: 76.76.21.21
   \`\`\`

4. Wait for DNS propagation (can take 5-60 minutes)

### 5. Verify in Pi Developer Portal

Once your domain is live:

1. Return to https://develop.pi
2. Go to app checklist item #8
3. Click "Verify Domain"
4. Pi will check https://askl.pi/validation-key.txt
5. If successful, the checkmark will appear!

### 6. Test Your Validation File

Before verifying, test that your file is accessible:

\`\`\`
https://askl.pi/validation-key.txt
\`\`\`

Or if using Vercel's temporary domain first:
\`\`\`
https://your-app-name.vercel.app/validation-key.txt
\`\`\`

You should see your validation key displayed in the browser.

## Troubleshooting

### File Not Found (404)
- Make sure the file is in the `public` folder, not `public/validation-key.txt.txt`
- Redeploy your app after adding the file
- Clear your browser cache

### Wrong Content
- Ensure there are no extra spaces or line breaks
- The file should contain ONLY the validation key
- No quotes, no extra text

### DNS Not Resolving
- Wait longer for DNS propagation (up to 24-48 hours in some cases)
- Use `nslookup askl.pi` to check DNS status
- Verify your DNS records are correct

### Still Can't Verify
- Test with Vercel's provided domain first (e.g., your-app.vercel.app/validation-key.txt)
- Contact Pi Network support if domain configuration is unclear
- Make sure your app is publicly accessible (not behind authentication)

## Quick Checklist

- [ ] Got validation key from Pi Developer Portal
- [ ] Updated `public/validation-key.txt` with the key
- [ ] Deployed app to Vercel
- [ ] Added askl.pi domain in Vercel settings
- [ ] Configured DNS records for askl.pi
- [ ] Waited for DNS propagation
- [ ] Tested https://askl.pi/validation-key.txt in browser
- [ ] Clicked "Verify Domain" in Pi Developer Portal
- [ ] Domain verified successfully!

## Next Steps After Verification

Once your domain is verified:

1. Update environment variables:
   - Set `NEXT_PUBLIC_APP_URL=https://askl.pi`
   
2. Update Pi app configuration with your verified domain

3. Test your app at https://askl.pi in Pi Browser

4. Configure database (see DATABASE-SETUP-GUIDE.md) for data persistence
