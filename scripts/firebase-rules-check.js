// 🔒 FIREBASE SECURITY RULES CHECKER
// Make sure your Firebase rules allow reading data

console.log(`
🔒 FIREBASE SECURITY RULES CHECK
===============================

Your Firebase project: porfoliowebsite444

📋 STEP 1: CHECK YOUR FIRESTORE RULES
====================================

1. Go to: https://console.firebase.google.com/
2. Select project: porfoliowebsite444
3. Go to: Firestore Database → Rules
4. Your rules should look like this:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all public collections
    match /games/{document} {
      allow read: if true;
      allow write: if false;
    }
    
    match /tutorials/{document} {
      allow read: if true;
      allow write: if false;
    }
    
    match /team/{document} {
      allow read: if true;
      allow write: if false;
    }
    
    match /blogs/{document} {
      allow read: if true;
      allow write: if false;
    }
    
    match /contact/{document} {
      allow read: if true;
      allow write: if false;
    }
    
    // Allow contact form submissions
    match /contact_messages/{document} {
      allow read: if false;
      allow write: if true;
    }
  }
}

📋 STEP 2: VERIFY YOUR GAME DOCUMENT
===================================

1. In Firebase Console → Firestore Database
2. Click on "games" collection
3. You should see your game document
4. Click on it to verify all fields are present:
   - title (string)
   - description (string)
   - platform (string)
   - genre (string)
   - imageURL (string)
   - downloadLink (string)
   - rating (string)

📋 STEP 3: TEST FIREBASE CONNECTION
==================================

You can test if Firebase is working by:
1. Opening your deployed website
2. Press F12 → Console tab
3. Type this command:

firebase.apps.length

If it returns a number > 0, Firebase is connected!

🚨 COMMON ISSUES:
================

Issue 1: "Permission denied"
Solution: Update Firestore rules to allow read access

Issue 2: "Collection not found"
Solution: Make sure you have a "games" collection with documents

Issue 3: "Network error"
Solution: Check environment variables in Vercel

Issue 4: "Invalid API key"
Solution: Verify API key is correct in Vercel environment variables

✅ SUCCESS INDICATORS:
=====================

When everything is working:
- No console errors
- Games section shows your Firebase data
- Contact form works
- All sections load properly

Let me know what you find! 🔍
`)
