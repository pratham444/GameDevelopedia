#!/bin/bash
# Script to upload your project to a Git repository connected with Vercel

# Display header
echo "================================================"
echo "🚀 UPLOAD TO VERCEL-CONNECTED REPOSITORY SCRIPT"
echo "================================================"
echo ""

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Get repository URL
echo "📋 Step 1: Enter your Git repository URL"
echo "Example: https://github.com/yourusername/your-repo.git"
read -p "Repository URL: " repo_url

if [ -z "$repo_url" ]; then
    echo "❌ Repository URL cannot be empty."
    exit 1
fi

# Initialize Git
echo ""
echo "📋 Step 2: Initializing Git in current directory..."
git init
echo "✅ Git initialized"

# Connect to remote repository
echo ""
echo "📋 Step 3: Connecting to remote repository..."
git remote add origin $repo_url
echo "✅ Connected to remote repository"

# Create .gitignore file
echo ""
echo "📋 Step 4: Creating .gitignore file..."
cat > .gitignore << EOL
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
EOL
echo "✅ .gitignore file created"

# Add files
echo ""
echo "📋 Step 5: Adding files to Git..."
git add .
echo "✅ Files added"

# Commit files
echo ""
echo "📋 Step 6: Committing files..."
git commit -m "Initial commit: GameDevelopedia website"
echo "✅ Files committed"

# Check if remote repository has files
echo ""
echo "📋 Step 7: Checking remote repository..."
echo "Does the remote repository already have files? (y/n)"
read -p "Answer: " has_files

if [ "$has_files" = "y" ] || [ "$has_files" = "Y" ]; then
    echo "Pulling from remote repository..."
    git pull origin main --allow-unrelated-histories
    echo "✅ Pulled from remote repository"
fi

# Push files
echo ""
echo "📋 Step 8: Pushing files to remote repository..."
echo "Which branch should we push to? (default: main)"
read -p "Branch name [main]: " branch_name
branch_name=${branch_name:-main}

git push -u origin $branch_name
echo "✅ Files pushed to $branch_name branch"

# Reminder about environment variables
echo ""
echo "📋 Step 9: Don't forget to set up environment variables in Vercel!"
echo "1. Go to your Vercel dashboard"
echo "2. Find your project"
echo "3. Click on Settings > Environment Variables"
echo "4. Add all variables from your .env.local file"

# Final message
echo ""
echo "🎉 DONE! Your project has been uploaded to the Git repository."
echo "Vercel should automatically start deploying your project."
echo "Check your Vercel dashboard for deployment status."
echo ""
echo "Thank you for using this script! 🙏"
