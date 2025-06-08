# 📋 GameDevelopedia Content Management Guide

This guide explains how to add and manage content in your Firebase database for your GameDevelopedia website.

## 🎮 Adding New Games

### Step 1: Go to Firebase Console
1. Visit [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **porfoliowebsite444**
3. Navigate to **Firestore Database**

### Step 2: Add a New Game
1. Find the **games** collection
2. Click **Add document**
3. You can let Firebase auto-generate an ID or provide your own
4. Add the following fields:

| Field Name | Type | Description |
|------------|------|-------------|
| `title` | string | Game title (e.g., "Neon Runner") |
| `description` | string | Game description (keep it concise but informative) |
| `platform` | string | Platform(s) the game is available on (e.g., "Mobile (iOS/Android)") |
| `genre` | string | Game genre (e.g., "Puzzle", "Action", "RPG") |
| `imageURL` | string | URL to game screenshot or cover image |
| `downloadLink` | string | Link to download or store page |
| `rating` | string | Game rating (e.g., "4.5") |

5. Click **Save**

### Example Game Document
\`\`\`javascript
{
  title: "Cyber Puzzle",
  description: "Mind-bending puzzle game set in a cyberpunk world with 100+ challenging levels.",
  platform: "PC/Mac",
  genre: "Puzzle",
  imageURL: "/images/games/cyber-puzzle.jpg",
  downloadLink: "https://store.steampowered.com/app/yourcyberpuzzle",
  rating: "4.7"
}
\`\`\`

## 🎥 Adding New Tutorials

### Step 1: Prepare Your YouTube Video
1. Upload your tutorial to YouTube
2. Copy the video URL (e.g., https://youtube.com/watch?v=YOUR_VIDEO_ID)

### Step 2: Add a New Tutorial
1. In Firebase Console, find the **tutorials** collection
2. Click **Add document**
3. Add the following fields:

| Field Name | Type | Description |
|------------|------|-------------|
| `title` | string | Tutorial title |
| `videoURL` | string | Full YouTube video URL |
| `description` | string | Brief description of what users will learn |
| `tags` | array | Array of string tags for categorization |

4. Click **Save**

### Example Tutorial Document
\`\`\`javascript
{
  title: "Unity Basics for Beginners",
  videoURL: "https://youtube.com/watch?v=YOUR_VIDEO_ID",
  description: "Learn the fundamentals of Unity game engine from scratch.",
  tags: ["Unity", "Beginner", "Basics"]
}
\`\`\`

### How Tutorial Links Work
When a user clicks the "Watch Tutorial" button on your website, they will be redirected to the YouTube video URL you provided in the `videoURL` field. The video will open in a new tab.

## 📝 Adding New Blog Posts

### Step 1: Prepare Your Blog Content
1. Write your blog post content
2. Prepare a thumbnail image
3. If hosting the blog elsewhere, have the URL ready

### Step 2: Add a New Blog Post
1. In Firebase Console, find the **blogs** collection
2. Click **Add document**
3. Add the following fields:

| Field Name | Type | Description |
|------------|------|-------------|
| `title` | string | Blog post title |
| `thumbnailURL` | string | URL to blog thumbnail image |
| `content` | string | Full blog post content |
| `excerpt` | string | Short preview text (shown on cards) |
| `author` | string | Author name |
| `datePublished` | string | ISO date string (e.g., "2024-06-08T12:00:00.000Z") |
| `tags` | array | Array of string tags |
| `url` | string | **External URL where the full blog post is hosted** |

4. Click **Save**

### Example Blog Post Document
\`\`\`javascript
{
  title: "Getting Started with Unity 2D Game Development",
  thumbnailURL: "/images/blog/unity-tutorial.jpg",
  content: "Learn the fundamentals of Unity 2D development...",
  excerpt: "Learn the fundamentals of Unity 2D development and create your first platformer game from scratch.",
  author: "Alex Chen",
  datePublished: "2024-06-08T12:00:00.000Z",
  tags: ["Unity", "2D", "Tutorial"],
  url: "https://yourblog.com/unity-tutorial"
}
\`\`\`

### How Blog Links Work
When a user clicks on a blog post card on your website, they will be redirected to the URL you provided in the `url` field. This allows you to:
1. Host your full blog posts on another platform (like Medium, WordPress, etc.)
2. Create dedicated blog pages within your website
3. Link to external resources related to the blog topic

If no URL is provided, clicking the blog post will have no action.

## 👥 Adding New Team Members

### Step 1: Prepare Team Member Information
1. Gather team member details
2. Prepare a professional photo

### Step 2: Add a New Team Member
1. In Firebase Console, find the **team** collection
2. Click **Add document**
3. Add the following fields:

| Field Name | Type | Description |
|------------|------|-------------|
| `name` | string | Team member's name |
| `role` | string | Job title or role |
| `bio` | string | Short biography |
| `imageURL` | string | URL to profile photo |
| `email` | string | Email address |
| `socials` | map | Object containing social media links |

4. For the `socials` map, add these fields:
   - `github` (string, optional)
   - `linkedin` (string, optional)
   - `twitter` (string, optional)

5. Click **Save**

### Example Team Member Document
\`\`\`javascript
{
  name: "Sarah Johnson",
  role: "UI/UX Designer",
  bio: "Creative designer specializing in game interfaces and user experience design.",
  imageURL: "/images/team/sarah-johnson.jpg",
  email: "sarah@yourdomain.com",
  socials: {
    github: "https://github.com/sarahjohnson",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    twitter: "https://twitter.com/sarahjohnson"
  }
}
\`\`\`

## 📊 Updating Contact Information

### Step 1: Find Contact Document
1. In Firebase Console, find the **contact** collection
2. Look for the document with ID **info**
3. If it doesn't exist, create it with this ID

### Step 2: Update Contact Information
1. Add/update the following fields:

| Field Name | Type | Description |
|------------|------|-------------|
| `email` | string | Contact email address |
| `socials` | map | Object containing social media links |

2. For the `socials` map, add these fields:
   - `github` (string)
   - `youtube` (string)
   - `linkedin` (string)

3. Click **Save**

### Example Contact Document
\`\`\`javascript
{
  email: "hello@yourdomain.com",
  socials: {
    github: "https://github.com/yourcompany",
    youtube: "https://youtube.com/@yourchannel",
    linkedin: "https://linkedin.com/company/yourcompany"
  }
}
\`\`\`

## 🖼️ Image Management

### Option 1: Store Images in Firebase Storage
1. Go to **Storage** in Firebase Console
2. Upload your images to appropriate folders
3. Get the download URL and use it in your documents

### Option 2: Store Images in Your Project
1. Add images to the `/public/images/` folder in your project
2. Use relative paths like `/images/games/game-name.jpg`
3. This works well with GitHub Pages deployment

## 🚨 Important Notes

1. **Field Names**: Field names are case-sensitive
2. **Required Fields**: All fields listed above are required for proper functionality
3. **Image Sizes**:
   - Games: 400x200px (2:1 ratio)
   - Team: 300x300px (square)
   - Blog: 400x200px (2:1 ratio)
4. **Date Format**: Use ISO date strings (YYYY-MM-DDTHH:MM:SS.sssZ)
5. **URLs**: For image URLs, you can use:
   - Relative paths (`/images/games/game.jpg`)
   - Firebase Storage URLs
   - External image hosting URLs

## 🔄 Content Updates

After adding or updating content in Firebase:
1. Your website will automatically fetch the latest data
2. No redeployment is needed
3. Changes should appear within a few seconds
4. If changes don't appear, try refreshing the page
