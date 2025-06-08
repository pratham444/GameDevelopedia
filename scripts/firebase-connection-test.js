// 🔍 FIREBASE CONNECTION DIAGNOSTIC TOOL
// Run this to test your Firebase connection

console.log(`
🔍 FIREBASE CONNECTION DIAGNOSTIC
================================

Let's check if your Firebase is properly connected:

📋 STEP 1: CHECK ENVIRONMENT VARIABLES
====================================

Your current environment variables should be:
- NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyALJWumsV1X12TcGdJNnSJ8nIwS3MgMlBI
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=porfoliowebsite444.firebaseapp.com
- NEXT_PUBLIC_FIREBASE_PROJECT_ID=porfoliowebsite444
- NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=porfoliowebsite444.firebasestorage.app
- NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=453223925799
- NEXT_PUBLIC_FIREBASE_APP_ID=1:453223925799:web:a1439524ab662219806602

📋 STEP 2: VERIFY LOCAL VS PRODUCTION
===================================

LOCAL (Preview) - Works ✅
- Uses .env.local file
- Firebase connection successful
- Data loads properly

PRODUCTION (Deployed) - Not Working ❌
- Missing environment variables in Vercel
- Firebase connection fails
- No data loads

📋 STEP 3: QUICK DIAGNOSIS
=========================

Open your deployed website and:
1. Press F12 (open developer tools)
2. Go to Console tab
3. Look for these error messages:

❌ "Firebase app initialization error"
❌ "Missing or insufficient permissions"
❌ "Failed to get document"
❌ "Network request failed"

If you see any of these, your environment variables are missing in Vercel!

📋 STEP 4: FIX THE ISSUE
=======================

The solution is to add environment variables to Vercel:

1. Go to: https://vercel.com/dashboard
2. Find your project: gamedevelopedia-website (or your project name)
3. Click on it
4. Go to "Settings" tab
5. Click "Environment Variables" in left sidebar
6. Add each variable one by one:

Variable Name: NEXT_PUBLIC_FIREBASE_API_KEY
Value: AIzaSyALJWumsV1X12TcGdJNnSJ8nIwS3MgMlBI
Environment: Production, Preview, Development

Variable Name: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
Value: porfoliowebsite444.firebaseapp.com
Environment: Production, Preview, Development

Variable Name: NEXT_PUBLIC_FIREBASE_PROJECT_ID
Value: porfoliowebsite444
Environment: Production, Preview, Development

Variable Name: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
Value: porfoliowebsite444.firebasestorage.app
Environment: Production, Preview, Development

Variable Name: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
Value: 453223925799
Environment: Production, Preview, Development

Variable Name: NEXT_PUBLIC_FIREBASE_APP_ID
Value: 1:453223925799:web:a1439524ab662219806602
Environment: Production, Preview, Development

7. After adding all variables, REDEPLOY your project:
   - Go to "Deployments" tab
   - Click on latest deployment
   - Click "Redeploy"

📋 STEP 5: VERIFY THE FIX
========================

After redeployment:
1. Visit your live website
2. Check if games section shows your data
3. Open browser console - should see no Firebase errors
4. Your game from Firebase should now appear!

🚨 COMMON MISTAKES TO AVOID:
===========================

❌ Forgetting to redeploy after adding environment variables
❌ Typos in variable names (they're case-sensitive!)
❌ Missing NEXT_PUBLIC_ prefix
❌ Wrong environment selection (make sure all 3 are checked)

✅ WHAT SHOULD HAPPEN AFTER FIX:
===============================

- Your deployed website will connect to Firebase
- Games, team, blog, tutorials will load from Firebase
- Contact form will work properly
- No more console errors

Need help with any of these steps? Let me know! 🚀
`)
