// 📁 IMAGE FOLDER SETUP SCRIPT
// This script helps you understand the folder structure you need to create

console.log(`
📁 IMAGE FOLDER SETUP FOR GITHUB PAGES
=====================================

You need to create this EXACT folder structure in your project:

public/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
└── images/
    ├── games/
    │   ├── game1.jpg
    │   ├── game2.jpg
    │   └── game3.jpg
    ├── team/
    │   ├── member1.jpg
    │   ├── member2.jpg
    │   └── member3.jpg
    └── blog/
        ├── post1.jpg
        ├── post2.jpg
        └── post3.jpg

📋 STEP-BY-STEP INSTRUCTIONS:
============================

1. 📁 CREATE FOLDERS
   - Go to your project's 'public' folder
   - Create a new folder called 'images'
   - Inside 'images', create 3 folders: 'games', 'team', 'blog'

2. 📸 ADD YOUR IMAGES
   - Add your game screenshots to 'public/images/games/'
   - Add your team photos to 'public/images/team/'
   - Add your blog thumbnails to 'public/images/blog/'

3. 🔗 UPDATE FIREBASE COLLECTIONS
   Use these URL patterns in your Firebase collections:

   GAMES COLLECTION:
   ----------------
   imageURL: "/images/games/your-game-name.jpg"
   
   Example:
   imageURL: "/images/games/neon-runner.jpg"
   imageURL: "/images/games/cyber-puzzle.jpg"
   imageURL: "/images/games/space-defender.jpg"

   TEAM COLLECTION:
   ---------------
   imageURL: "/images/team/person-name.jpg"
   
   Example:
   imageURL: "/images/team/alex-chen.jpg"
   imageURL: "/images/team/sarah-johnson.jpg"
   imageURL: "/images/team/mike-rodriguez.jpg"

   BLOG COLLECTION:
   ---------------
   thumbnailURL: "/images/blog/post-name.jpg"
   
   Example:
   thumbnailURL: "/images/blog/unity-tutorial.jpg"
   thumbnailURL: "/images/blog/mobile-optimization.jpg"
   thumbnailURL: "/images/blog/game-ui-design.jpg"

4. 🧪 TEST LOCALLY
   - Start your development server: npm run dev
   - Check if images load correctly on your website
   - Open browser dev tools to check for any image loading errors

5. 🚀 DEPLOY TO GITHUB PAGES
   - Push your code to GitHub
   - Deploy to GitHub Pages
   - Your images will automatically work on the live site!

💡 PRO TIPS:
===========

1. 📏 OPTIMIZE IMAGE SIZES:
   - Games: 400x200px (keep under 300KB)
   - Team: 300x300px (keep under 200KB)
   - Blog: 400x200px (keep under 300KB)

2. 🗂️ USE DESCRIPTIVE FILENAMES:
   - Good: "neon-runner-gameplay.jpg"
   - Bad: "IMG_001.jpg"

3. 🔄 CONSISTENT NAMING:
   - Use lowercase
   - Use hyphens instead of spaces
   - Be descriptive but concise

4. 📱 TEST ON MOBILE:
   - Check image loading on mobile devices
   - Ensure images look good on small screens

🚨 COMMON MISTAKES TO AVOID:
===========================

❌ Don't use absolute URLs like "https://github.com/..."
❌ Don't put images outside the public folder
❌ Don't forget the leading slash: "/images/..."
❌ Don't use spaces in filenames
❌ Don't upload huge unoptimized images

✅ DO use relative URLs: "/images/games/game-name.jpg"
✅ DO optimize images before adding them
✅ DO use descriptive filenames
✅ DO test locally before deploying

🎯 EXAMPLE FIREBASE UPDATES:
===========================

After adding images to your folders, update your Firebase collections like this:

// Games Collection Document Example:
{
  title: "Neon Runner",
  description: "A fast-paced endless runner...",
  platform: "Mobile (iOS/Android)",
  genre: "Endless Runner",
  imageURL: "/images/games/neon-runner.jpg",  // ← This is the key part!
  downloadLink: "https://play.google.com/store",
  rating: "4.5"
}

// Team Collection Document Example:
{
  name: "Alex Chen",
  role: "Lead Game Developer",
  bio: "10+ years of experience...",
  imageURL: "/images/team/alex-chen.jpg",  // ← This is the key part!
  email: "alex@yourdomain.com",
  socials: {
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen"
  }
}

Ready to start? Create those folders and add your images! 🚀
`)
