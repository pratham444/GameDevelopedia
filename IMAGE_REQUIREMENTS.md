# 📸 Image Requirements & Guidelines

## 🎮 GAME SCREENSHOTS
- **Size**: 400x200 pixels (2:1 aspect ratio)
- **Format**: JPG or PNG
- **Quality**: High resolution, clear gameplay
- **Content**: Show actual gameplay, UI, or key features
- **File Size**: Under 500KB for fast loading

## 👥 TEAM PHOTOS
- **Size**: 300x300 pixels (square)
- **Format**: JPG or PNG
- **Style**: Professional headshots
- **Background**: Clean, solid color preferred
- **Lighting**: Well-lit, clear facial features
- **File Size**: Under 200KB

## 📝 BLOG THUMBNAILS
- **Size**: 400x200 pixels (2:1 aspect ratio)
- **Format**: JPG or PNG
- **Style**: Eye-catching, relevant to content
- **Text**: Minimal text overlay
- **Colors**: Match your brand colors
- **File Size**: Under 300KB

## 🎥 TUTORIAL THUMBNAILS
- **Automatic**: YouTube handles thumbnails
- **Custom**: 1280x720 pixels if uploading custom
- **Style**: Clear, engaging, shows what tutorial covers

## 📱 WHERE TO GET IMAGES

### Free Stock Photos:
- **Unsplash** (unsplash.com) - High quality, free
- **Pexels** (pexels.com) - Free stock photos
- **Pixabay** (pixabay.com) - Free images

### Design Tools:
- **Canva** (canva.com) - Easy thumbnail creation
- **Figma** (figma.com) - Professional design tool
- **GIMP** (gimp.org) - Free Photoshop alternative

### Game Screenshots:
- Take screenshots directly from your games
- Use game development tools' screenshot features
- Capture during exciting gameplay moments

## 🔧 IMAGE OPTIMIZATION

### Before Uploading:
1. **Resize** to exact dimensions needed
2. **Compress** to reduce file size
3. **Convert** to WebP format if possible
4. **Test** loading speed

### Tools for Optimization:
- **TinyPNG** (tinypng.com) - Compress images
- **Squoosh** (squoosh.app) - Google's image optimizer
- **ImageOptim** (imageoptim.com) - Mac image optimizer

## 📤 UPLOADING TO FIREBASE

### Steps:
1. Go to Firebase Console → Storage
2. Click "Upload file"
3. Select your optimized image
4. Copy the download URL
5. Paste URL in Firestore document

### Folder Structure:
\`\`\`
/images
  /games
    - game1-screenshot.jpg
    - game2-screenshot.jpg
  /team
    - alex-chen.jpg
    - sarah-johnson.jpg
  /blog
    - unity-tutorial-thumb.jpg
    - mobile-optimization-thumb.jpg
