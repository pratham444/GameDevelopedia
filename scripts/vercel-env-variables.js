// 🔐 VERCEL ENVIRONMENT VARIABLES GUIDE
// How to set up environment variables in Vercel

console.log(`
🔐 VERCEL ENVIRONMENT VARIABLES GUIDE
====================================

Your GameDevelopedia website needs these environment variables in Vercel:

📋 REQUIRED ENVIRONMENT VARIABLES:
================================

Firebase Configuration:
----------------------
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

EmailJS Configuration:
---------------------
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

📋 HOW TO ADD ENVIRONMENT VARIABLES IN VERCEL:
===========================================

1. Go to Vercel Dashboard: https://vercel.com/dashboard
2. Select your project
3. Click on "Settings" tab
4. Click on "Environment Variables" in the left sidebar
5. For each variable:
   - Enter the name (e.g., NEXT_PUBLIC_FIREBASE_API_KEY)
   - Enter the value (e.g., your actual Firebase API key)
   - Select environments: Production, Preview, Development
   - Click "Add"
6. Repeat for all environment variables
7. After adding all variables, redeploy your project:
   - Go to "Deployments" tab
   - Find your latest deployment
   - Click the three dots (...)
   - Select "Redeploy"

📋 CHECKING IF ENVIRONMENT VARIABLES ARE WORKING:
==============================================

1. After deployment, visit your website
2. Open browser developer tools (F12 or right-click > Inspect)
3. Go to Console tab
4. If there are no Firebase or EmailJS connection errors, your variables are working!

🚨 TROUBLESHOOTING:
=================

Issue: "Firebase app initialization error"
Solution: Double-check your Firebase configuration variables

Issue: "EmailJS not configured"
Solution: Verify your EmailJS variables are correct

Issue: "Environment variables not available in client"
Solution: Make sure they all start with NEXT_PUBLIC_

💡 PRO TIPS:
===========

1. Keep your .env.local file for local development
2. Never commit .env.local to Git
3. Use different values for development and production if needed
4. You can create different environment variables for Preview deployments

🔒 SECURITY NOTE:
===============

Even though these variables start with NEXT_PUBLIC_, they are still
configuration variables, not secrets. However, it's good practice to
treat them carefully and not share them unnecessarily.

That's it! Once your environment variables are set up in Vercel,
your GameDevelopedia website should work perfectly! 🎉
`)
