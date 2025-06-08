# ✅ GitHub Deployment Checklist

Use this checklist to ensure you don't miss any steps:

## 📋 Pre-Deployment Checklist

- [ ] All code files are ready
- [ ] Images are in `public/images/` folders
- [ ] Firebase collections are updated with relative URLs
- [ ] Environment variables are set up
- [ ] Project runs locally without errors (`npm run dev`)
- [ ] All sections display data correctly
- [ ] Contact form works

## 📋 GitHub Setup Checklist

- [ ] GitHub account created
- [ ] New repository created (PUBLIC)
- [ ] Repository cloned to local computer
- [ ] All project files copied to repository folder
- [ ] Dependencies installed (`npm install`)
- [ ] Project tested locally in new location

## 📋 Deployment Checklist

- [ ] All files committed to git (`git add .`)
- [ ] Changes pushed to GitHub (`git push origin main`)
- [ ] GitHub Pages enabled in repository settings
- [ ] GitHub Actions workflow running
- [ ] Deployment completed successfully
- [ ] Live website accessible
- [ ] All sections working on live site
- [ ] Images loading correctly
- [ ] Contact form working on live site
- [ ] Mobile responsiveness tested

## 📋 Post-Deployment Checklist

- [ ] Website URL shared/bookmarked
- [ ] Custom domain configured (if applicable)
- [ ] Analytics set up (Google Analytics, etc.)
- [ ] SEO optimizations applied
- [ ] Social media links updated
- [ ] Team notified of live website

## 🚨 Common Issues to Check

- [ ] Repository is PUBLIC (required for free GitHub Pages)
- [ ] `.nojekyll` file exists in public folder
- [ ] `next.config.mjs` is configured for export
- [ ] Image URLs start with `/images/`
- [ ] No build errors in GitHub Actions
- [ ] Environment variables added to GitHub (if needed for production)

## 📞 Need Help?

If you encounter issues:
1. Check the GitHub Actions logs for error details
2. Verify all files are properly uploaded
3. Test locally to isolate the problem
4. Check browser console for JavaScript errors
