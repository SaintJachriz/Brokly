declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.gif'
declare module '*.webp'

// Optional: allow importing with ?url (Vite)
declare module '*?url' {
  const src: string
  export default src
}