"use client"

import Link from "next/link"
import { CardFooter } from "@/components/ui/card"

export default function Footer() {
  return (
    <CardFooter className="flex flex-col md:flex-row items-center justify-between py-6 px-4 text-sm text-gray-600 gap-4 border-t border-[#0E665F] mt-12">
      <p className="text-center">&copy; 2025 Guess My College. All rights reserved.</p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link href="/about" className="hover:text-black transition">About</Link>
        <Link href="/terms-and-conditions" className="hover:text-black transition">Terms & Conditions</Link>
         <Link href="/privacy" className="hover:text-black transition">Privacy Policy</Link>
        <Link href="/sitemap.xml" className="hover:text-black transition">Sitemap</Link>
      <Link href="/contact-us" className="hover:text-black transition">Contact</Link>
      </div>
    </CardFooter>
  )
}
