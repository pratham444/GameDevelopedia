// Run this script to populate your Firestore database
import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc } from "firebase/firestore"

// Your Firebase config (replace with your actual config)
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Sample data to populate your database
const gamesData = [
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

const tutorialsData = [
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
    tags: ["Unity", "2D", "Platformer", "Intermediate"],
  },
  {
    title: "Mobile Game Optimization",
    videoURL: "https://youtube.com/watch?v=your-video-id",
    description: "Optimize your games for mobile devices and improve performance.",
    tags: ["Mobile", "Optimization", "Performance"],
  },
]

const teamData = [
  {
    name: "Alex Chen",
    role: "Lead Game Developer",
    bio: "10+ years of experience in game development with expertise in Unity and Unreal Engine.",
    imageURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    email: "alex@gamedevelopedia.com",
    socials: {
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen",
      twitter: "https://twitter.com/alexchen",
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
      twitter: "https://twitter.com/sarahjohnson",
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

const blogData = [
  {
    title: "Getting Started with Unity 2D Game Development",
    thumbnailURL: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop",
    content:
      "Learn the fundamentals of Unity 2D development and create your first platformer game from scratch with this comprehensive guide. We'll cover everything from setting up your project to implementing player movement, collision detection, and game mechanics.",
    excerpt: "Learn the fundamentals of Unity 2D development and create your first platformer game from scratch.",
    author: "Alex Chen",
    datePublished: new Date().toISOString(),
    tags: ["Unity", "2D", "Tutorial", "Beginner"],
  },
  {
    title: "Mobile Game Performance Optimization Tips",
    thumbnailURL: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop",
    content:
      "Essential techniques to optimize your mobile games for better performance and user experience across different devices. Learn about texture compression, draw call optimization, and memory management.",
    excerpt: "Essential techniques to optimize your mobile games for better performance and user experience.",
    author: "Mike Rodriguez",
    datePublished: new Date(Date.now() - 86400000).toISOString(),
    tags: ["Mobile", "Optimization", "Performance"],
  },
  {
    title: "The Art of Game UI Design",
    thumbnailURL: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop",
    content:
      "Explore the principles of effective game interface design and learn how to create intuitive user experiences that enhance gameplay rather than distract from it.",
    excerpt:
      "Explore the principles of effective game interface design and learn how to create intuitive user experiences.",
    author: "Sarah Johnson",
    datePublished: new Date(Date.now() - 172800000).toISOString(),
    tags: ["UI", "Design", "UX"],
  },
]

const contactData = {
  email: "hello@gamedevelopedia.com",
  socials: {
    github: "https://github.com/gamedevelopedia",
    youtube: "https://youtube.com/@gamedevelopedia",
    linkedin: "https://linkedin.com/company/gamedevelopedia",
  },
}

// Function to populate collections
async function populateFirestore() {
  try {
    console.log("Starting to populate Firestore...")

    // Add games
    console.log("Adding games...")
    for (const game of gamesData) {
      await addDoc(collection(db, "games"), game)
    }

    // Add tutorials
    console.log("Adding tutorials...")
    for (const tutorial of tutorialsData) {
      await addDoc(collection(db, "tutorials"), tutorial)
    }

    // Add team members
    console.log("Adding team members...")
    for (const member of teamData) {
      await addDoc(collection(db, "team"), member)
    }

    // Add blog posts
    console.log("Adding blog posts...")
    for (const post of blogData) {
      await addDoc(collection(db, "blogs"), post)
    }

    // Add contact info (single document)
    console.log("Adding contact info...")
    await addDoc(collection(db, "contact"), contactData)

    console.log("Firestore populated successfully!")
  } catch (error) {
    console.error("Error populating Firestore:", error)
  }
}

// Run the population script
populateFirestore()
