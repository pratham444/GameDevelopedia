// 🚀 GITHUB PAGES DEPLOYMENT GUIDE
// Complete guide for deploying your Next.js site to GitHub Pages

console.log(`
🚀 GITHUB PAGES DEPLOYMENT GUIDE
===============================

Since you're hosting on GitHub Pages, here's everything you need to know:

📋 STEP 1: CONFIGURE NEXT.JS FOR GITHUB PAGES
============================================

1. Create/update next.config.mjs file in your project root:

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Add your repository name here if it's not your main GitHub Pages site
  // basePath: '/your-repository-name',
  // assetPrefix: '/your-repository-name/',
}

export default nextConfig

📋 STEP 2: UPDATE PACKAGE.JSON SCRIPTS
====================================

Add these scripts to your package.json:

"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "export": "next build && next export",
  "deploy": "npm run export && touch out/.nojekyll && git add out/ && git commit -m 'Deploy to GitHub Pages' && git subtree push --prefix out origin gh-pages"
}

📋 STEP 3: CREATE .NOJEKYLL FILE
==============================

Create a file called .nojekyll in your public folder (this tells GitHub Pages not to use Jekyll):

public/.nojekyll

📋 STEP 4: GITHUB REPOSITORY SETUP
=================================

1. Push your code to GitHub
2. Go to your repository settings
3. Scroll down to "Pages" section
4. Select source: "Deploy from a branch"
5. Select branch: "gh-pages"
6. Click "Save"

📋 STEP 5: DEPLOY YOUR SITE
=========================

Option A - Automatic with GitHub Actions (Recommended):
Create .github/workflows/deploy.yml:

name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: \${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out

Option B - Manual Deployment:
1. Run: npm run build
2. Run: npm run export
3. Push the 'out' folder to gh-pages branch

📋 STEP 6: YOUR IMAGE URLS WILL WORK AUTOMATICALLY
===============================================

With this setup, your relative image URLs will work perfectly:

Local Development:
- http://localhost:3000/images/games/neon-runner.jpg

GitHub Pages (if main site):
- https://yourusername.github.io/images/games/neon-runner.jpg

GitHub Pages (if project site):
- https://yourusername.github.io/repository-name/images/games/neon-runner.jpg

🎯 IMPORTANT NOTES:
==================

1. 📁 Keep images in public/images/ folder
2. 🔗 Use relative URLs in Firebase: "/images/games/game.jpg"
3. 📱 Test locally before deploying
4. 🚀 GitHub Pages may take a few minutes to update after deployment
5. 🔄 Clear browser cache if images don't appear immediately

🚨 TROUBLESHOOTING:
==================

If images don't load on GitHub Pages:
1. Check that images are in public/images/ folder
2. Verify URLs in Firebase start with "/"
3. Check browser console for 404 errors
4. Make sure .nojekyll file exists
5. Wait a few minutes for GitHub Pages to update

✅ SUCCESS CHECKLIST:
====================

- [ ] Images added to public/images/ folders
- [ ] Firebase collections updated with relative URLs
- [ ] next.config.mjs configured for export
- [ ] .nojekyll file created
- [ ] GitHub Pages configured
- [ ] Site deployed and images loading

Your site will be available at:
https://yourusername.github.io/repository-name/

Ready to deploy? 🚀
`)
