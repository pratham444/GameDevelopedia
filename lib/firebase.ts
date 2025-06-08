import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getAnalytics, isSupported } from "firebase/analytics"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyALJWumsV1X12TcGdJNnSJ8nIwS3MgMlBI",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "porfoliowebsite444.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "porfoliowebsite444",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "porfoliowebsite444.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "453223925799",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:453223925799:web:a1439524ab662219806602",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-R4XK6FW2WF",
}

// Initialize Firebase only if it hasn't been initialized
let app
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig)
} else {
  app = getApps()[0]
}

// Initialize Firebase services with error handling
let db, auth, storage, analytics

try {
  db = getFirestore(app)
  auth = getAuth(app)
  storage = getStorage(app)

  // Initialize Analytics only in browser environment
  if (typeof window !== "undefined") {
    isSupported().then((supported) => {
      if (supported) {
        analytics = getAnalytics(app)
      }
    })
  }
} catch (error) {
  console.warn("Firebase services initialization error:", error)
}

export { db, auth, storage, analytics }
export default app
