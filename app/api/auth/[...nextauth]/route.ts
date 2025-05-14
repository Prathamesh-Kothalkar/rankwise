import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { username: credentials?.username },
        })

        if (!user) throw new Error('Invalid credentials')

        const isValid = await bcrypt.compare(credentials!.password, user.password)
        if (!isValid) throw new Error('Invalid credentials')

        return { id: user.id, username: user.username, role: user.role }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login', // Optional custom login page
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.username = user.username
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as number
        session.user.username = token.username as string
        session.user.role = token.role as string
      }
      return session
    },
  },
})

export { handler as GET, handler as POST }
