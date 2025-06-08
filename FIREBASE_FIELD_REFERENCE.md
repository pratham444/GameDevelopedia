# 🔥 Firebase Field Reference Guide

This document provides a complete reference for all fields needed in each collection.

## 🎮 GAMES COLLECTION

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `title` | string | Game title | "Neon Runner" |
| `description` | string | Game description | "A fast-paced endless runner with stunning neon visuals..." |
| `platform` | string | Platform(s) | "Mobile (iOS/Android)" |
| `genre` | string | Game genre | "Endless Runner" |
| `imageURL` | string | Screenshot URL | "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop" |
| `downloadLink` | string | Store/download link | "https://play.google.com/store" |
| `rating` | string | Game rating | "4.5" |

## 🎥 TUTORIALS COLLECTION

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `title` | string | Tutorial title | "Unity Basics for Beginners" |
| `videoURL` | string | YouTube video URL | "https://youtube.com/watch?v=your-video-id" |
| `description` | string | Tutorial description | "Learn the fundamentals of Unity game engine..." |
| `tags` | array | Array of string tags | ["Unity", "Beginner", "Basics"] |

## 👥 TEAM COLLECTION

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `name` | string | Team member name | "Alex Chen" |
| `role` | string | Job title | "Lead Game Developer" |
| `bio` | string | Short biography | "10+ years of experience in game development..." |
| `imageURL` | string | Profile photo URL | "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" |
| `email` | string | Email address | "alex@yourdomain.com" |
| `socials` | map | Social media links | See below |

### Socials Map Structure:
\`\`\`javascript
socials: {
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  twitter: "https://twitter.com/username"  // Optional
}
\`\`\`

## 📝 BLOGS COLLECTION

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `title` | string | Blog post title | "Getting Started with Unity 2D Game Development" |
| `thumbnailURL` | string | Thumbnail image URL | "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop" |
| `content` | string | Full blog post content | "Learn the fundamentals of Unity 2D development..." |
| `excerpt` | string | Short preview text | "Learn the fundamentals of Unity 2D development..." |
| `author` | string | Author name | "Your Name" |
| `datePublished` | string | ISO date string | "2024-06-08T12:00:00.000Z" |
| `tags` | array | Array of string tags | ["Unity", "2D", "Tutorial"] |

## 📞 CONTACT COLLECTION

This collection should have ONE document with ID: `info`

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `email` | string | Contact email | "hello@yourdomain.com" |
| `phone` | string | Phone number | "+1 (555) 123-4567" |
| `address` | string | Physical address | "San Francisco, CA" |
| `socials` | map | Social media links | See below |

### Socials Map Structure:
\`\`\`javascript
socials: {
  github: "https://github.com/yourcompany",
  youtube: "https://youtube.com/@yourchannel",
  linkedin: "https://linkedin.com/company/yourcompany",
  twitter: "https://twitter.com/yourcompany"  // Optional
}
\`\`\`

## 📸 IMAGE REQUIREMENTS

### Game Screenshots:
- Size: 400x200 pixels (2:1 ratio)
- Format: JPG or PNG
- Content: Show actual gameplay

### Team Photos:
- Size: 300x300 pixels (square)
- Format: JPG or PNG
- Style: Professional headshots

### Blog Thumbnails:
- Size: 400x200 pixels (2:1 ratio)
- Format: JPG or PNG
- Style: Relevant to content

## 🚨 COMMON MISTAKES TO AVOID

1. **Wrong field names**: Field names are case-sensitive
2. **Missing fields**: All fields listed are required
3. **Wrong data types**: Follow the types specified
4. **Incorrect socials structure**: Socials must be a map/object
5. **Invalid image URLs**: URLs must be direct links to images
6. **Missing document ID**: For contact collection, document ID must be "info"
