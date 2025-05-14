import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: number
      username: string
      role: string
    }
  }

  interface User {
    id: number
    username: string
    role: string
  }
}
