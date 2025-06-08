// 🔍 FIREBASE DATA VALIDATOR
// This script helps you check if your Firebase data is correctly structured

console.log(`
🔍 FIREBASE DATA VALIDATOR
========================

Use this checklist to verify your Firebase collections are set up correctly:

✅ GAMES COLLECTION
-----------------
Each game document should have:
□ title (string)
□ description (string)
□ platform (string)
□ genre (string)
□ imageURL (string)
□ downloadLink (string)
□ rating (string)

✅ TUTORIALS COLLECTION
--------------------
Each tutorial document should have:
□ title (string)
□ videoURL (string)
□ description (string)
□ tags (array of strings)

✅ TEAM COLLECTION
---------------
Each team member document should have:
□ name (string)
□ role (string)
□ bio (string)
□ imageURL (string)
□ email (string)
□ socials (map with github, linkedin, etc.)

✅ BLOGS COLLECTION
----------------
Each blog post document should have:
□ title (string)
□ thumbnailURL (string)
□ content (string)
□ excerpt (string)
□ author (string)
□ datePublished (string)
□ tags (array of strings)

✅ CONTACT COLLECTION
------------------
Should have ONE document with ID "info" containing:
□ email (string)
□ phone (string)
□ address (string)
□ socials (map with github, youtube, linkedin, etc.)

🚨 TROUBLESHOOTING
----------------
If your website sections aren't showing data:

1. Check browser console for errors
2. Verify collection names are EXACTLY as listed above
3. Verify all required fields exist with correct types
4. Check that image URLs are valid and accessible
5. Make sure the contact document ID is "info"

💡 PRO TIP
---------
After adding data, refresh your website and check each section!
`)
