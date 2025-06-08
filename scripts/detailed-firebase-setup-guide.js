// 🔥 DETAILED FIREBASE SETUP GUIDE
// This script provides exact instructions for setting up your Firebase collections

console.log(`
🔥 DETAILED FIREBASE SETUP GUIDE
===============================

I see you're just getting started with your Firebase database! Here's exactly what you need to create:

📋 STEP 1: CREATE THE GAMES COLLECTION
=====================================

1. Click "Start collection" button
2. Enter collection ID: games
3. Click "Next"
4. For your first game document, add these EXACT fields:

   Field Name    |  Type   |  Value (example)
   ------------- | ------- | -----------------
   title         | string  | "Neon Runner"
   description   | string  | "A fast-paced endless runner with stunning neon visuals and electronic soundtrack."
   platform      | string  | "Mobile (iOS/Android)"
   genre         | string  | "Endless Runner"
   imageURL      | string  | "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop"
   downloadLink  | string  | "https://play.google.com/store"
   rating        | string  | "4.5"

5. Click "Save"
6. Add more game documents with the SAME field structure

📋 STEP 2: CREATE THE TUTORIALS COLLECTION
========================================

1. Go back to main database view
2. Click "Start collection" button
3. Enter collection ID: tutorials
4. Click "Next"
5. For your first tutorial document, add these EXACT fields:

   Field Name    |  Type   |  Value (example)
   ------------- | ------- | -----------------
   title         | string  | "Unity Basics for Beginners"
   videoURL      | string  | "https://youtube.com/watch?v=your-video-id"
   description   | string  | "Learn the fundamentals of Unity game engine from scratch."
   tags          | array   | Add array items (strings): "Unity", "Beginner", "Basics"

6. Click "Save"
7. Add more tutorial documents with the SAME field structure

📋 STEP 3: CREATE THE TEAM COLLECTION
===================================

1. Go back to main database view
2. Click "Start collection" button
3. Enter collection ID: team
4. Click "Next"
5. For your first team member document, add these EXACT fields:

   Field Name    |  Type   |  Value (example)
   ------------- | ------- | -----------------
   name          | string  | "Alex Chen"
   role          | string  | "Lead Game Developer"
   bio           | string  | "10+ years of experience in game development with expertise in Unity and Unreal Engine."
   imageURL      | string  | "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
   email         | string  | "alex@yourdomain.com"
   socials       | map     | Add map with these fields:
                          |   github: "https://github.com/username"
                          |   linkedin: "https://linkedin.com/in/username"
                          |   twitter: "https://twitter.com/username"

6. Click "Save"
7. Add more team member documents with the SAME field structure

📋 STEP 4: CREATE THE BLOGS COLLECTION
===================================

1. Go back to main database view
2. Click "Start collection" button
3. Enter collection ID: blogs
4. Click "Next"
5. For your first blog post document, add these EXACT fields:

   Field Name    |  Type   |  Value (example)
   ------------- | ------- | -----------------
   title         | string  | "Getting Started with Unity 2D Game Development"
   thumbnailURL  | string  | "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop"
   content       | string  | "Learn the fundamentals of Unity 2D development and create your first platformer game from scratch with this comprehensive guide."
   excerpt       | string  | "Learn the fundamentals of Unity 2D development and create your first platformer game from scratch."
   author        | string  | "Your Name"
   datePublished | string  | "2024-06-08T12:00:00.000Z"
   tags          | array   | Add array items (strings): "Unity", "2D", "Tutorial"

6. Click "Save"
7. Add more blog post documents with the SAME field structure

📋 STEP 5: CREATE THE CONTACT COLLECTION
=====================================

1. Go back to main database view
2. Click "Start collection" button
3. Enter collection ID: contact
4. Click "Next"
5. For document ID, type: info
6. Add these EXACT fields:

   Field Name    |  Type   |  Value (example)
   ------------- | ------- | -----------------
   email         | string  | "hello@yourdomain.com"
   phone         | string  | "+1 (555) 123-4567"
   address       | string  | "Your City, State/Country"
   socials       | map     | Add map with these fields:
                          |   github: "https://github.com/yourcompany"
                          |   youtube: "https://youtube.com/@yourchannel"
                          |   linkedin: "https://linkedin.com/company/yourcompany"

7. Click "Save"

📋 STEP 6: VERIFY YOUR COLLECTIONS
================================

After creating all collections, your Firebase should have:

✅ games collection (with multiple game documents)
✅ tutorials collection (with multiple tutorial documents)
✅ team collection (with multiple team member documents)
✅ blogs collection (with multiple blog post documents)
✅ contact collection (with one "info" document)

📋 STEP 7: TEST YOUR WEBSITE
==========================

1. Go to your website
2. Refresh the page
3. Each section should now show your real data!

🚨 IMPORTANT NOTES:
=================

1. Field names are CASE-SENSITIVE - "imageURL" is not the same as "imageUrl"
2. Don't change the field names or types
3. For image URLs, you can use placeholder images from Unsplash until you have your own
4. The "socials" field is a MAP type (like an object) with nested fields
5. For arrays (like "tags"), add each item individually

💡 NEED IMAGES?
=============

For placeholder images, use:
- Games: https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop
- Team: https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face
- Blog: https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop

Later, replace with your actual images!

🎮 EXAMPLE: COMPLETE GAME DOCUMENT
================================

Here's a complete example of a game document:

{
  title: "Cyber Puzzle",
  description: "Mind-bending puzzle game set in a cyberpunk world with 100+ challenging levels.",
  platform: "PC/Mac",
  genre: "Puzzle",
  imageURL: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=200&fit=crop",
  downloadLink: "https://steam.com",
  rating: "4.7"
}

👥 EXAMPLE: COMPLETE TEAM MEMBER DOCUMENT
=======================================

Here's a complete example of a team member document:

{
  name: "Sarah Johnson",
  role: "UI/UX Designer",
  bio: "Creative designer specializing in game interfaces and user experience design.",
  imageURL: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
  email: "sarah@yourdomain.com",
  socials: {
    github: "https://github.com/sarahjohnson",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    twitter: "https://twitter.com/sarahjohnson"
  }
}

Need more help? Let me know!
`)
