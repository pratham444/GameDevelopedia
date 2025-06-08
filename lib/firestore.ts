import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore"
import { db } from "./firebase"
import type { Game, Tutorial, TeamMember, BlogPost, ContactInfo } from "@/types"

// Check if Firebase is properly configured
const isFirebaseConfigured = () => {
  return (
    db && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID !== "demo-project"
  )
}

// Mock data for development/demo
const mockGames: Game[] = [
  {
    id: "1",
    title: "Neon Runner",
    description: "A fast-paced endless runner with stunning neon visuals and electronic soundtrack.",
    platform: "Mobile (iOS/Android)",
    imageURL: "/placeholder.svg?height=200&width=400",
    downloadLink: "https://play.google.com/store",
  },
  {
    id: "2",
    title: "Cyber Puzzle",
    description: "Mind-bending puzzle game set in a cyberpunk world with 100+ challenging levels.",
    platform: "PC/Mac",
    imageURL: "/placeholder.svg?height=200&width=400",
    downloadLink: "https://steam.com",
  },
  {
    id: "3",
    title: "Space Defender",
    description: "Classic arcade-style space shooter with modern graphics and intense gameplay.",
    platform: "Cross-platform",
    imageURL: "/placeholder.svg?height=200&width=400",
    downloadLink: "https://itch.io",
  },
  {
    id: "4",
    title: "Quantum Quest",
    description: "Explore parallel dimensions in this mind-bending adventure game.",
    platform: "PC/Console",
    imageURL: "/placeholder.svg?height=200&width=400",
    downloadLink: "https://steam.com",
  },
  {
    id: "5",
    title: "Pixel Warriors",
    description: "Retro-style fighting game with modern mechanics and online multiplayer.",
    platform: "PC/Nintendo Switch",
    imageURL: "/placeholder.svg?height=200&width=400",
    downloadLink: "https://nintendo.com",
  },
  {
    id: "6",
    title: "Mystic Realms",
    description: "Fantasy RPG with deep character customization and epic storylines.",
    platform: "PC/PlayStation/Xbox",
    imageURL: "/placeholder.svg?height=200&width=400",
    downloadLink: "https://store.playstation.com",
  },
]

const mockTutorials: Tutorial[] = [
  {
    id: "1",
    title: "Unity Basics for Beginners",
    videoURL: "https://youtube.com/watch?v=example1",
    description: "Learn the fundamentals of Unity game engine from scratch.",
    tags: ["Unity", "Beginner", "Basics"],
  },
  {
    id: "2",
    title: "2D Platformer Development",
    videoURL: "https://youtube.com/watch?v=example2",
    description: "Create a complete 2D platformer game step by step.",
    tags: ["Unity", "2D", "Platformer", "Intermediate"],
  },
  {
    id: "3",
    title: "Mobile Game Optimization",
    videoURL: "https://youtube.com/watch?v=example3",
    description: "Optimize your games for mobile devices and improve performance.",
    tags: ["Mobile", "Optimization", "Performance"],
  },
  {
    id: "4",
    title: "Game UI Design Principles",
    videoURL: "https://youtube.com/watch?v=example4",
    description: "Design intuitive and beautiful user interfaces for games.",
    tags: ["UI", "Design", "UX"],
  },
]

const mockTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alex Chen",
    role: "Lead Game Developer",
    imageURL: "/placeholder.svg?height=300&width=300",
    socials: {
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen",
      twitter: "https://twitter.com/alexchen",
    },
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    imageURL: "/placeholder.svg?height=300&width=300",
    socials: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
    },
  },
  {
    id: "3",
    name: "Mike Rodriguez",
    role: "Mobile Developer",
    imageURL: "/placeholder.svg?height=300&width=300",
    socials: {
      github: "https://github.com/mikerodriguez",
      linkedin: "https://linkedin.com/in/mikerodriguez",
    },
  },
  {
    id: "4",
    name: "Emily Davis",
    role: "Game Artist",
    imageURL: "/placeholder.svg?height=300&width=300",
    socials: {
      linkedin: "https://linkedin.com/in/emilydavis",
      twitter: "https://twitter.com/emilydavis",
    },
  },
  {
    id: "5",
    name: "David Kim",
    role: "Backend Developer",
    imageURL: "/placeholder.svg?height=300&width=300",
    socials: {
      github: "https://github.com/davidkim",
      linkedin: "https://linkedin.com/in/davidkim",
    },
  },
  {
    id: "6",
    name: "Lisa Wang",
    role: "QA Engineer",
    imageURL: "/placeholder.svg?height=300&width=300",
    socials: {
      linkedin: "https://linkedin.com/in/lisawang",
    },
  },
]

const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Unity 2D Game Development",
    thumbnailURL: "/placeholder.svg?height=200&width=400",
    content:
      "Learn the fundamentals of Unity 2D development and create your first platformer game from scratch with this comprehensive guide...",
    datePublished: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Mobile Game Performance Optimization Tips",
    thumbnailURL: "/placeholder.svg?height=200&width=400",
    content:
      "Essential techniques to optimize your mobile games for better performance and user experience across different devices...",
    datePublished: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "3",
    title: "The Art of Game UI Design",
    thumbnailURL: "/placeholder.svg?height=200&width=400",
    content:
      "Explore the principles of effective game interface design and learn how to create intuitive user experiences...",
    datePublished: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: "4",
    title: "Building Multiplayer Games with Unity Netcode",
    thumbnailURL: "/placeholder.svg?height=200&width=400",
    content:
      "Step-by-step guide to implementing multiplayer functionality in your Unity games using the latest Netcode...",
    datePublished: new Date(Date.now() - 259200000).toISOString(),
  },
  {
    id: "5",
    title: "Game Testing Best Practices",
    thumbnailURL: "/placeholder.svg?height=200&width=400",
    content:
      "Learn professional game testing methodologies and quality assurance practices to ensure your games are bug-free...",
    datePublished: new Date(Date.now() - 345600000).toISOString(),
  },
  {
    id: "6",
    title: "Creating Stunning Game Art on a Budget",
    thumbnailURL: "/placeholder.svg?height=200&width=400",
    content: "Discover tools and techniques for creating professional-quality game art without breaking the bank...",
    datePublished: new Date(Date.now() - 432000000).toISOString(),
  },
]

const mockContactInfo: ContactInfo = {
  email: "support@gamedevelopedia.com",
  socials: {
    github: "https://github.com/gamedevelopedia",
    youtube: "https://youtube.com/@gamedevelopedia",
    linkedin: "https://linkedin.com/company/gamedevelopedia",
  },
}

// Generic Firestore operations with fallback
export class FirestoreService {
  static async addDocument(collectionName: string, data: any) {
    if (!isFirebaseConfigured()) {
      console.warn("Firebase not configured, simulating document addition")
      return "mock-id-" + Date.now()
    }

    try {
      const docRef = await addDoc(collection(db, collectionName), data)
      return docRef.id
    } catch (error) {
      console.error("Error adding document:", error)
      throw error
    }
  }

  static async getDocuments(collectionName: string) {
    if (!isFirebaseConfigured()) {
      console.warn("Firebase not configured, returning mock data")
      return []
    }

    try {
      const querySnapshot = await getDocs(collection(db, collectionName))
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    } catch (error) {
      console.error("Error getting documents:", error)
      return []
    }
  }

  static async getDocument(collectionName: string, docId: string) {
    if (!isFirebaseConfigured()) {
      console.warn("Firebase not configured, returning mock data")
      return null
    }

    try {
      const docRef = doc(db, collectionName, docId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        }
      } else {
        return null
      }
    } catch (error) {
      console.error("Error getting document:", error)
      return null
    }
  }
}

// Specific collection functions with mock data fallback
export const getGames = async (): Promise<Game[]> => {
  if (!isFirebaseConfigured()) {
    console.log("Using mock games data")
    return mockGames
  }

  try {
    const games = await FirestoreService.getDocuments("games")
    return games.length > 0 ? (games as Game[]) : mockGames
  } catch (error) {
    console.error("Error fetching games:", error)
    return mockGames
  }
}

export const getTutorials = async (): Promise<Tutorial[]> => {
  if (!isFirebaseConfigured()) {
    console.log("Using mock tutorials data")
    return mockTutorials
  }

  try {
    const tutorials = await FirestoreService.getDocuments("tutorials")
    return tutorials.length > 0 ? (tutorials as Tutorial[]) : mockTutorials
  } catch (error) {
    console.error("Error fetching tutorials:", error)
    return mockTutorials
  }
}

export const getTeamMembers = async (): Promise<TeamMember[]> => {
  if (!isFirebaseConfigured()) {
    console.log("Using mock team data")
    return mockTeamMembers
  }

  try {
    const members = await FirestoreService.getDocuments("team")
    return members.length > 0 ? (members as TeamMember[]) : mockTeamMembers
  } catch (error) {
    console.error("Error fetching team members:", error)
    return mockTeamMembers
  }
}

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  if (!isFirebaseConfigured()) {
    console.log("Using mock blog data")
    return mockBlogPosts
  }

  try {
    const posts = await FirestoreService.getDocuments("blogs")
    return posts.length > 0 ? (posts as BlogPost[]) : mockBlogPosts
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return mockBlogPosts
  }
}

export const getContactInfo = async (): Promise<ContactInfo> => {
  if (!isFirebaseConfigured()) {
    console.log("Using mock contact data")
    return mockContactInfo
  }

  try {
    const contactDoc = await FirestoreService.getDocument("contact", "info")
    return contactDoc ? (contactDoc as ContactInfo) : mockContactInfo
  } catch (error) {
    console.error("Error fetching contact info:", error)
    return mockContactInfo
  }
}

export const addContactMessage = async (messageData: any) => {
  if (!isFirebaseConfigured()) {
    console.log("Contact message would be saved:", messageData)
    return "mock-contact-id"
  }

  return FirestoreService.addDocument("contact", messageData)
}
