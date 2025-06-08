// 🚀 EASY DATABASE POPULATION SCRIPT
// This will add sample data to your Firestore database

import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore"

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyALJWumsV1X12TcGdJNnSJ8nIwS3MgMlBI",
  authDomain: "porfoliowebsite444.firebaseapp.com",
  projectId: "porfoliowebsite444",
  storageBucket: "porfoliowebsite444.firebasestorage.app",
  messagingSenderId: "453223925799",
  appId: "1:453223925799:web:a1439524ab662219806602",
  measurementId: "G-R4XK6FW2WF",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// 🎮 GAMES DATA
const games = [
  {
    title: "Neon Runner",
    description: "A fast-paced endless runner with stunning neon visuals and electronic soundtrack.",
    platform: "Mobile (iOS/Android)",
    genre: "Endless Runner",
    imageURL: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop",
    downloadLink: "https://play.google.com/store",
    rating: "4.5",
  },
  {
    title: "Cyber Puzzle",
    description: "Mind-bending puzzle game set in a cyberpunk world with 100+ challenging levels.",
    platform: "PC/Mac",
    genre: "Puzzle",
    imageURL: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=200&fit=crop",
    downloadLink: "https://steam.com",
    rating: "4.7",
  },
  {
    title: "Space Defender",
    description: "Classic arcade-style space shooter with modern graphics and intense gameplay.",
    platform: "Cross-platform",
    genre: "Shooter",
    imageURL: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=200&fit=crop",
    downloadLink: "https://itch.io",
    rating: "4.3",
  },
]

// 🎥 TUTORIALS DATA
const tutorials = [
  {
    title: "Unity Basics for Beginners",
    videoURL: "https://youtube.com/watch?v=your-video-id",
    description: "Learn the fundamentals of Unity game engine from scratch.",
    tags: ["Unity", "Beginner", "Basics"],
  },
  {
    title: "2D Platformer Development",
    videoURL: "https://youtube.com/watch?v=your-video-id",
    description: "Create a complete 2D platformer game step by step.",
    tags: ["Unity", "2D", "Platformer"],
  },
  {
    title: "Mobile Game Optimization",
    videoURL: "https://youtube.com/watch?v=your-video-id",
    description: "Optimize your games for mobile devices and improve performance.",
    tags: ["Mobile", "Optimization"],
  },
]

// 👥 TEAM DATA
const team = [
  {
    name: "Alex Chen",
    role: "Lead Game Developer",
    bio: "10+ years of experience in game development with expertise in Unity and Unreal Engine.",
    imageURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    email: "alex@gamedevelopedia.com",
    socials: {
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen",
    },
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    bio: "Creative designer specializing in game interfaces and user experience design.",
    imageURL: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    email: "sarah@gamedevelopedia.com",
    socials: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
    },
  },
  {
    name: "Mike Rodriguez",
    role: "Mobile Developer",
    bio: "Expert in mobile game development for iOS and Android platforms.",
    imageURL: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    email: "mike@gamedevelopedia.com",
    socials: {
      github: "https://github.com/mikerodriguez",
      linkedin: "https://linkedin.com/in/mikerodriguez",
    },
  },
]

// 📝 BLOG DATA
const blogs = [
  {
    title: "Getting Started with Unity 2D Game Development",
    thumbnailURL: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop",
    content:
      "Learn the fundamentals of Unity 2D development and create your first platformer game from scratch with this comprehensive guide.",
    excerpt: "Learn the fundamentals of Unity 2D development and create your first platformer game from scratch.",
    author: "Alex Chen",
    datePublished: new Date().toISOString(),
    tags: ["Unity", "2D", "Tutorial"],
  },
  {
    title: "Mobile Game Performance Optimization Tips",
    thumbnailURL: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop",
    content:
      "Essential techniques to optimize your mobile games for better performance and user experience across different devices.",
    excerpt: "Essential techniques to optimize your mobile games for better performance and user experience.",
    author: "Mike Rodriguez",
    datePublished: new Date(Date.now() - 86400000).toISOString(),
    tags: ["Mobile", "Optimization"],
  },
  {
    title: "The Art of Game UI Design",
    thumbnailURL: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop",
    content:
      "Explore the principles of effective game interface design and learn how to create intuitive user experiences.",
    excerpt:
      "Explore the principles of effective game interface design and learn how to create intuitive user experiences.",
    author: "Sarah Johnson",
    datePublished: new Date(Date.now() - 172800000).toISOString(),
    tags: ["UI", "Design"],
  },
]

// 📞 CONTACT DATA
const contactInfo = {
  email: "hello@gamedevelopedia.com",
  phone: "+1 (555) 123-4567",
  address: "San Francisco, CA",
  socials: {
    github: "https://github.com/gamedevelopedia",
    youtube: "https://youtube.com/@gamedevelopedia",
    linkedin: "https://linkedin.com/company/gamedevelopedia",
  },
}

// 🚀 POPULATE FUNCTION
async function populateDatabase() {
  console.log("🚀 Starting database population...")

  try {
    // Add Games
    console.log("🎮 Adding games...")
    for (let i = 0; i < games.length; i++) {
      const docRef = await addDoc(collection(db, "games"), games[i])
      console.log(`✅ Added game: ${games[i].title}`)
    }

    // Add Tutorials
    console.log("🎥 Adding tutorials...")
    for (let i = 0; i < tutorials.length; i++) {
      const docRef = await addDoc(collection(db, "tutorials"), tutorials[i])
      console.log(`✅ Added tutorial: ${tutorials[i].title}`)
    }

    // Add Team Members
    console.log("👥 Adding team members...")
    for (let i = 0; i < team.length; i++) {
      const docRef = await addDoc(collection(db, "team"), team[i])
      console.log(`✅ Added team member: ${team[i].name}`)
    }

    // Add Blog Posts
    console.log("📝 Adding blog posts...")
    for (let i = 0; i < blogs.length; i++) {
      const docRef = await addDoc(collection(db, "blogs"), blogs[i])
      console.log(`✅ Added blog post: ${blogs[i].title}`)
    }

    // Add Contact Info
    console.log("📞 Adding contact info...")
    await setDoc(doc(db, "contact", "info"), contactInfo)
    console.log("✅ Added contact information")

    console.log("🎉 DATABASE POPULATED SUCCESSFULLY!")
    console.log("📊 Summary:")
    console.log(`   - ${games.length} games added`)
    console.log(`   - ${tutorials.length} tutorials added`)
    console.log(`   - ${team.length} team members added`)
    console.log(`   - ${blogs.length} blog posts added`)
    console.log("   - Contact info added")
    console.log("")
    console.log("🌐 Now refresh your website to see the data!")
  } catch (error) {
    console.error("❌ Error populating database:", error)
  }
}

// RUN THE SCRIPT
populateDatabase()
