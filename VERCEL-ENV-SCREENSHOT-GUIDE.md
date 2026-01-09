# Visual Guide: Adding Environment Variables in Vercel

## Step-by-Step with Screenshots

### Step 1: Access Vercel Dashboard

1. Open browser and go to: **https://vercel.com/dashboard**
2. Log in if needed
3. You'll see all your projects

### Step 2: Select Your Project

1. Look for project named "My Family" or "myfamilyvb-mb6"
2. Click on the project name

### Step 3: Go to Settings

1. At the top of the page, click **Settings** tab
2. In the left sidebar, click **Environment Variables**

### Step 4: Add Each Variable

For each variable, do this:

1. Click **Add New** button
2. In "Key" field, enter the variable name (e.g., `NEXT_PUBLIC_PI_API_KEY`)
3. In "Value" field, enter the variable value
4. Select which environments: Check **Production**, **Preview**, and **Development**
5. Click **Save**

### Step 5: Variables to Add

Add these one by one:

**Variable 1:**
- Key: `NEXT_PUBLIC_PI_API_KEY`
- Value: [Get from https://develop.pi → My Apps → Your App]

**Variable 2:**
- Key: `PI_API_SECRET`
- Value: [Get from https://develop.pi → My Apps → Your App]

**Variable 3:**
- Key: `NEXT_PUBLIC_PI_DOMAIN`
- Value: `askl.pi`

**Variable 4:**
- Key: `NEXT_PUBLIC_APP_URL`
- Value: `https://askl.pi`

**Variable 5:**
- Key: `NEXT_PUBLIC_DOMAIN_VALIDATION_KEY`
- Value: `fb59d8cea7bfe1a30108fe28615f0fe68eff509f8c96c949744ceb4b99f1603f00b6ea62149f978f4540b6cd04e14d9beee23c112f8575ed2dc687d517228cc3`

### Step 6: Redeploy

1. Click **Deployments** tab at the top
2. Find the most recent deployment (top of the list)
3. Click the **⋯** (three dots) button on the right
4. Click **Redeploy**
5. Confirm by clicking **Redeploy** again
6. Wait 1-2 minutes for deployment to complete

### Step 7: Test Validation File

1. Open new browser tab
2. Go to: `https://v0-myfamilyvb-mb6-v4q78-lcx.vercel.app/validation-key.txt`
3. You should see your validation key displayed as plain text

### Step 8: Verify in Pi Developer Portal

1. Go to: https://develop.pi
2. Login and go to **My Apps**
3. Click on "My Family"
4. Find **Domain Verification** section
5. Enter domain: `askl.pi`
6. Click **Verify Domain**

## Where to Get Your Pi API Key and Secret

1. Go to: **https://develop.pi**
2. Click **My Apps** in the top menu
3. Click on your **"My Family"** app
4. You'll see a section called **"App Credentials"** or **"API Keys"**
5. Copy your **API Key** (starts with something like `p7r2q...`)
6. Copy your **API Secret** (keep this private!)

## Important Notes

- You do NOT need to create a .env file on your computer
- All environment variables for published apps are managed in Vercel Dashboard
- The validation-key.txt is a separate file in the `public` folder
- After adding variables, you MUST redeploy for them to take effect

## Still Not Working?

Make sure:
1. You clicked **Save** after adding each variable
2. You checked all three environments (Production, Preview, Development)
3. You clicked **Redeploy** after adding all variables
4. You waited for the redeployment to finish (green checkmark)
5. The validation file URL shows your key without any HTML/error page

---

**Remember**: The .env file is only needed if you download the code and run it on your local computer. For published v0 apps, everything is configured in Vercel Dashboard online.
