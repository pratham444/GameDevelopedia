# 🎨 GameDevelopedia Customization Guide

## 📋 Overview
This guide will help you replace all placeholder content with your actual data. We'll cover each section step by step.

## 🎮 1. GAMES PORTFOLIO SECTION

### Where to Update:
- **Firebase Collection**: `games`
- **Location**: Firebase Console → Firestore Database → `games` collection

### Current Sample Data Structure:
\`\`\`javascript
{
  title: "Game Name",
  description: "Game description",
  platform: "Mobile (iOS/Android)",
  genre: "Game Genre",
  imageURL: "https://image-url.com",
  downloadLink: "https://download-link.com",
  rating: "4.5"
}
\`\`\`

### How to Update:
1. **Go to Firebase Console** → Your Project → Firestore Database
2. **Click on `games` collection**
3. **For each game document, click to edit and update:**

#### Replace With Your Actual Games:
\`\`\`javascript
// Example: Your Real Game 1
{
  title: "Your Actual Game Name",
  description: "Your real game description - what makes it unique and fun",
  platform: "iOS/Android/PC/Console", // Your actual platforms
  genre: "Action/Puzzle/RPG/etc", // Your actual genre
  imageURL: "https://your-actual-screenshot.jpg", // Your game screenshot
  downloadLink: "https://apps.apple.com/your-game", // Real download link
  rating: "4.8" // Actual rating if available
}
\`\`\`

### 📸 Game Images:
- **Size**: 400x200 pixels (2:1 ratio)
- **Format**: JPG or PNG
- **Upload to**: Firebase Storage or use external hosting
- **Get URL**: Copy the download URL and paste in `imageURL` field

---

## 🎥 2. TUTORIALS SECTION

### Where to Update:
- **Firebase Collection**: `tutorials`

### Current Structure:
\`\`\`javascript
{
  title: "Tutorial Title",
  videoURL: "https://youtube.com/watch?v=VIDEO_ID",
  description: "Tutorial description",
  tags: ["Unity", "Beginner", "2D"]
}
\`\`\`

### How to Update:
1. **Go to your YouTube channel**
2. **Copy video URLs** of your actual tutorials
3. **Update in Firebase:**

\`\`\`javascript
// Example: Your Real Tutorial
{
  title: "Your Actual Tutorial Title",
  videoURL: "https://youtube.com/watch?v=YOUR_REAL_VIDEO_ID",
  description: "What students will learn from this tutorial",
  tags: ["Unity", "C#", "Beginner"] // Relevant tags
}
\`\`\`

### 🎬 Tutorial Tips:
- Use actual YouTube video URLs
- Write compelling descriptions
- Use relevant tags for filtering
- Keep titles under 60 characters

---

## 👥 3. TEAM SECTION

### Where to Update:
- **Firebase Collection**: `team`

### Current Structure:
\`\`\`javascript
{
  name: "Team Member Name",
  role: "Job Title",
  bio: "Short biography",
  imageURL: "https://profile-photo.jpg",
  email: "email@company.com",
  socials: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username"
  }
}
\`\`\`

### How to Update:
\`\`\`javascript
// Example: Your Real Team Member
{
  name: "Your Real Name",
  role: "Your Actual Job Title",
  bio: "Brief description of your experience and expertise in game development",
  imageURL: "https://your-professional-photo.jpg",
  email: "your-real-email@gamedevelopedia.com",
  socials: {
    github: "https://github.com/your-real-username",
    linkedin: "https://linkedin.com/in/your-real-profile",
    twitter: "https://twitter.com/your-real-handle"
  }
}
\`\`\`

### 📸 Team Photos:
- **Size**: 300x300 pixels (square)
- **Style**: Professional headshots
- **Background**: Clean, preferably solid color
- **Format**: JPG or PNG

---

## 📝 4. BLOG SECTION

### Where to Update:
- **Firebase Collection**: `blogs`

### Current Structure:
\`\`\`javascript
{
  title: "Blog Post Title",
  thumbnailURL: "https://thumbnail-image.jpg",
  content: "Full blog post content...",
  excerpt: "Short preview text",
  author: "Author Name",
  datePublished: "2024-01-15T10:00:00.000Z",
  tags: ["Unity", "Tutorial", "Beginner"]
}
\`\`\`

### How to Update:
\`\`\`javascript
// Example: Your Real Blog Post
{
  title: "Your Actual Blog Post Title",
  thumbnailURL: "https://your-blog-thumbnail.jpg",
  content: "Your full blog post content with detailed information...",
  excerpt: "Engaging preview that makes people want to read more",
  author: "Your Name",
  datePublished: new Date().toISOString(), // Current date
  tags: ["Relevant", "Tags", "For", "Your", "Post"]
}
\`\`\`

### 📸 Blog Thumbnails:
- **Size**: 400x200 pixels
- **Style**: Eye-catching, relevant to content
- **Text**: Minimal text overlay if any

---

## 💼 5. INTERNSHIP SECTION

### Where to Update:
- **File**: `components/sections/internship-section.tsx`
- **Type**: Direct code editing (not in Firebase)

### What to Customize:

#### A. Program Benefits:
\`\`\`javascript
const benefits = [
  "Work on real mobile game projects", // ✏️ Update with your actual benefits
  "Mentorship and feedback throughout your journey",
  "Flexible remote work arrangement",
  "Certificate of completion",
  "Portfolio-worthy projects",
  "Networking and community access",
  "Top performers may be invited for future collaborations",
]
\`\`\`

#### B. Requirements:
\`\`\`javascript
const requirements = [
  "Basic programming knowledge (C# preferred)", // ✏️ Update with your requirements
  "Familiarity with Unity or Unreal Engine",
  "A portfolio or sample personal projects",
  "Strong communication skills",
  "Commitment to a 3-month program",
  "Availability of at least 20 hours/week",
]
\`\`\`

#### C. Timeline:
\`\`\`javascript
const timeline = [
  {
    phase: "Application",
    duration: "Week 1", // ✏️ Update timeline
    description: "Submit your application, portfolio, and a brief motivation letter",
    icon: Briefcase,
  },
  // ... update other phases
]
\`\`\`

#### D. Start Date:
\`\`\`javascript
// Find this line and update:
<Calendar className="h-4 w-4 inline mr-1" />
Next cohort starts July 2025  {/* ✏️ Update date */}
\`\`\`

---

## 📞 6. CONTACT SECTION

### Where to Update:
- **Firebase Collection**: `contact`
- **Document ID**: `info`

### Current Structure:
\`\`\`javascript
{
  email: "hello@gamedevelopedia.com",
  phone: "+1 (555) 123-4567",
  address: "San Francisco, CA",
  socials: {
    github: "https://github.com/gamedevelopedia",
    youtube: "https://youtube.com/@gamedevelopedia",
    linkedin: "https://linkedin.com/company/gamedevelopedia"
  }
}
\`\`\`

### How to Update:
\`\`\`javascript
// Your Real Contact Info
{
  email: "your-real-email@yourdomain.com",
  phone: "your-real-phone-number",
  address: "Your Real City, State/Country",
  socials: {
    github: "https://github.com/your-real-github",
    youtube: "https://youtube.com/@your-real-channel",
    linkedin: "https://linkedin.com/company/your-real-company"
  }
}
\`\`\`

---

## 🎨 7. BRANDING & COLORS

### Where to Update:
- **File**: `tailwind.config.ts`
- **File**: `app/globals.css`

### Current Brand Colors:
\`\`\`css
--neon-violet: 258 100% 68%;     /* #7f5af0 */
--cyber-cyan: 180 100% 50%;      /* #00ffe0 */
--neon-green: 120 100% 67%;      /* #00ffab */
--golden-yellow: 45 93% 58%;     /* #fcd34d */
\`\`\`

### To Change Colors:
1. **Open `tailwind.config.ts`**
2. **Update the color values:**
\`\`\`javascript
colors: {
  "neon-violet": "hsl(your-primary-color)",
  "cyber-cyan": "hsl(your-secondary-color)",
  // ... update other colors
}
\`\`\`

---

## 🏢 8. COMPANY INFORMATION

### Where to Update:
Multiple files need company name changes:

#### A. Navigation (`components/sections/navigation.tsx`):
\`\`\`javascript
// Find and update:
<span className="text-xl font-bold bg-gradient-to-r from-neon-violet to-cyber-cyan bg-clip-text text-transparent">
  Your Company Name  {/* ✏️ Update this */}
</span>
\`\`\`

#### B. Footer (`components/sections/footer-section.tsx`):
\`\`\`javascript
// Find and update:
<span className="text-xl font-bold bg-gradient-to-r from-neon-violet to-cyber-cyan bg-clip-text text-transparent">
  Your Company Name  {/* ✏️ Update this */}
</span>
\`\`\`

#### C. Page Title (`app/layout.tsx`):
\`\`\`javascript
export const metadata: Metadata = {
  title: "Your Company Name - Game Development Services", // ✏️ Update
  description: "Your actual company description", // ✏️ Update
  keywords: "your, actual, keywords", // ✏️ Update
}
\`\`\`

---

## 📱 9. SOCIAL MEDIA LINKS

### Global Social Links Update:
Search for these placeholder URLs and replace with your real ones:

\`\`\`javascript
// Find and replace throughout the codebase:
"https://github.com/gamedevelopedia" → "https://github.com/your-real-github"
"https://youtube.com/@gamedevelopedia" → "https://youtube.com/@your-real-channel"
"https://linkedin.com/company/gamedevelopedia" → "https://linkedin.com/company/your-real-company"
"https://twitter.com/gamedevelopedia" → "https://twitter.com/your-real-handle"
\`\`\`

---

## 🖼️ 10. IMAGES & MEDIA

### Current Placeholder Images:
All images currently use Unsplash placeholders. Replace with your actual images:

#### A. Upload to Firebase Storage:
1. **Go to Firebase Console** → Storage
2. **Upload your images**
3. **Copy download URLs**
4. **Update URLs in Firestore**

#### B. Image Requirements:
- **Games**: 400x200px screenshots
- **Team**: 300x300px professional photos
- **Blog**: 400x200px thumbnails
- **Tutorials**: YouTube thumbnails (automatic)

---

## ⚙️ 11. STEP-BY-STEP UPDATE PROCESS

### Phase 1: Content (Week 1)
1. ✅ Update games in Firebase
2. ✅ Update team members in Firebase
3. ✅ Update blog posts in Firebase
4. ✅ Update tutorials in Firebase
5. ✅ Update contact info in Firebase

### Phase 2: Branding (Week 2)
1. ✅ Replace company name throughout codebase
2. ✅ Update colors if desired
3. ✅ Update social media links
4. ✅ Update page titles and descriptions

### Phase 3: Images (Week 3)
1. ✅ Take/collect professional photos
2. ✅ Create game screenshots
3. ✅ Design blog thumbnails
4. ✅ Upload to Firebase Storage
5. ✅ Update all image URLs

### Phase 4: Internship Program (Week 4)
1. ✅ Customize internship benefits
2. ✅ Update requirements
3. ✅ Set actual start dates
4. ✅ Adjust timeline if needed

---

## 🔧 12. TOOLS YOU'LL NEED

### For Images:
- **Canva** (free) - For thumbnails and graphics
- **Figma** (free) - For UI mockups
- **Photoshop/GIMP** - For photo editing

### For Content:
- **Firebase Console** - For database updates
- **VS Code** - For code editing
- **Git** - For version control

---

## 📋 13. QUICK CHECKLIST

### Before Going Live:
- [ ] All games are your actual games
- [ ] Team photos are professional and real
- [ ] Blog posts are your actual content
- [ ] Tutorial videos are your YouTube videos
- [ ] Contact information is correct
- [ ] Social media links work
- [ ] Company name updated everywhere
- [ ] Email addresses are real and working
- [ ] Phone numbers are correct
- [ ] All images load properly
- [ ] Contact form sends to your email
- [ ] Internship details are accurate

---

## 🚀 14. GOING LIVE

### Final Steps:
1. **Test everything locally**
2. **Deploy to production** (Vercel/Netlify)
3. **Update Firebase authorized domains**
4. **Test contact form in production**
5. **Check all links work**
6. **Verify mobile responsiveness**

---

## 💡 15. PRO TIPS

### Content Tips:
- **Write compelling descriptions** that sell your games/services
- **Use high-quality images** - they make a huge difference
- **Keep text concise** but informative
- **Update regularly** to keep content fresh

### SEO Tips:
- **Use relevant keywords** in descriptions
- **Optimize image alt texts**
- **Write good meta descriptions**
- **Keep URLs clean and descriptive**

### Performance Tips:
- **Optimize images** (use WebP format if possible)
- **Keep file sizes small**
- **Test on mobile devices**
- **Monitor loading speeds**

---

## 🆘 NEED HELP?

If you get stuck on any step:
1. **Check the browser console** for errors
2. **Verify Firebase permissions**
3. **Test one section at a time**
4. **Keep backups** of working versions

Remember: Update one section at a time and test after each change! 🎯
