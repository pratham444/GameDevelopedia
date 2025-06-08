// 🔧 VERCEL ENVIRONMENT VARIABLES SETUP GUIDE
// Step-by-step instructions for your specific project

console.log(`
🔧 VERCEL ENVIRONMENT VARIABLES SETUP
====================================

Your Firebase project details:
- Project ID: porfoliowebsite444
- Region: Default
- Status: Active ✅

📋 EXACT STEPS TO FIX YOUR DEPLOYMENT:
====================================

1. 🌐 GO TO VERCEL DASHBOARD
   Visit: https://vercel.com/dashboard
   Login with your account

2. 🎯 FIND YOUR PROJECT
   Look for: "gamedevelopedia-website" or your project name
   Click on it

3. ⚙️ GO TO SETTINGS
   Click the "Settings" tab at the top

4. 🔐 ENVIRONMENT VARIABLES
   Click "Environment Variables" in the left sidebar

5. ➕ ADD THESE EXACT VARIABLES:
   Click "Add New" for each one:

   Variable 1:
   Name: NEXT_PUBLIC_FIREBASE_API_KEY
   Value: AIzaSyALJWumsV1X12TcGdJNnSJ8nIwS3MgMlBI
   Environments: ✅ Production ✅ Preview ✅ Development

   Variable 2:
   Name: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
   Value: porfoliowebsite444.firebaseapp.com
   Environments: ✅ Production ✅ Preview ✅ Development

   Variable 3:
   Name: NEXT_PUBLIC_FIREBASE_PROJECT_ID
   Value: porfoliowebsite444
   Environments: ✅ Production ✅ Preview ✅ Development

   Variable 4:
   Name: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
   Value: porfoliowebsite444.firebasestorage.app
   Environments: ✅ Production ✅ Preview ✅ Development

   Variable 5:
   Name: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
   Value: 453223925799
   Environments: ✅ Production ✅ Preview ✅ Development

   Variable 6:
   Name: NEXT_PUBLIC_FIREBASE_APP_ID
   Value: 1:453223925799:web:a1439524ab662219806602
   Environments: ✅ Production ✅ Preview ✅ Development

6. 🚀 REDEPLOY YOUR PROJECT
   - Go to "Deployments" tab
   - Find the latest deployment
   - Click the three dots (⋯)
   - Select "Redeploy"
   - Wait for deployment to complete (2-3 minutes)

7. ✅ TEST YOUR WEBSITE
   - Visit your live website
   - Check if your game appears in the Games section
   - Open browser console (F12) - should see no errors

📱 QUICK TEST:
=============

After redeployment, visit your website and:
1. Go to Games section
2. You should see your game from Firebase
3. If still not working, check browser console for errors

🆘 IF STILL NOT WORKING:
=======================

1. Double-check variable names (case-sensitive!)
2. Make sure all environments are selected
3. Verify you clicked "Save" for each variable
4. Try a force redeploy
5. Check Firebase security rules

Your game should appear after following these steps! 🎮
`)
