# 🚨 Deployment Troubleshooting Guide

## 🎯 Your Specific Issue

**Problem**: Game shows in local preview but not on deployed website
**Cause**: Environment variables not set in Vercel
**Solution**: Add Firebase environment variables to Vercel dashboard

## 📋 Step-by-Step Fix

### 1. Verify the Problem
Open your deployed website and press F12 → Console. Look for errors like:
- `Firebase app initialization error`
- `Missing or insufficient permissions`
- `Failed to get document`

### 2. Add Environment Variables to Vercel

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Find your project** and click on it
3. **Go to Settings** → **Environment Variables**
4. **Add these exact variables**:

| Variable Name | Value |
|---------------|-------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | `AIzaSyALJWumsV1X12TcGdJNnSJ8nIwS3MgMlBI` |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | `porfoliowebsite444.firebaseapp.com` |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | `porfoliowebsite444` |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | `porfoliowebsite444.firebasestorage.app` |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | `453223925799` |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | `1:453223925799:web:a1439524ab662219806602` |

5. **For each variable**: Select all environments (Production, Preview, Development)

### 3. Redeploy Your Project
1. Go to **Deployments** tab
2. Click on latest deployment
3. Click **"Redeploy"**
4. Wait for completion (2-3 minutes)

### 4. Test Your Website
Visit your live website and check if your game appears in the Games section.

## 🔍 Additional Checks

### Firebase Rules
Make sure your Firestore rules allow reading:
\`\`\`javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /games/{document} {
      allow read: if true;
    }
  }
}
\`\`\`

### Game Document Structure
Verify your game document in Firebase has these fields:
- `title` (string)
- `description` (string)
- `platform` (string)
- `genre` (string)
- `imageURL` (string)
- `downloadLink` (string)
- `rating` (string)

## 🆘 Still Not Working?

1. **Check browser console** for specific error messages
2. **Verify environment variables** are saved correctly
3. **Try force redeploy** in Vercel
4. **Check Firebase project status** in Firebase Console

Your game should appear after adding the environment variables! 🎮
