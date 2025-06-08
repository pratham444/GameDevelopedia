// 📝 GIT COMMANDS REFERENCE
// Essential Git commands for managing your website

console.log(`
📝 ESSENTIAL GIT COMMANDS FOR YOUR WEBSITE
=========================================

Here are the Git commands you'll use most often:

🚀 INITIAL SETUP (One-time only):
================================

1. Clone repository:
   git clone https://github.com/yourusername/repository-name.git

2. Enter project folder:
   cd repository-name

3. Install dependencies:
   npm install

📤 UPLOADING CHANGES (Every time you make updates):
=================================================

1. Check what files have changed:
   git status

2. Add all changes:
   git add .

3. Commit changes with a message:
   git commit -m "Your description of changes"

4. Push to GitHub:
   git push origin main

🔍 USEFUL COMMANDS:
==================

Check current status:
git status

See commit history:
git log --oneline

See what changed in files:
git diff

Add specific file only:
git add filename.txt

Undo changes to a file (before commit):
git checkout -- filename.txt

📋 TYPICAL WORKFLOW:
===================

When you want to update your website:

1. Make your changes (edit code, add images, etc.)
2. Test locally: npm run dev
3. If everything works:
   git add .
   git commit -m "Updated games section with new screenshots"
   git push origin main
4. Wait for GitHub Actions to deploy (2-5 minutes)
5. Check your live website!

💡 COMMIT MESSAGE EXAMPLES:
===========================

Good commit messages:
✅ "Added new game screenshots and updated descriptions"
✅ "Fixed contact form validation"
✅ "Updated team member photos"
✅ "Added new blog post about Unity tutorials"

Bad commit messages:
❌ "update"
❌ "changes"
❌ "fix"

🚨 EMERGENCY COMMANDS:
=====================

If you mess up and want to undo your last commit:
git reset --soft HEAD~1

If you want to see the exact changes in a file:
git diff filename.txt

If you want to go back to a previous version:
git log --oneline  (find the commit hash)
git checkout commit-hash

🔄 UPDATING YOUR LOCAL COPY:
============================

If you're working from multiple computers:
git pull origin main

This downloads the latest changes from GitHub.

Remember: Always test locally before pushing to GitHub! 🧪
`)
