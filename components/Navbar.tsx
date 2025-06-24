'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { getSession } from 'next-auth/react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(true);

  useEffect(()=>{
   const checkUserLoggedIn = async () => {
      const session = await getSession();
      if (session) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    }
    checkUserLoggedIn();
  },[])
  return (
 <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 text-[#0F766E] shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Guess My College
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/contact-us" className="hover:underline">
            Contact Us
          </Link>

          <Link href="/blog" className="hover:underline">
            Blogs
          </Link>
        
            {isUserLoggedIn ? (
                <Link href="/profile" className="bg-[#0F766E] text-white px-5 py-2 rounded-lg hover:bg-[#0e665f] transition">
                  My Profile
                </Link>
            ) : (
                <Link href="/login" className="bg-[#0F766E] text-white px-5 py-2 rounded-lg hover:bg-[#0e665f] transition">
                Login Now
                </Link>
            )}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-[#0F766E] bg-white focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link href="/about" className="block hover:underline" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link href="/contact-us" className="block hover:underline" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
          <Link href="/blog" className="block hover:underline" onClick={() => setIsOpen(false)}>
            Blogs
          </Link>
          {isUserLoggedIn ? (
              <div className="">
                 <Link href="/profile" className="bg-[#0F766E] text-white px-5 py-2 rounded-lg hover:bg-[#0e665f] transition">
                  My Profile
                </Link>
              </div>
               
            ) : (
              <div className="">
                <Link href="/login" className="bg-[#0F766E] text-white px-5 py-2 rounded-lg hover:bg-[#0e665f] transition">
                Login Now
                </Link>
                </div>
            )}
        </div>
      )}
    </nav>
  );
}
