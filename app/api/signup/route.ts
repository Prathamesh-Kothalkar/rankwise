import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST(req: Request) {
  const { name,username, password } = await req.json()

  if (!name || !username || !password) {
    return NextResponse.json({ error: 'Missing username or password' }, { status: 400 })
  }

  const existingUser = await prisma.user.findFirst({ where: { username } })
  if (existingUser) {
    return NextResponse.json({ error: 'User already exists' }, { status: 409 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await prisma.user.create({
    data: {
      name,
      username,
      password: hashedPassword,
    },
  })

  return NextResponse.json({ message: 'Signup successful' }, { status: 201 })
}
