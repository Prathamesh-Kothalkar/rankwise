"use client";

import Link from "next/link";
import { CardFooter } from "@/components/ui/card";
import DirectLink from "./Adstera/DirectLink";

export default function Footer() {
  return (
    <CardFooter className="flex flex-col gap-6 md:flex-row items-center justify-between py-8 px-6 bg-white border-t border-[#0E665F] mt-12 text-gray-600 text-sm">
      {/* Left: Copyright */}
      <p className="text-center">&copy; 2025 <span className="font-semibold text-[#0F766E]">Guess My College</span>. All rights reserved.</p>

      {/* Right: Links */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-center">
        <Link href="/about" className="hover:text-[#0F766E] transition-colors">About</Link>
        <Link href="/blog" className="hover:text-[#0F766E] transition-colors">Blogs</Link>
        <Link href="/terms-and-conditions" className="hover:text-[#0F766E] transition-colors">Terms & Conditions</Link>
        <Link href="/privacy" className="hover:text-[#0F766E] transition-colors">Privacy Policy</Link>
        <Link href="/sitemap.xml" className="hover:text-[#0F766E] transition-colors">Sitemap</Link>
        <Link href="/contact-us" className="hover:text-[#0F766E] transition-colors">Contact</Link>
        {/* <DirectLink/> */}
        <a
          href="https://www.instagram.com/guess_my_college/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#0F766E] transition-colors"
        >
          Instagram
        </a>
      </div>
    </CardFooter>
  );
}
