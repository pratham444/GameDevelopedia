# GameDevelopedia Firebase Setup Instructions

## 🔥 Your Firebase Configuration
Your project is now configured with your actual Firebase credentials:

- **Project ID**: porfoliowebsite444
- **App ID**: 1:453223925799:web:a1439524ab662219806602
- **EmailJS Service ID**: service_t9zuoje
- **EmailJS Template ID**: template_v315kmy
- **EmailJS Public Key**: c26xrnm1GbZk-0sAq

## 📋 Next Steps

### 1. Set Up Firestore Database
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project "porfoliowebsite444"
3. Navigate to "Firestore Database"
4. Click "Create database"
5. Choose "Start in test mode"
6. Select your preferred location
7. Click "Done"

### 2. Configure Security Rules
In Firestore Database → Rules, replace the default rules with:

\`\`\`javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all public collections
    match /games/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /tutorials/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /team/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /blogs/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /contact/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Allow anyone to write contact messages
    match /contact_messages/{document} {
      allow read, write: if true;
    }
  }
}
\`\`\`

### 3. Populate Your Database
Run the population script to add sample data:
1. The script will create collections for: games, tutorials, team, blogs, contact
2. It includes realistic sample data that you can customize
3. All data uses placeholder images from Unsplash

### 4. Customize Your Content
Update the sample data with your actual:

#### Games Section
- Replace with your actual game titles and descriptions
- Update download links to your real app store/platform links
- Add your actual game screenshots/images

#### Team Section
- Replace with real team member photos and bios
- Update social media links
- Add actual email addresses

#### Blog Section
- Replace with your actual blog posts
- Update author information
- Add real blog post images

#### Tutorials Section
- Update with your actual YouTube video URLs
- Modify descriptions to match your content
- Update tags and categories

#### Contact Information
- Update email to your actual business email
- Add your real social media profiles
- Update phone number and address

### 5. Test EmailJS Integration
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Verify your service (service_t9zuoje) is active
3. Check your template (template_v315kmy) has the correct format:

\`\`\`html
Subject: New Contact from {{from_name}}

Hello GameDevelopedia Team,

You have received a new message from your website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
GameDevelopedia Contact Form
\`\`\`

### 6. Update Images
Replace placeholder images with your actual content:
- Game screenshots
- Team member photos
- Blog post thumbnails
- Company logos

### 7. Social Media Links
Update all social media links throughout the site:
- GitHub: Your actual GitHub organization/profile
- YouTube: Your actual YouTube channel
- LinkedIn: Your actual LinkedIn company page
- Twitter/X: Your actual Twitter account

## 🚀 Going Live

### Environment Variables
The `.env.local` file contains your actual credentials. For production:
1. Add these same variables to your hosting platform (Vercel, Netlify, etc.)
2. Never commit the `.env.local` file to version control

### Domain Setup
1. Update Firebase authorized domains in Authentication settings
2. Add your production domain to EmailJS allowed origins

## 🔧 Troubleshooting

### Common Issues:
1. **"Permission denied"** - Check Firestore security rules
2. **"Collection not found"** - Run the population script
3. **EmailJS not working** - Verify service ID, template ID, and public key
4. **Images not loading** - Check image URLs and CORS settings

### Testing Checklist:
- [ ] Firebase connection working
- [ ] Data loading from Firestore
- [ ] Contact form sending emails
- [ ] All sections displaying content
- [ ] Mobile responsiveness
- [ ] All links working

## 📞 Support
If you encounter any issues:
1. Check the browser console for error messages
2. Verify all environment variables are set correctly
3. Ensure Firestore rules are properly configured
4. Test EmailJS integration separately

Your GameDevelopedia website is now ready to go live with real data!
