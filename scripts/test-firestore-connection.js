// Test Firestore connection and permissions
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyALJWumsV1X12TcGdJNnSJ8nIwS3MgMlBI",
  authDomain: "porfoliowebsite444.firebaseapp.com",
  projectId: "porfoliowebsite444",
  storageBucket: "porfoliowebsite444.firebasestorage.app",
  messagingSenderId: "453223925799",
  appId: "1:453223925799:web:a1439524ab662219806602",
  measurementId: "G-R4XK6FW2WF",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function testFirestoreConnection() {
  console.log("🔥 Testing Firestore Connection...")
  console.log("Project ID:", firebaseConfig.projectId)

  try {
    // Test reading from a collection
    console.log("\n📚 Testing collection access...")

    const collections = ["games", "tutorials", "team", "blogs", "contact"]

    for (const collectionName of collections) {
      try {
        console.log(`\n📁 Testing ${collectionName} collection...`)
        const querySnapshot = await getDocs(collection(db, collectionName))
        console.log(`✅ ${collectionName}: ${querySnapshot.size} documents found`)

        if (querySnapshot.size > 0) {
          querySnapshot.forEach((doc) => {
            console.log(`   - Document ID: ${doc.id}`)
          })
        } else {
          console.log(`   ℹ️  No documents in ${collectionName} collection`)
        }
      } catch (error) {
        console.error(`❌ Error accessing ${collectionName}:`, error.message)

        if (error.message.includes("Missing or insufficient permissions")) {
          console.log(`   🔧 Fix: Update Firestore security rules to allow read access`)
        }
      }
    }

    console.log("\n🎉 Connection test completed!")
    console.log("\n📋 Next steps:")
    console.log("1. If you see permission errors, update your Firestore rules")
    console.log("2. If collections are empty, run the populate script")
    console.log("3. Refresh your website to see the data")
  } catch (error) {
    console.error("❌ Connection failed:", error)
    console.log("\n🔧 Troubleshooting:")
    console.log("1. Check your Firebase project ID")
    console.log("2. Verify Firestore is enabled in your project")
    console.log("3. Update security rules to allow read access")
  }
}

testFirestoreConnection()
