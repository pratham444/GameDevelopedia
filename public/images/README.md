# 📸 Images Folder Structure

This folder contains all images for the GameDevelopedia website.

## 📁 Folder Structure

\`\`\`
public/images/
├── games/          # Game screenshots (400x200px)
├── team/           # Team member photos (300x300px)
├── blog/           # Blog post thumbnails (400x200px)
└── README.md       # This file
\`\`\`

## 📋 Image Requirements

### Games Screenshots
- **Size**: 400x200 pixels (2:1 aspect ratio)
- **Format**: JPG, PNG, or WebP
- **Naming**: Use descriptive names like `neon-runner.jpg`

### Team Photos
- **Size**: 300x300 pixels (square)
- **Format**: JPG, PNG, or WebP
- **Naming**: Use names like `alex-chen.jpg`

### Blog Thumbnails
- **Size**: 400x200 pixels (2:1 aspect ratio)
- **Format**: JPG, PNG, or WebP
- **Naming**: Use descriptive names like `unity-tutorial.jpg`

## 🔗 How to Use in Firebase

When adding images to your Firebase collections, use relative URLs:

\`\`\`javascript
// For games collection
imageURL: "/images/games/your-game-name.jpg"

// For team collection
imageURL: "/images/team/person-name.jpg"

// For blog collection
thumbnailURL: "/images/blog/post-name.jpg"
\`\`\`

## 🚀 GitHub Pages Deployment

When deployed to GitHub Pages, these relative URLs will automatically work:
- Local: `http://localhost:3000/images/games/neon-runner.jpg`
- GitHub Pages: `https://yourusername.github.io/your-repo/images/games/neon-runner.jpg`
