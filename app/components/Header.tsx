'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="w-full sticky top-0 z-50 border-b bg-white border-slate-200 shadow-none">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 h-16 md:h-20">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            alt="Sandown Developments Logo"
            width={130}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="/" className={`text-sm uppercase font-semibold pb-1 ${isActive('/') ? 'text-primary border-b-2 border-primary' : 'text-slate-600 hover:text-primary'}`}>
            Home
          </Link>

          <Link href="/about" className={`text-sm uppercase font-semibold pb-1 ${isActive('/about') ? 'text-primary border-b-2 border-primary' : 'text-slate-600 hover:text-primary'}`}>
            About
          </Link>

          <Link href="/services" className={`text-sm uppercase font-semibold pb-1 ${isActive('/services') ? 'text-primary border-b-2 border-primary' : 'text-slate-600 hover:text-primary'}`}>
            Services
          </Link>

          <Link href="/contact" className={`text-sm uppercase font-semibold pb-1 ${isActive('/contact') ? 'text-primary border-b-2 border-primary' : 'text-slate-600 hover:text-primary'}`}>
            Contact Us
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-4">

          <Link href="/contact">
            <button className="bg-primary-container text-on-primary-container text-[12px] sm:text-[14px] font-semibold px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 rounded-lg whitespace-nowrap">
              Enquire Now
            </button>
          </Link>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 text-slate-700"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 py-4 px-4">
          <nav className="flex flex-col space-y-3">

            <Link href="/" onClick={handleLinkClick} className="text-sm uppercase font-semibold py-2 px-3">
              Home
            </Link>

            <Link href="/about" onClick={handleLinkClick} className="text-sm uppercase font-semibold py-2 px-3">
              About
            </Link>

            <Link href="/services" onClick={handleLinkClick} className="text-sm uppercase font-semibold py-2 px-3">
              Services
            </Link>

            <Link href="/contact" onClick={handleLinkClick} className="text-sm uppercase font-semibold py-2 px-3">
              Contact Us
            </Link>

          </nav>
        </div>
      )}
    </header>
  )
}