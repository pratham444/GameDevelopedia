// 🚀 COMPLETE GITHUB DEPLOYMENT GUIDE
// Follow these exact steps to deploy your website

console.log(`
🚀 COMPLETE GITHUB DEPLOYMENT GUIDE
==================================

Follow these steps EXACTLY to deploy your GameDevelopedia website:

📋 STEP 1: PREPARE YOUR PROJECT
==============================

Before uploading to GitHub, make sure you have:
✅ All your code files
✅ Images in public/images/ folders
✅ Firebase collections updated
✅ Environment variables set up

📋 STEP 2: CREATE GITHUB REPOSITORY
==================================

1. Go to https://github.com
2. Click the "+" icon in top right corner
3. Click "New repository"
4. Fill in repository details:
   - Repository name: "gamedevelopedia-website" (or your preferred name)
   - Description: "GameDevelopedia - Game Development Website"
   - Make it PUBLIC (required for free GitHub Pages)
   - ✅ Check "Add a README file"
   - ✅ Check "Add .gitignore" and select "Node"
5. Click "Create repository"

📋 STEP 3: CLONE REPOSITORY TO YOUR COMPUTER
==========================================

1. On your new repository page, click the green "Code" button
2. Copy the HTTPS URL (looks like: https://github.com/yourusername/gamedevelopedia-website.git)
3. Open terminal/command prompt on your computer
4. Navigate to where you want to store the project:
   cd Desktop  (or wherever you want it)
5. Clone the repository:
   git clone https://github.com/yourusername/gamedevelopedia-website.git
6. Enter the folder:
   cd gamedevelopedia-website

📋 STEP 4: ADD YOUR PROJECT FILES
================================

Now you need to copy ALL your GameDevelopedia files into this folder:

COPY THESE FILES/FOLDERS:
├── .env.local
├── .env.example
├── .github/
├── .gitignore
├── README.md
├── app/
├── components/
├── hooks/
├── lib/
├── next.config.mjs
├── package.json
├── public/
├── scripts/
├── tailwind.config.ts
├── tsconfig.json
└── types/

IMPORTANT: Copy EVERYTHING from your GameDevelopedia project!

📋 STEP 5: INSTALL DEPENDENCIES
==============================

In your terminal, inside the project folder:
1. npm install

This will install all the required packages.

📋 STEP 6: TEST YOUR PROJECT LOCALLY
===================================

Before uploading, make sure everything works:
1. npm run dev
2. Open http://localhost:3000
3. Check that all sections load properly
4. Verify images display correctly
5. Test the contact form
6. If everything works, press Ctrl+C to stop the server

📋 STEP 7: COMMIT AND PUSH TO GITHUB
===================================

Now upload your code to GitHub:

1. Add all files to git:
   git add .

2. Commit your changes:
   git commit -m "Initial commit: GameDevelopedia website"

3. Push to GitHub:
   git push origin main

📋 STEP 8: ENABLE GITHUB PAGES
=============================

1. Go to your repository on GitHub
2. Click on "Settings" tab (at the top of the repository)
3. Scroll down to "Pages" section (in the left sidebar)
4. Under "Source", select "GitHub Actions"
5. Click "Save"

📋 STEP 9: AUTOMATIC DEPLOYMENT
==============================

The GitHub Actions workflow I provided will automatically:
1. Build your Next.js project
2. Export it as static files
3. Deploy to GitHub Pages

You can watch the deployment progress:
1. Go to "Actions" tab in your repository
2. You'll see a workflow running called "Deploy to GitHub Pages"
3. Click on it to see the progress
4. Wait for it to complete (usually 2-5 minutes)

📋 STEP 10: ACCESS YOUR LIVE WEBSITE
===================================

Once deployment is complete, your website will be available at:
https://yourusername.github.io/gamedevelopedia-website/

Replace "yourusername" with your actual GitHub username
Replace "gamedevelopedia-website" with your actual repository name

🎉 CONGRATULATIONS! YOUR WEBSITE IS LIVE!

📋 STEP 11: UPDATE YOUR WEBSITE (FUTURE CHANGES)
===============================================

To update your website in the future:
1. Make changes to your code
2. git add .
3. git commit -m "Description of your changes"
4. git push origin main
5. GitHub Actions will automatically redeploy your site!

🚨 TROUBLESHOOTING COMMON ISSUES:
================================

Issue 1: "Repository not found"
Solution: Make sure you're using the correct repository URL

Issue 2: "Permission denied"
Solution: Set up SSH keys or use HTTPS with your GitHub credentials

Issue 3: "Build failed"
Solution: Check the Actions tab for error details, usually missing dependencies

Issue 4: "Images not loading"
Solution: Make sure images are in public/images/ and URLs start with "/"

Issue 5: "Environment variables not working"
Solution: Add environment variables in GitHub repository settings

💡 PRO TIPS:
===========

1. 📱 Test your live site on mobile devices
2. 🔍 Check browser console for any errors
3. 📊 Monitor your site with Google Analytics
4. 🔄 Keep your dependencies updated
5. 💾 Always test locally before pushing changes

🔐 SECURITY NOTE:
================

Your .env.local file contains sensitive information. Make sure:
✅ .env.local is in your .gitignore file
✅ Never commit API keys to GitHub
✅ Use environment variables in GitHub for production

Ready to deploy? Follow these steps one by one! 🚀
`)
