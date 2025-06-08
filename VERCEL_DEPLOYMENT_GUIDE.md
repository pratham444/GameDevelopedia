# 🚀 Vercel Deployment Guide

This guide will help you upload your project to a Git repository that's already connected with Vercel.

## 📋 Prerequisites

- Your project folder with all files and subfolders
- An existing Git repository connected to Vercel
- Git installed on your computer
- Terminal/Command Prompt access

## 🎯 Step 1: Connect to Your Repository

1. **Get your repository URL**
   - Go to your GitHub/GitLab/Bitbucket repository
   - Click the "Code" button
   - Copy the URL (e.g., `https://github.com/yourusername/your-repo.git`)

2. **Navigate to your project folder**
   \`\`\`bash
   cd path/to/your/project-folder
   \`\`\`

3. **Initialize Git**
   \`\`\`bash
   git init
   \`\`\`

4. **Connect to remote repository**
   \`\`\`bash
   git remote add origin https://github.com/yourusername/your-repo.git
   \`\`\`

## 🎯 Step 2: Prepare Your Files

1. **Create a .gitignore file**
   \`\`\`bash
   # Create .gitignore file in your project root
   \`\`\`

   Add these contents:
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

2. **Check your project structure**
   - Make sure all necessary files are in place
   - Ensure your project runs locally: `npm run dev`

## 🎯 Step 3: Upload Your Code

1. **Add all files**
   \`\`\`bash
   git add .
   \`\`\`

2. **Commit your files**
   \`\`\`bash
   git commit -m "Initial commit: GameDevelopedia website"
   \`\`\`

3. **Pull from remote** (if repository already has files)
   \`\`\`bash
   git pull origin main --allow-unrelated-histories
   \`\`\`
   - Resolve any merge conflicts if they occur

4. **Push your code**
   \`\`\`bash
   git push -u origin main
   \`\`\`
   Note: Your main branch might be called "master" in older repositories.

## 🎯 Step 4: Verify Deployment

1. **Go to Vercel dashboard**
   - Visit [https://vercel.com/dashboard](https://vercel.com/dashboard)
   - Find your project
   - Click on it to see deployment status

2. **Check deployment status**
   - Vercel will automatically start building your project
   - Wait for deployment to complete (usually 1-3 minutes)
   - Check for any build errors

## 🎯 Step 5: Configure Environment Variables

1. **Go to project settings in Vercel**
   - Click "Settings" tab
   - Click "Environment Variables"

2. **Add all environment variables**
   - Add all variables from your `.env.local` file:
     - NEXT_PUBLIC_FIREBASE_API_KEY
     - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
     - NEXT_PUBLIC_FIREBASE_PROJECT_ID
     - etc.

3. **Redeploy if necessary**
   - If you added environment variables after deployment
   - Go to "Deployments" tab
   - Click "Redeploy" on your latest deployment

## 🚨 Troubleshooting

### Common Issues:

**"Remote repository already exists"**
\`\`\`bash
git remote set-url origin https://github.com/yourusername/your-repo.git
\`\`\`

**"Rejected non-fast-forward updates"**
\`\`\`bash
git pull origin main --allow-unrelated-histories
\`\`\`

**"Permission denied"**
- Make sure you have the correct permissions for the repository
- Check if you're using the right authentication method (HTTPS or SSH)

**"Build failed on Vercel"**
- Check Vercel logs for specific errors
- Common issues include missing dependencies or environment variables

## 🔄 Future Updates

To update your website in the future:

1. Make your changes
2. Test locally: `npm run dev`
3. Commit and push:
   \`\`\`bash
   git add .
   git commit -m "Description of your changes"
   git push origin main
   \`\`\`
4. Vercel will automatically deploy the updates

## 🎉 Success!

Your GameDevelopedia website should now be deployed on Vercel! You can access it at the URL provided in your Vercel dashboard.
