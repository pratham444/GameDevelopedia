// Firestore Security Rules Setup Guide
// Copy these rules to your Firestore Rules tab in Firebase Console

console.log(`
🔥 FIRESTORE SECURITY RULES SETUP
================================

1. Go to Firebase Console: https://console.firebase.google.com/
2. Select your project: porfoliowebsite444
3. Navigate to: Firestore Database → Rules
4. Replace the existing rules with the rules below:

COPY THE RULES BELOW:
====================
`)

const firestoreRules = `rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all public collections for everyone
    match /games/{document} {
      allow read: if true;
      allow write: if false; // Only allow writes through admin
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
    
    // Allow anyone to write contact messages (for contact form)
    match /contact_messages/{document} {
      allow read: if false; // Only admin can read messages
      allow write: if true;  // Anyone can submit contact form
    }
  }
}`

console.log(firestoreRules)

console.log(`
====================

5. Click "Publish" to save the rules
6. Wait a few seconds for the rules to propagate
7. Refresh your website to test

⚠️  IMPORTANT: These rules allow public read access to your content
   but prevent unauthorized writes. This is perfect for a public website.

✅ After setting up rules, run the populate script to add data.
`)
