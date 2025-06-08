import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore"
import { db } from "./firebase"
import type { Game, Tutorial, TeamMember, BlogPost, ContactInfo } from "@/types"

// Check if Firebase is properly configured
const isFirebaseConfigured = () => {
  return (
    db && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID !== "demo-project"
  )
}

// Mock data for development/demo - REMOVED FOR CLEAN START
const mockGames: Game[] = []

const mockTutorials: Tutorial[] = []

const mockTeamMembers: TeamMember[] = []

const mockBlogPosts: BlogPost[] = []

const mockContactInfo: ContactInfo = {
  email: "hello@gamedevelopedia.com",
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
