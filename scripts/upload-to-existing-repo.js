// 🚀 UPLOAD TO EXISTING VERCEL-CONNECTED REPOSITORY
// Follow these steps to upload your project to an existing Git repo

console.log(`
🚀 UPLOADING TO EXISTING VERCEL-CONNECTED REPOSITORY
===================================================

Since your Git repository is already connected to Vercel, follow these exact steps:

📋 STEP 1: GET THE REPOSITORY URL
================================

1. Go to your GitHub/GitLab/Bitbucket repository
2. Click the "Code" button
3. Copy the HTTPS or SSH URL (example: https://github.com/yourusername/your-repo.git)

📋 STEP 2: INITIALIZE GIT IN YOUR PROJECT
=======================================

Open terminal/command prompt and navigate to your project folder:

\`\`\`bash
cd path/to/your/project-folder
\`\`\`

Initialize Git in your project folder:

\`\`\`bash
git init
\`\`\`

📋 STEP 3: CONNECT TO REMOTE REPOSITORY
=====================================

Add the remote repository URL:

\`\`\`bash
git remote add origin https://github.com/yourusername/your-repo.git
\`\`\`

📋 STEP 4: CREATE .GITIGNORE FILE
===============================

Create a .gitignore file to exclude unnecessary files:

\`\`\`bash
# Create .gitignore file
touch .gitignore
\`\`\`

Add these contents to your .gitignore file:

\`\`\`
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
\`\`\`

📋 STEP 5: PREPARE YOUR FILES
===========================

1. Make sure your project is ready to be uploaded
2. Check that all necessary files are in place
3. Ensure environment variables are set up in Vercel dashboard

📋 STEP 6: COMMIT AND PUSH YOUR CODE
==================================

Add all your files:

\`\`\`bash
git add .
\`\`\`

Commit your files:

\`\`\`bash
git commit -m "Initial commit: GameDevelopedia website"
\`\`\`

IMPORTANT: If the remote repository already has files, you need to pull first:

\`\`\`bash
git pull origin main --allow-unrelated-histories
\`\`\`

(Resolve any merge conflicts if they occur)

Then push your code:

\`\`\`bash
git push -u origin main
\`\`\`

Note: Your main branch might be called "master" instead of "main" in older repositories.

📋 STEP 7: VERIFY DEPLOYMENT ON VERCEL
====================================

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Find your project
3. Click on it to see deployment status
4. Vercel will automatically start building your project
5. Wait for deployment to complete (usually 1-3 minutes)

📋 STEP 8: ENVIRONMENT VARIABLES
=============================

Make sure your environment variables are set in Vercel:

1. Go to your project in Vercel dashboard
2. Click "Settings" tab
3. Click "Environment Variables"
4. Add all your environment variables from .env.local:
   - NEXT_PUBLIC_FIREBASE_API_KEY
   - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
   - NEXT_PUBLIC_FIREBASE_PROJECT_ID
   - etc.

🚨 TROUBLESHOOTING COMMON ISSUES:
================================

Issue 1: "Remote repository already exists"
Solution: \`git remote set-url origin https://github.com/yourusername/your-repo.git\`

Issue 2: "Rejected non-fast-forward updates"
Solution: \`git pull origin main --allow-unrelated-histories\`

Issue 3: "Permission denied"
Solution: Make sure you have the correct permissions for the repository

Issue 4: "Build failed on Vercel"
Solution: Check Vercel logs for specific errors

💡 PRO TIPS:
===========

1. Always check \`git status\` before committing
2. Use \`git branch\` to see which branch you're on
3. Set up your Vercel project settings before pushing
4. For large files, consider using Git LFS
5. Keep your .env.local file in .gitignore

🔄 FUTURE UPDATES:
================

For future updates to your website:

1. Make your changes
2. Test locally: \`npm run dev\`
3. Commit and push:
   \`\`\`bash
   git add .
   git commit -m "Description of your changes"
   git push origin main
   \`\`\`
4. Vercel will automatically deploy the updates

That's it! Your GameDevelopedia website should now be deployed on Vercel! 🎉
`)
