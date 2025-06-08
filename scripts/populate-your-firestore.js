// Updated script with your Firebase configuration
import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore"

// Your actual Firebase config
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

// Sample data for GameDevelopedia
const gamesData = [
  {
    title: "Neon Runner",
    description:
      "A fast-paced endless runner with stunning neon visuals and electronic soundtrack. Navigate through cyberpunk landscapes while collecting power-ups and avoiding obstacles.",
    platform: "Mobile (iOS/Android)",
    genre: "Endless Runner",
    imageURL: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop",
    downloadLink: "https://play.google.com/store",
    rating: "4.5",
    downloads: "10K",
    players: "5K",
  },
  {
    title: "Cyber Puzzle",
    description:
      "Mind-bending puzzle game set in a cyberpunk world with 100+ challenging levels. Use logic and strategy to hack through digital mazes.",
    platform: "PC/Mac",
    genre: "Puzzle",
    imageURL: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=200&fit=crop",
    downloadLink: "https://steam.com",
    rating: "4.7",
    downloads: "25K",
    players: "12K",
  },
  {
    title: "Space Defender",
    description:
      "Classic arcade-style space shooter with modern graphics and intense gameplay. Defend Earth from alien invasions with upgradeable weapons.",
    platform: "Cross-platform",
    genre: "Shooter",
    imageURL: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=200&fit=crop",
    downloadLink: "https://itch.io",
    rating: "4.3",
    downloads: "15K",
    players: "8K",
  },
  {
    title: "Quantum Quest",
    description:
      "Explore parallel dimensions in this mind-bending adventure game. Solve puzzles across multiple realities to save the multiverse.",
    platform: "PC/Console",
    genre: "Adventure",
    imageURL: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop",
    downloadLink: "https://steam.com",
    rating: "4.6",
    downloads: "30K",
    players: "18K",
  },
  {
    title: "Pixel Warriors",
    description:
      "Retro-style fighting game with modern mechanics and online multiplayer. Choose from 12 unique fighters in epic battles.",
    platform: "PC/Nintendo Switch",
    genre: "Fighting",
    imageURL: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=200&fit=crop",
    downloadLink: "https://nintendo.com",
    rating: "4.4",
    downloads: "20K",
    players: "10K",
  },
  {
    title: "Mystic Realms",
    description:
      "Fantasy RPG with deep character customization and epic storylines. Embark on quests in a magical world full of mysteries.",
    platform: "PC/PlayStation/Xbox",
    genre: "RPG",
    imageURL: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
    downloadLink: "https://store.playstation.com",
    rating: "4.8",
    downloads: "50K",
    players: "35K",
  },
]

const tutorialsData = [
  {
    title: "Unity Basics for Beginners",
    videoURL: "https://youtube.com/watch?v=your-actual-video-id",
    description:
      "Learn the fundamentals of Unity game engine from scratch. Perfect for complete beginners who want to start their game development journey.",
    tags: ["Unity", "Beginner", "Basics", "Game Development"],
  },
  {
    title: "2D Platformer Development",
    videoURL: "https://youtube.com/watch?v=your-actual-video-id",
    description:
      "Create a complete 2D platformer game step by step. Learn player movement, collision detection, and level design.",
    tags: ["Unity", "2D", "Platformer", "Intermediate"],
  },
  {
    title: "Mobile Game Optimization",
    videoURL: "https://youtube.com/watch?v=your-actual-video-id",
    description:
      "Optimize your games for mobile devices and improve performance. Learn about texture compression and memory management.",
    tags: ["Mobile", "Optimization", "Performance", "Advanced"],
  },
  {
    title: "Game UI Design Principles",
    videoURL: "https://youtube.com/watch?v=your-actual-video-id",
    description:
      "Design intuitive and beautiful user interfaces for games. Learn about UX principles specific to game development.",
    tags: ["UI", "Design", "UX", "Interface"],
  },
  {
    title: "C# Programming for Games",
    videoURL: "https://youtube.com/watch?v=your-actual-video-id",
    description:
      "Master C# programming concepts essential for game development. From basics to advanced scripting techniques.",
    tags: ["C#", "Programming", "Scripting", "Intermediate"],
  },
  {
    title: "Multiplayer Game Development",
    videoURL: "https://youtube.com/watch?v=your-actual-video-id",
    description:
      "Build multiplayer games with Unity Netcode. Learn networking, synchronization, and server-client architecture.",
    tags: ["Multiplayer", "Networking", "Unity", "Advanced"],
  },
]

const teamData = [
  {
    name: "Alex Chen",
    role: "Lead Game Developer & Founder",
    bio: "10+ years of experience in game development with expertise in Unity and Unreal Engine. Led development of multiple successful mobile games.",
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
    bio: "Creative designer specializing in game interfaces and user experience design. Passionate about creating intuitive and beautiful game UIs.",
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
    bio: "Expert in mobile game development for iOS and Android platforms. Specialized in performance optimization and cross-platform development.",
    imageURL: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    email: "mike@gamedevelopedia.com",
    socials: {
      github: "https://github.com/mikerodriguez",
      linkedin: "https://linkedin.com/in/mikerodriguez",
    },
  },
  {
    name: "Emily Davis",
    role: "Game Artist",
    bio: "Talented 2D/3D artist creating stunning visuals for games. Experienced in character design, environment art, and animation.",
    imageURL: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    email: "emily@gamedevelopedia.com",
    socials: {
      linkedin: "https://linkedin.com/in/emilydavis",
      twitter: "https://twitter.com/emilydavis",
    },
  },
  {
    name: "David Kim",
    role: "Backend Developer",
    bio: "Full-stack developer specializing in game backend systems, databases, and server architecture for multiplayer games.",
    imageURL: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    email: "david@gamedevelopedia.com",
    socials: {
      github: "https://github.com/davidkim",
      linkedin: "https://linkedin.com/in/davidkim",
    },
  },
  {
    name: "Lisa Wang",
    role: "QA Engineer",
    bio: "Quality assurance specialist ensuring our games are bug-free and provide the best user experience across all platforms.",
    imageURL: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    email: "lisa@gamedevelopedia.com",
    socials: {
      linkedin: "https://linkedin.com/in/lisawang",
    },
  },
]

const blogData = [
  {
    title: "Getting Started with Unity 2D Game Development",
    thumbnailURL: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop",
    content:
      "Learn the fundamentals of Unity 2D development and create your first platformer game from scratch with this comprehensive guide. We'll cover everything from setting up your project to implementing player movement, collision detection, and game mechanics. This tutorial is perfect for beginners who want to dive into game development.",
    excerpt: "Learn the fundamentals of Unity 2D development and create your first platformer game from scratch.",
    author: "Alex Chen",
    datePublished: new Date().toISOString(),
    tags: ["Unity", "2D", "Tutorial", "Beginner"],
  },
  {
    title: "Mobile Game Performance Optimization Tips",
    thumbnailURL: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop",
    content:
      "Essential techniques to optimize your mobile games for better performance and user experience across different devices. Learn about texture compression, draw call optimization, memory management, and battery life considerations. These tips will help your games run smoothly on all mobile devices.",
    excerpt: "Essential techniques to optimize your mobile games for better performance and user experience.",
    author: "Mike Rodriguez",
    datePublished: new Date(Date.now() - 86400000).toISOString(),
    tags: ["Mobile", "Optimization", "Performance"],
  },
  {
    title: "The Art of Game UI Design",
    thumbnailURL: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop",
    content:
      "Explore the principles of effective game interface design and learn how to create intuitive user experiences that enhance gameplay rather than distract from it. We'll cover layout principles, color theory, typography, and accessibility in game UI design.",
    excerpt:
      "Explore the principles of effective game interface design and learn how to create intuitive user experiences.",
    author: "Sarah Johnson",
    datePublished: new Date(Date.now() - 172800000).toISOString(),
    tags: ["UI", "Design", "UX"],
  },
  {
    title: "Building Multiplayer Games with Unity Netcode",
    thumbnailURL: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop",
    content:
      "Step-by-step guide to implementing multiplayer functionality in your Unity games using the latest Netcode for GameObjects. Learn about client-server architecture, network synchronization, and handling player connections.",
    excerpt:
      "Step-by-step guide to implementing multiplayer functionality in your Unity games using the latest Netcode.",
    author: "David Kim",
    datePublished: new Date(Date.now() - 259200000).toISOString(),
    tags: ["Unity", "Multiplayer", "Networking", "Advanced"],
  },
  {
    title: "Game Testing Best Practices",
    thumbnailURL: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=200&fit=crop",
    content:
      "Learn professional game testing methodologies and quality assurance practices to ensure your games are bug-free and provide excellent user experience. Cover automated testing, manual testing, and user acceptance testing.",
    excerpt:
      "Learn professional game testing methodologies and quality assurance practices to ensure your games are bug-free.",
    author: "Lisa Wang",
    datePublished: new Date(Date.now() - 345600000).toISOString(),
    tags: ["Testing", "QA", "Quality Assurance"],
  },
  {
    title: "Creating Stunning Game Art on a Budget",
    thumbnailURL: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=200&fit=crop",
    content:
      "Discover tools and techniques for creating professional-quality game art without breaking the bank. Learn about free and affordable software, asset stores, and techniques for creating compelling visuals.",
    excerpt: "Discover tools and techniques for creating professional-quality game art without breaking the bank.",
    author: "Emily Davis",
    datePublished: new Date(Date.now() - 432000000).toISOString(),
    tags: ["Art", "Design", "Budget", "Tools"],
  },
]

// Contact information
const contactData = {
  email: "hello@gamedevelopedia.com",
  phone: "+1 (555) 123-4567",
  address: "San Francisco, CA",
  socials: {
    github: "https://github.com/gamedevelopedia",
    youtube: "https://youtube.com/@gamedevelopedia",
    linkedin: "https://linkedin.com/company/gamedevelopedia",
    twitter: "https://twitter.com/gamedevelopedia",
  },
}

// Function to populate collections
async function populateFirestore() {
  try {
    console.log("🚀 Starting to populate Firestore with GameDevelopedia data...")

    // Add games
    console.log("📱 Adding games...")
    for (const game of gamesData) {
      const docRef = await addDoc(collection(db, "games"), game)
      console.log(`✅ Added game: ${game.title} with ID: ${docRef.id}`)
    }

    // Add tutorials
    console.log("🎥 Adding tutorials...")
    for (const tutorial of tutorialsData) {
      const docRef = await addDoc(collection(db, "tutorials"), tutorial)
      console.log(`✅ Added tutorial: ${tutorial.title} with ID: ${docRef.id}`)
    }

    // Add team members
    console.log("👥 Adding team members...")
    for (const member of teamData) {
      const docRef = await addDoc(collection(db, "team"), member)
      console.log(`✅ Added team member: ${member.name} with ID: ${docRef.id}`)
    }

    // Add blog posts
    console.log("📝 Adding blog posts...")
    for (const post of blogData) {
      const docRef = await addDoc(collection(db, "blogs"), post)
      console.log(`✅ Added blog post: ${post.title} with ID: ${docRef.id}`)
    }

    // Add contact info (using setDoc with specific document ID)
    console.log("📞 Adding contact info...")
    await setDoc(doc(db, "contact", "info"), contactData)
    console.log("✅ Added contact information")

    console.log("🎉 Firestore populated successfully!")
    console.log("📊 Summary:")
    console.log(`   - ${gamesData.length} games added`)
    console.log(`   - ${tutorialsData.length} tutorials added`)
    console.log(`   - ${teamData.length} team members added`)
    console.log(`   - ${blogData.length} blog posts added`)
    console.log("   - Contact information added")
  } catch (error) {
    console.error("❌ Error populating Firestore:", error)
  }
}

// Run the population script
populateFirestore()
