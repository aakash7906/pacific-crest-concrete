export type ProjectCategory = 'all' | 'commercial' | 'residential'

export interface FeaturedProject {
  id: string
  title: string
  category: 'commercial' | 'residential'
  location: string
  description: string
  image: string
  highlight?: string
}

export interface GalleryItem {
  id: string
  title: string
  category: 'commercial' | 'residential'
  stage: 'formed' | 'finished' | 'complete'
  caption: string
  image: string
  description?: string
}

export interface ServiceDetail {
  id: string
  name: string
  category: 'commercial' | 'residential' | 'structural' | 'civil'
  description: string
  features: string[]
}

export interface ContactFormData {
  fullName: string
  email: string
  phone: string
  projectType: 'commercial' | 'residential' | 'other'
  service: string
  city: string
  message: string
}
