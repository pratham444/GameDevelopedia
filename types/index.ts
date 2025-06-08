export interface Game {
  id?: string
  title: string
  description: string
  platform: string
  imageURL: string
  downloadLink: string
}

export interface Tutorial {
  id?: string
  title: string
  videoURL: string
  description: string
  tags: string[]
}

export interface TeamMember {
  id?: string
  name: string
  role: string
  imageURL: string
  socials: {
    github?: string
    linkedin?: string
    twitter?: string
  }
}

export interface BlogPost {
  id?: string
  title: string
  thumbnailURL: string
  content: string
  datePublished: string
  url?: string // New field for blog post redirect URL
}

export interface ContactInfo {
  email: string
  socials: {
    github: string
    youtube: string
    linkedin: string
  }
}

export interface ContactMessage {
  id?: string
  name: string
  email: string
  subject?: string
  message: string
  createdAt?: any
}
